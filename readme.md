# multi-regl-transform

browserify transform to transparently convert the
[regl][1] API to use [multi-regl][2]

[1]: http://regl.party
[2]: https://npmjs.com/package/multi-regl

# usage

Write your regl code like normal, but create multiple scenes.

To use, pick one of these:

```
$ browserify -t multi-regl-transform main.js > bundle.js
$ watchify -t multi-regl-transform main.js -o bundle.js
$ budo main.js -- -t multi-regl-transform
```

or configure from package.json:

``` json
{
  "browserify": {
    "transform": ["multi-regl-transform"]
  }
}
```

To specify configuration options:

```
$ browserify -t [ multi-regl-transform main.js --width=800 --height=400 ] > bundle.js
```

or from package.json:

``` json
{
  "browserify": {
    "transform": [["multi-regl-transform",{"width":800,"height":400}]]
  }
}
```

# options

* `width` - width of the regl canvas. default: 400
* `height` - height of the regl canvas. default: 300
* `target` - target element query selector to append to. default: `body`
* `display` - set the css display style. default: inline-block
* `code` - execute a javascript code string before calling multiregl
* `class` - set the class of the element. May contain code in `${}`.
* `id` - set the id of the element. May contain code in `${}`.

For all code options, `element` and the element index `i` are in scope.

# install

Install both `multi-regl-transform` and `multi-regl`:

```
$ npm install multi-regl-transform multi-regl
```

# license

BSD
