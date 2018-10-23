(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _item = require("./shopping_list/item");

var _reop = require("./shopping_list/reop");

var _service = require("./shopping_list/service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.service = new _service2.default(new _reop.ShoppingListRepository());
  }

  _createClass(App, [{
    key: "run",
    value: function run() {
      this.service.create("milk");
      var items = this.service.getAll();
      console.log(items);
    }
  }]);

  return App;
}();

exports.default = App;

},{"./shopping_list/item":3,"./shopping_list/reop":4,"./shopping_list/service":5}],2:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShoppingListRepository = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Todo store


var _item = require("./item");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShoppingListRepository = function () {
  function ShoppingListRepository() {
    _classCallCheck(this, ShoppingListRepository);

    this.items = [];
  }

  _createClass(ShoppingListRepository, [{
    key: "add",
    value: function add(item) {
      this.items.push(item);
    }
  }, {
    key: "deleteById",
    value: function deleteById(id) {
      this.items = this.items.filter(function (td) {
        return td.id !== id;
      });
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.items.map(function (e) {
        return e;
      });
    }
  }]);

  return ShoppingListRepository;
}();

exports.ShoppingListRepository = ShoppingListRepository;

},{"./item":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // imports someText in addition to default.


var _item = require("./item");

var _reop = require("./reop");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// imports someText in addition to default.

var ShoppingListService = function () {
  function ShoppingListService(repository) {
    _classCallCheck(this, ShoppingListService);

    this.repo = repository;
  }

  _createClass(ShoppingListService, [{
    key: "create",
    value: function create(taskDescription) {
      var item = new _item.ShoppingListItem(taskDescription);
      this.repo.add(item);
    }
  }, {
    key: "deleteById",
    value: function deleteById(id) {
      this.repo.deleteById(id);
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.repo.getAll();
    }
  }]);

  return ShoppingListService;
}();

exports.default = ShoppingListService;

},{"./item":3,"./reop":4}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvc2hvcHBpbmdfbGlzdC9pdGVtLmpzIiwiYXBwL3NjcmlwdHMvc3JjL3Nob3BwaW5nX2xpc3QvcmVvcC5qcyIsImFwcC9zY3JpcHRzL3NyYy9zaG9wcGluZ19saXN0L3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOztBQUNBOztBQUNBOzs7Ozs7OztJQUdNLEc7QUFDSixpQkFBYTtBQUFBOztBQUNYLFNBQUssT0FBTCxHQUFlLElBQUksaUJBQUosQ0FBd0IsSUFBSSw0QkFBSixFQUF4QixDQUFmO0FBQ0Q7Ozs7MEJBRUk7QUFDSCxXQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE1BQXBCO0FBQ0EsVUFBSSxRQUFRLEtBQUssT0FBTCxDQUFhLE1BQWIsRUFBWjtBQUNBLGNBQVEsR0FBUixDQUFZLEtBQVo7QUFDRDs7Ozs7O2tCQUdZLEc7Ozs7O0FDakJmOzs7Ozs7QUFHQSxPQUFPLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDO0FBQUEsU0FBTSxJQUFJLGFBQUosR0FBVSxHQUFWLEVBQU47QUFBQSxDQUFoQztBQUNBOzs7Ozs7Ozs7OztJQ0pNLGdCLEdBQ0osMEJBQVksV0FBWixFQUF3QjtBQUFBOztBQUV0QixPQUFLLEVBQUwsR0FBVSxLQUFLLE1BQUwsS0FBZ0IsS0FBMUI7QUFDQSxPQUFLLFdBQUwsR0FBbUIsV0FBbkI7QUFDQSxPQUFLLE9BQUwsR0FBZSxJQUFJLElBQUosRUFBZjs7QUFFQSxVQUFRLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLElBQXpCO0FBQ0QsQzs7UUFJSyxnQixHQUFBLGdCOzs7Ozs7Ozs7O3FqQkNaUjs7O0FBQ0E7Ozs7SUFFTSxzQjtBQUNKLG9DQUFhO0FBQUE7O0FBQ1gsU0FBSyxLQUFMLEdBQWEsRUFBYjtBQUNEOzs7O3dCQUVHLEksRUFBSztBQUNQLFdBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBaEI7QUFDRDs7OytCQUVVLEUsRUFBRztBQUNaLFdBQUssS0FBTCxHQUFhLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBbUI7QUFBQSxlQUFNLEdBQUcsRUFBSCxLQUFVLEVBQWhCO0FBQUEsT0FBbkIsQ0FBYjtBQUNEOzs7NkJBRU87QUFDTixhQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZTtBQUFBLGVBQUssQ0FBTDtBQUFBLE9BQWYsQ0FBUDtBQUNEOzs7Ozs7UUFHTSxzQixHQUFBLHNCOzs7Ozs7Ozs7cWpCQ3JCZ0M7OztBQUF6Qzs7QUFDQTs7OztBQUErQzs7SUFFMUIsbUI7QUFDbkIsK0JBQVksVUFBWixFQUF1QjtBQUFBOztBQUNyQixTQUFLLElBQUwsR0FBWSxVQUFaO0FBQ0Q7Ozs7MkJBRU0sZSxFQUFnQjtBQUNyQixVQUFJLE9BQU8sSUFBSSxzQkFBSixDQUFxQixlQUFyQixDQUFYO0FBQ0EsV0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLElBQWQ7QUFDRDs7OytCQUVVLEUsRUFBRztBQUNaLFdBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsRUFBckI7QUFDRDs7OzZCQUVPO0FBQ04sYUFBTyxLQUFLLElBQUwsQ0FBVSxNQUFWLEVBQVA7QUFDRDs7Ozs7O2tCQWhCa0IsbUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge1Nob3BwaW5nTGlzdEl0ZW19IGZyb20gXCIuL3Nob3BwaW5nX2xpc3QvaXRlbVwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RSZXBvc2l0b3J5fSBmcm9tIFwiLi9zaG9wcGluZ19saXN0L3Jlb3BcIjtcbmltcG9ydCBTaG9wcGluZ0xpc3RTZXJ2aWNlIGZyb20gXCIuL3Nob3BwaW5nX2xpc3Qvc2VydmljZVwiO1xuXG5cbmNsYXNzIEFwcHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnNlcnZpY2UgPSBuZXcgU2hvcHBpbmdMaXN0U2VydmljZShuZXcgU2hvcHBpbmdMaXN0UmVwb3NpdG9yeSgpKTtcbiAgfVxuXG4gIHJ1bigpe1xuICAgIHRoaXMuc2VydmljZS5jcmVhdGUoXCJtaWxrXCIpO1xuICAgIGxldCBpdGVtcyA9IHRoaXMuc2VydmljZS5nZXRBbGwoKTtcbiAgICBjb25zb2xlLmxvZyhpdGVtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gbmV3IEFwcCgpLnJ1bigpKTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiBjb25zb2xlLmxvZyhcInN0YXJ0aW5nIHNob3BwaW5nIGFwcFwiKSApO1xuIiwiY2xhc3MgU2hvcHBpbmdMaXN0SXRlbXtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pe1xuXG4gICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkgKyBcIl9pZFwiO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNyZWF0ZWQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc29sZS5sb2coXCJDcmVhdGluZyBcIiwgdGhpcyk7XG4gIH1cbn1cblxuXG5leHBvcnQge1Nob3BwaW5nTGlzdEl0ZW19O1xuIiwiLy8gVG9kbyBzdG9yZVxuaW1wb3J0IHtTaG9wcGluZ0xpc3RJdGVtfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmNsYXNzIFNob3BwaW5nTGlzdFJlcG9zaXRvcnl7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICB9XG5cbiAgYWRkKGl0ZW0pe1xuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgfVxuXG4gIGRlbGV0ZUJ5SWQoaWQpe1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlciggdGQgPT4gdGQuaWQgIT09IGlkKTtcbiAgfVxuXG4gIGdldEFsbCgpe1xuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcChlID0+IGUpO1xuICB9XG59XG5cbmV4cG9ydCAge1Nob3BwaW5nTGlzdFJlcG9zaXRvcnl9O1xuIiwiaW1wb3J0IHtTaG9wcGluZ0xpc3RJdGVtfSBmcm9tIFwiLi9pdGVtXCI7IC8vIGltcG9ydHMgc29tZVRleHQgaW4gYWRkaXRpb24gdG8gZGVmYXVsdC5cbmltcG9ydCB7U2hvcHBpbmdMaXN0UmVwb3NpdG9yeX0gZnJvbSBcIi4vcmVvcFwiOyAvLyBpbXBvcnRzIHNvbWVUZXh0IGluIGFkZGl0aW9uIHRvIGRlZmF1bHQuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BwaW5nTGlzdFNlcnZpY2V7XG4gIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnkpe1xuICAgIHRoaXMucmVwbyA9IHJlcG9zaXRvcnk7XG4gIH1cblxuICBjcmVhdGUodGFza0Rlc2NyaXB0aW9uKXtcbiAgICBsZXQgaXRlbSA9IG5ldyBTaG9wcGluZ0xpc3RJdGVtKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgdGhpcy5yZXBvLmFkZChpdGVtKTtcbiAgfVxuXG4gIGRlbGV0ZUJ5SWQoaWQpe1xuICAgIHRoaXMucmVwby5kZWxldGVCeUlkKGlkKTtcbiAgfVxuXG4gIGdldEFsbCgpe1xuICAgIHJldHVybiB0aGlzLnJlcG8uZ2V0QWxsKCk7XG4gIH1cbn1cbiJdfQ==
