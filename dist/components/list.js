'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_wepy$component) {
  _inherits(List, _wepy$component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return List;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.data = {
    list: [{
      id: '0',
      title: 'loading'
    }]
  };
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log($event);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.name);
    }
  };
  this.methods = {
    tap: function tap() {
      // this.num = this.num + 1
      console.log(this.$name + ' tap');
    },
    add: function add() {
      var len = this.list.length;
      this.list.push({ id: len + 1, title: 'title_' + len });
    }
  };
};

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsImNvbXBvbmVudCIsImRhdGEiLCJsaXN0IiwiaWQiLCJ0aXRsZSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiLCJtZXRob2RzIiwidGFwIiwiYWRkIiwibGVuIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkE2QlQsQ0FDVDs7OztFQTlCK0IsZUFBS0MsUzs7Ozs7T0FDckNDLEksR0FBTztBQUNMQyxVQUFNLENBQ0o7QUFDRUMsVUFBSSxHQUROO0FBRUVDLGFBQU87QUFGVCxLQURJO0FBREQsRztPQVNQQyxNLEdBQVM7QUFDUCx1QkFBbUIsMEJBQWE7QUFBQTs7QUFDOUIsVUFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUgsTUFBWjtBQUNBRSxjQUFRQyxHQUFSLENBQWUsT0FBS0MsS0FBcEIsaUJBQXFDSixPQUFPSyxJQUE1QyxjQUF5REwsT0FBT00sTUFBUCxDQUFjRCxJQUF2RTtBQUNEO0FBTE0sRztPQVFURSxPLEdBQVU7QUFDUkMsT0FEUSxpQkFDRDtBQUNMO0FBQ0FOLGNBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsTUFBekI7QUFDRCxLQUpPO0FBS1JLLE9BTFEsaUJBS0Q7QUFDTCxVQUFJQyxNQUFNLEtBQUtkLElBQUwsQ0FBVUssTUFBcEI7QUFDQSxXQUFLTCxJQUFMLENBQVVlLElBQVYsQ0FBZSxFQUFDZCxJQUFJYSxNQUFNLENBQVgsRUFBY1osT0FBTyxXQUFXWSxHQUFoQyxFQUFmO0FBQ0Q7QUFSTyxHOzs7a0JBbEJTakIsSSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBkYXRhID0ge1xuICAgICAgbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICcwJyxcbiAgICAgICAgICB0aXRsZTogJ2xvYWRpbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtYnJvYWRjYXN0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UubmFtZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0YXAgKCkge1xuICAgICAgICAvLyB0aGlzLm51bSA9IHRoaXMubnVtICsgMVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKVxuICAgICAgfSxcbiAgICAgIGFkZCAoKSB7XG4gICAgICAgIGxldCBsZW4gPSB0aGlzLmxpc3QubGVuZ3RoXG4gICAgICAgIHRoaXMubGlzdC5wdXNoKHtpZDogbGVuICsgMSwgdGl0bGU6ICd0aXRsZV8nICsgbGVufSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgIH1cbiAgfVxuIl19