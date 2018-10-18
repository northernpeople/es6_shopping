(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ShoppingListItem = require("./model/ShoppingListItem");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.model = new _ShoppingListItem.ShoppingListItem("description");
  }

  _createClass(App, [{
    key: "run",
    value: function run() {}
  }]);

  return App;
}();

exports.default = App;

},{"./model/ShoppingListItem":3}],2:[function(require,module,exports){
"use strict";

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener("load", function () {
  return new _app2.default().run();
});
// window.addEventListener("load", () => console.log("starting shopping app") );

},{"./app":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShoppingListItem = function ShoppingListItem(description) {
  _classCallCheck(this, ShoppingListItem);

  this.id = Math.random() + "_id";
  this.description = description;
  this.created = new Date();

  console.log("Creating ", this);
};

exports.ShoppingListItem = ShoppingListItem;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvbW9kZWwvU2hvcHBpbmdMaXN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDQUE7Ozs7SUFJTSxHO0FBQ0osaUJBQWE7QUFBQTs7QUFDWCxTQUFLLEtBQUwsR0FBYSxJQUFJLGtDQUFKLENBQXFCLGFBQXJCLENBQWI7QUFFRDs7OzswQkFFSSxDQUVKOzs7Ozs7a0JBR1ksRzs7Ozs7QUNmZjs7Ozs7O0FBR0EsT0FBTyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQztBQUFBLFNBQU0sSUFBSSxhQUFKLEdBQVUsR0FBVixFQUFOO0FBQUEsQ0FBaEM7QUFDQTs7Ozs7Ozs7Ozs7SUNKTSxnQixHQUNKLDBCQUFZLFdBQVosRUFBd0I7QUFBQTs7QUFFdEIsT0FBSyxFQUFMLEdBQVUsS0FBSyxNQUFMLEtBQWdCLEtBQTFCO0FBQ0EsT0FBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsT0FBSyxPQUFMLEdBQWUsSUFBSSxJQUFKLEVBQWY7O0FBRUEsVUFBUSxHQUFSLENBQVksV0FBWixFQUF5QixJQUF6QjtBQUNELEM7O1FBSUssZ0IsR0FBQSxnQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7U2hvcHBpbmdMaXN0SXRlbX0gZnJvbSBcIi4vbW9kZWwvU2hvcHBpbmdMaXN0SXRlbVwiO1xuXG5cblxuY2xhc3MgQXBwe1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMubW9kZWwgPSBuZXcgU2hvcHBpbmdMaXN0SXRlbShcImRlc2NyaXB0aW9uXCIpO1xuXG4gIH1cblxuICBydW4oKXtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IG5ldyBBcHAoKS5ydW4oKSk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gY29uc29sZS5sb2coXCJzdGFydGluZyBzaG9wcGluZyBhcHBcIikgKTtcbiIsImNsYXNzIFNob3BwaW5nTGlzdEl0ZW17XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uKXtcblxuICAgIHRoaXMuaWQgPSBNYXRoLnJhbmRvbSgpICsgXCJfaWRcIjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jcmVhdGVkID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgXCIsIHRoaXMpO1xuICB9XG59XG5cblxuZXhwb3J0IHtTaG9wcGluZ0xpc3RJdGVtfTtcbiJdfQ==
