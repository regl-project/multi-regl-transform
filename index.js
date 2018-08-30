var staticModule = require('static-module')
var through = require('through2')

module.exports = function (file, opts) {
  if (/\.json$/.test(file)) return through()
  return staticModule({
    regl: function (ropts) {
      var target = opts.target || 'document.body'
      if (target === 'body') target = 'document.body'
      if (target !== 'document.body') {
        target = 'document.querySelector(' + JSON.stringify(target) + ')'
      }
      var extensions = ropts && ropts.extensions || []
      return '((function () {'
        + 'if (typeof __MULTIREGL === "undefined") {\n'
        + '__MULTIREGL = require("multi-regl")({'
          + 'extensions:'+JSON.stringify(extensions) + '})\n'
        + '__MULTIREGL_IX = 0\n'
        + '}\n'
        + 'var element = document.createElement("div")\n'
        + 'var i = __MULTIREGL_IX\n'
        + (opts['class'] ? 'element.setAttribute("class",'
          + interp(opts['class'])+')\n' : '')
        + (opts.id ? 'element.setAttribute("id",'
          + interp(opts.id)+')\n' : '')
        + target + '.appendChild(element)\n'
        + 'element.style.width = "' + (opts.width || '400px') + '"\n'
        + 'element.style.height = "' + (opts.height || '300px') + '"\n'
        + 'element.style.display = '
          + JSON.stringify(opts.display || 'inline-block') + '\n'
        + (opts.code ? ';(function(){'+opts.code+'})()' : '') + '\n'
        + '__MULTIREGL_IX++\n'
        + 'return __MULTIREGL(element)\n'
        + '})())'
    }
  })
}

function interp (str) {
  return '"' + str.replace(/\$\{([^}]+)\}|"/g, function (_, x) {
    if (_ === '"') return '\\"'
    return '"+(' + x + ')+"'
  }) + '"'
}
