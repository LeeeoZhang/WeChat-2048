'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Row = require('./Row.js');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_wepy$component) {
  _inherits(Board, _wepy$component);

  function Board() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Board);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Board.__proto__ || Object.getPrototypeOf(Board)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      startX: 0,
      startY: 0,
      diffX: 0,
      diffY: 0
    }, _this.$repeat = { "matrix": { "com": "row", "props": "" } }, _this.$props = { "row": { "xmlns:v-bind": { "value": "", "for": "matrix", "item": "item", "index": "index", "key": "index" }, "v-bind:rowIndex.sync": { "value": "index", "type": "index", "for": "matrix", "item": "item", "index": "index", "key": "index" }, "v-bind:matrix.once": { "value": "matrix", "for": "matrix", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      row: _Row2.default
    }, _this.computed = {
      matrix: function matrix() {
        return this.$parent.matrix;
      }
    }, _this.methods = {
      onTouchStart: function onTouchStart(event) {
        this.data.startX = event.touches[0].clientX;
        this.data.startY = event.touches[0].clientY;
      },
      onTouchMove: function onTouchMove(event) {
        this.data.diffX = event.touches[0].clientX - this.data.startX;
        this.data.diffY = event.touches[0].clientY - this.data.startY;
      },
      onTouchEnd: function onTouchEnd() {
        if (this.data.diffX > 100) {
          //右滑
          this.$emit('combineToRight');
        } else if (this.data.diffX < -100) {
          //左滑
          this.$emit('combineToLeft');
        } else if (this.data.diffY > 100) {
          //下滑
          this.$emit('combineToBottom');
        } else if (this.data.diffY < -100) {
          //上滑
          this.$emit('combineToTop');
        }
        this.data.diffX = 0;
        this.data.diffY = 0;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Board;
}(_wepy2.default.component);

exports.default = Board;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJvYXJkLmpzIl0sIm5hbWVzIjpbIkJvYXJkIiwiZGF0YSIsInN0YXJ0WCIsInN0YXJ0WSIsImRpZmZYIiwiZGlmZlkiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJyb3ciLCJjb21wdXRlZCIsIm1hdHJpeCIsIiRwYXJlbnQiLCJtZXRob2RzIiwib25Ub3VjaFN0YXJ0IiwiZXZlbnQiLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmQiLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLGNBQVEsQ0FGSDtBQUdMQyxhQUFPLENBSEY7QUFJTEMsYUFBTztBQUpGLEssUUFNUkMsTyxHQUFVLEVBQUMsVUFBUyxFQUFDLE9BQU0sS0FBUCxFQUFhLFNBQVEsRUFBckIsRUFBVixFLFFBQ2JDLE0sR0FBUyxFQUFDLE9BQU0sRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sUUFBbEIsRUFBMkIsUUFBTyxNQUFsQyxFQUF5QyxTQUFRLE9BQWpELEVBQXlELE9BQU0sT0FBL0QsRUFBaEIsRUFBd0Ysd0JBQXVCLEVBQUMsU0FBUSxPQUFULEVBQWlCLFFBQU8sT0FBeEIsRUFBZ0MsT0FBTSxRQUF0QyxFQUErQyxRQUFPLE1BQXRELEVBQTZELFNBQVEsT0FBckUsRUFBNkUsT0FBTSxPQUFuRixFQUEvRyxFQUEyTSxzQkFBcUIsRUFBQyxTQUFRLFFBQVQsRUFBa0IsT0FBTSxRQUF4QixFQUFpQyxRQUFPLE1BQXhDLEVBQStDLFNBQVEsT0FBdkQsRUFBK0QsT0FBTSxPQUFyRSxFQUFoTyxFQUFQLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxRLEdBQVc7QUFDVEMsWUFEUyxvQkFDQztBQUNSLGVBQU8sS0FBS0MsT0FBTCxDQUFhRCxNQUFwQjtBQUNEO0FBSFEsSyxRQUtYRSxPLEdBQVU7QUFDUkMsa0JBRFEsd0JBQ0tDLEtBREwsRUFDWTtBQUNsQixhQUFLZixJQUFMLENBQVVDLE1BQVYsR0FBbUJjLE1BQU1DLE9BQU4sQ0FBYyxDQUFkLEVBQWlCQyxPQUFwQztBQUNBLGFBQUtqQixJQUFMLENBQVVFLE1BQVYsR0FBbUJhLE1BQU1DLE9BQU4sQ0FBYyxDQUFkLEVBQWlCRSxPQUFwQztBQUNELE9BSk87QUFLUkMsaUJBTFEsdUJBS0lKLEtBTEosRUFLVztBQUNqQixhQUFLZixJQUFMLENBQVVHLEtBQVYsR0FBa0JZLE1BQU1DLE9BQU4sQ0FBYyxDQUFkLEVBQWlCQyxPQUFqQixHQUEyQixLQUFLakIsSUFBTCxDQUFVQyxNQUF2RDtBQUNBLGFBQUtELElBQUwsQ0FBVUksS0FBVixHQUFrQlcsTUFBTUMsT0FBTixDQUFjLENBQWQsRUFBaUJFLE9BQWpCLEdBQTJCLEtBQUtsQixJQUFMLENBQVVFLE1BQXZEO0FBQ0QsT0FSTztBQVNSa0IsZ0JBVFEsd0JBU0s7QUFDWCxZQUFHLEtBQUtwQixJQUFMLENBQVVHLEtBQVYsR0FBa0IsR0FBckIsRUFBMEI7QUFDeEI7QUFDQSxlQUFLa0IsS0FBTCxDQUFXLGdCQUFYO0FBQ0QsU0FIRCxNQUdPLElBQUksS0FBS3JCLElBQUwsQ0FBVUcsS0FBVixHQUFrQixDQUFDLEdBQXZCLEVBQTRCO0FBQ2pDO0FBQ0EsZUFBS2tCLEtBQUwsQ0FBVyxlQUFYO0FBQ0QsU0FITSxNQUdBLElBQUksS0FBS3JCLElBQUwsQ0FBVUksS0FBVixHQUFrQixHQUF0QixFQUEyQjtBQUNoQztBQUNBLGVBQUtpQixLQUFMLENBQVcsaUJBQVg7QUFDRCxTQUhNLE1BR0EsSUFBSSxLQUFLckIsSUFBTCxDQUFVSSxLQUFWLEdBQWtCLENBQUMsR0FBdkIsRUFBNEI7QUFDakM7QUFDQSxlQUFLaUIsS0FBTCxDQUFXLGNBQVg7QUFDRDtBQUNELGFBQUtyQixJQUFMLENBQVVHLEtBQVYsR0FBa0IsQ0FBbEI7QUFDQSxhQUFLSCxJQUFMLENBQVVJLEtBQVYsR0FBa0IsQ0FBbEI7QUFDRDtBQXpCTyxLOzs7O0VBbEJ1QixlQUFLa0IsUzs7a0JBQW5CdkIsSyIsImZpbGUiOiJCb2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgUm93IGZyb20gJy4vUm93J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7XG4gICAgICBzdGFydFg6IDAsXG4gICAgICBzdGFydFk6IDAsXG4gICAgICBkaWZmWDogMCxcbiAgICAgIGRpZmZZOiAwXG4gICAgfVxuICAgJHJlcGVhdCA9IHtcIm1hdHJpeFwiOntcImNvbVwiOlwicm93XCIsXCJwcm9wc1wiOlwiXCJ9fTtcclxuJHByb3BzID0ge1wicm93XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJtYXRyaXhcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpyb3dJbmRleC5zeW5jXCI6e1widmFsdWVcIjpcImluZGV4XCIsXCJ0eXBlXCI6XCJpbmRleFwiLFwiZm9yXCI6XCJtYXRyaXhcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDptYXRyaXgub25jZVwiOntcInZhbHVlXCI6XCJtYXRyaXhcIixcImZvclwiOlwibWF0cml4XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHJvdzogUm93XG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbWF0cml4ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudC5tYXRyaXhcbiAgICAgIH1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9uVG91Y2hTdGFydChldmVudCkge1xuICAgICAgICB0aGlzLmRhdGEuc3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgIHRoaXMuZGF0YS5zdGFydFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFlcbiAgICAgIH0sXG4gICAgICBvblRvdWNoTW92ZShldmVudCkge1xuICAgICAgICB0aGlzLmRhdGEuZGlmZlggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLmRhdGEuc3RhcnRYXG4gICAgICAgIHRoaXMuZGF0YS5kaWZmWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMuZGF0YS5zdGFydFlcbiAgICAgIH0sXG4gICAgICBvblRvdWNoRW5kKCkge1xuICAgICAgICBpZih0aGlzLmRhdGEuZGlmZlggPiAxMDApIHtcbiAgICAgICAgICAvL+WPs+a7kVxuICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbWJpbmVUb1JpZ2h0JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuZGlmZlggPCAtMTAwKSB7XG4gICAgICAgICAgLy/lt6bmu5FcbiAgICAgICAgICB0aGlzLiRlbWl0KCdjb21iaW5lVG9MZWZ0JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuZGlmZlkgPiAxMDApIHtcbiAgICAgICAgICAvL+S4i+a7kVxuICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbWJpbmVUb0JvdHRvbScpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmRpZmZZIDwgLTEwMCkge1xuICAgICAgICAgIC8v5LiK5ruRXG4gICAgICAgICAgdGhpcy4kZW1pdCgnY29tYmluZVRvVG9wJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGEuZGlmZlggPSAwXG4gICAgICAgIHRoaXMuZGF0YS5kaWZmWSA9IDBcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==