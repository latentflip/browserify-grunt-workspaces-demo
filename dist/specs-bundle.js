;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var foo;

foo = require('../app/foo/foo.coffee');

describe('foo', function() {
  return it('should return a message', function() {
    return expect(foo('msg')).toEqual('The message is: msg');
  });
});


},{"../app/foo/foo.coffee":2}],2:[function(require,module,exports){
module.exports = function(a) {
  return "The message is: " + a;
};


},{}]},{},[1])
;