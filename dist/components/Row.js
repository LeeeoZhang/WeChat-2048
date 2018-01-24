'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Cell = require('./Cell.js');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_wepy$component) {
    _inherits(Row, _wepy$component);

    function Row() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Row);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Row.__proto__ || Object.getPrototypeOf(Row)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
            cell: _Cell2.default
        }, _this.props = {
            rowIndex: {
                type: Number
            },
            matrix: {
                type: Array
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Row;
}(_wepy2.default.component);

exports.default = Row;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJvdy5qcyJdLCJuYW1lcyI6WyJSb3ciLCJjb21wb25lbnRzIiwiY2VsbCIsInByb3BzIiwicm93SW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwibWF0cml4IiwiQXJyYXkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEc7Ozs7Ozs7Ozs7Ozs7O29MQUNqQkMsVSxHQUFhO0FBQ1RDO0FBRFMsUyxRQUdiQyxLLEdBQVE7QUFDSkMsc0JBQVU7QUFDTkMsc0JBQU1DO0FBREEsYUFETjtBQUlKQyxvQkFBUTtBQUNKRixzQkFBTUc7QUFERjtBQUpKLFM7Ozs7RUFKcUIsZUFBS0MsUzs7a0JBQWpCVCxHIiwiZmlsZSI6IlJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IENlbGwgZnJvbSAnLi9DZWxsJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY2VsbDogQ2VsbFxuICAgICAgICB9XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgcm93SW5kZXg6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXRyaXg6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19