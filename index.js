var staticModule = require('static-module')
module.exports = function (file, opts) {
  return staticModule({
    regl: function () {
      return '((function () {'
        + 'if (typeof __MULTIREGL === "undefined") {\n'
        + '__MULTIREGL = require("multi-regl")()\n'
        + '}\n'
        + 'var div = document.createElement("div")\n'
        + 'document.body.appendChild(div)\n'
        + 'div.style.width = "' + (opts.width || '400px') + '"\n'
        + 'div.style.height = "' + (opts.height || '300px') + '"\n'
        + 'div.style.display = "inline-block"\n'
        + 'return __MULTIREGL(div)\n'
        + '})())'
    }
  })
}
