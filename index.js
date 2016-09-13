var staticModule = require('static-module')
module.exports = function (file, opts) {
  return staticModule({
    regl: function () {
      var target = opts.target || 'document.body'
      if (target === 'body') target = 'document.body'
      if (target !== 'document.body') {
        target = 'document.querySelector(' + JSON.stringify(target) + ')'
      }
      return '((function () {'
        + 'if (typeof __MULTIREGL === "undefined") {\n'
        + '__MULTIREGL = require("multi-regl")()\n'
        + '}\n'
        + 'var div = document.createElement("div")\n'
        + target + '.appendChild(div)\n'
        + 'div.style.width = "' + (opts.width || '400px') + '"\n'
        + 'div.style.height = "' + (opts.height || '300px') + '"\n'
        + 'div.style.display = '
          + JSON.stringify(opts.display || 'inline-block') + '\n'
        + 'return __MULTIREGL(div)\n'
        + '})())'
    }
  })
}
