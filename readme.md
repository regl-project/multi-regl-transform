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

# license

BSD
