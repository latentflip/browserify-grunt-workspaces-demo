;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var foo;

foo = require('./foo/foo.coffee');

alert(foo(1));


},{"./foo/foo.coffee":2}],2:[function(require,module,exports){
module.exports = function(a) {
  return "The message is: " + a;
};


},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJicm93c2VyaWZ5Oi8vYXBwLmNvZmZlZSIsImJyb3dzZXJpZnk6Ly9mb28vZm9vLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsR0FBQSxDQUFBOztBQUFBLENBQUEsRUFBQSxJQUFNLFdBQUE7O0FBRU4sQ0FGQSxFQUVNLEVBQU47Ozs7QUNGQSxDQUFPLEVBQVUsR0FBWCxDQUFOLEVBQWtCO0NBQUQsRUFDRyxNQUFqQixTQUFBO0NBRGMiLCJzb3VyY2VzQ29udGVudCI6bnVsbH0=
;