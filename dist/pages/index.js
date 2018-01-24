'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Board = require('./../components/Board.js');

var _Board2 = _interopRequireDefault(_Board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      matrix: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    }, _this.config = {
      navigationBarTitleText: '2048'
    }, _this.components = {
      board: _Board2.default
    }, _this.events = {
      'combineToLeft': function combineToLeft() {
        var newMatrix = JSON.parse(JSON.stringify(_this.data.matrix));
        var len = newMatrix.length;
        for (var row = 0; row < len; row++) {
          for (var col = len; col > 0; col--) {
            if (newMatrix[row][col] > 0 && newMatrix[row][col] === newMatrix[row][col - 1]) {
              newMatrix[row][col - 1] *= 2;
              newMatrix[row][col] = 0;
            } else if (newMatrix[row][col] > 0 && newMatrix[row][col - 1] === 0) {
              newMatrix[row][col - 1] = newMatrix[row][col];
              newMatrix[row][col] = 0;
            }
          }
        }
        _this.addRandomNum(newMatrix);
      },
      'combineToRight': function combineToRight() {
        var newMatrix = JSON.parse(JSON.stringify(_this.data.matrix));
        var len = newMatrix.length;
        for (var row = 0; row < len; row++) {
          for (var col = 0; col < len; col++) {
            if (newMatrix[row][col] > 0 && newMatrix[row][col] === newMatrix[row][col + 1]) {
              newMatrix[row][col + 1] *= 2;
              newMatrix[row][col] = 0;
            } else if (newMatrix[row][col] > 0 && newMatrix[row][col + 1] === 0) {
              newMatrix[row][col + 1] = newMatrix[row][col];
              newMatrix[row][col] = 0;
            }
          }
        }
        _this.addRandomNum(newMatrix);
      },
      'combineToTop': function combineToTop() {
        var newMatrix = JSON.parse(JSON.stringify(_this.data.matrix));
        var len = newMatrix.length;
        for (var row = len - 1; row > 0; row--) {
          for (var col = 0; col < len; col++) {
            if (newMatrix[row][col] > 0 && newMatrix[row][col] === newMatrix[row - 1][col]) {
              newMatrix[row - 1][col] *= 2;
              newMatrix[row][col] = 0;
            } else if (newMatrix[row][col] > 0 && newMatrix[row - 1][col] === 0) {
              newMatrix[row - 1][col] = newMatrix[row][col];
              newMatrix[row][col] = 0;
            }
          }
        }
        _this.addRandomNum(newMatrix);
      },
      'combineToBottom': function combineToBottom() {
        var newMatrix = JSON.parse(JSON.stringify(_this.data.matrix));
        var len = newMatrix.length;
        for (var row = 0; row < len - 1; row++) {
          for (var col = 0; col < len; col++) {
            if (newMatrix[row][col] > 0 && newMatrix[row][col] === newMatrix[row + 1][col]) {
              newMatrix[row + 1][col] *= 2;
              newMatrix[row][col] = 0;
            } else if (newMatrix[row][col] > 0 && newMatrix[row + 1][col] === 0) {
              newMatrix[row + 1][col] = newMatrix[row][col];
              newMatrix[row][col] = 0;
            }
          }
        }
        _this.addRandomNum(newMatrix);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getRandomNum',
    value: function getRandomNum(arr) {
      return Math.floor(Math.random() * arr.length);
    }
  }, {
    key: 'getEmptyCell',
    value: function getEmptyCell(newMatrix) {
      var emptyCells = [];
      for (var i = 0; i < newMatrix.length; i++) {
        for (var j = 0; j < newMatrix[i].length; j++) {
          var value = newMatrix[i][j];
          if (value === 0) {
            emptyCells.push([i, j]);
          }
        }
      }
      return emptyCells;
    }
  }, {
    key: 'addRandomNum',
    value: function addRandomNum(newMatrix) {
      var emptyCells = this.getEmptyCell(newMatrix);
      if (emptyCells.length === 0) return;
      var randomCell = this.getRandomNum(emptyCells);
      var randomNum = this.getRandomNum([2, 4]);
      newMatrix[emptyCells[randomCell][0]][emptyCells[randomCell][1]] = [2, 4][randomNum];
      this.matrix = newMatrix;
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.addRandomNum(this.data.matrix);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsIm1hdHJpeCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiYm9hcmQiLCJldmVudHMiLCJuZXdNYXRyaXgiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJsZW4iLCJsZW5ndGgiLCJyb3ciLCJjb2wiLCJhZGRSYW5kb21OdW0iLCJhcnIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJlbXB0eUNlbGxzIiwiaSIsImoiLCJ2YWx1ZSIsInB1c2giLCJnZXRFbXB0eUNlbGwiLCJyYW5kb21DZWxsIiwiZ2V0UmFuZG9tTnVtIiwicmFuZG9tTnVtIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEksR0FBTztBQUNMQyxjQUFRLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQUQsRUFBZSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBZixFQUE2QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBN0IsRUFBMkMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQTNDO0FBREgsSyxRQUdQQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUdiQyxNLEdBQVM7QUFDUCx1QkFBZ0IseUJBQUk7QUFDbEIsWUFBSUMsWUFBWUMsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxTQUFMLENBQWUsTUFBS1YsSUFBTCxDQUFVQyxNQUF6QixDQUFYLENBQWhCO0FBQ0EsWUFBSVUsTUFBTUosVUFBVUssTUFBcEI7QUFDQSxhQUFJLElBQUlDLE1BQU0sQ0FBZCxFQUFpQkEsTUFBTUYsR0FBdkIsRUFB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RUFBTUUsU0FBTixDQUFsRTtBQUNBLFdBQUszQixNQUFMLEdBQWNNLFNBQWQ7QUFDRDs7OzZCQUVPO0FBQ04sV0FBS1EsWUFBTCxDQUFrQixLQUFLZixJQUFMLENBQVVDLE1BQTVCO0FBQ0Q7Ozs7RUF2R2dDLGVBQUs0QixJOztrQkFBbkI5QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBCb2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0JvYXJkJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBkYXRhID0ge1xuICAgICAgbWF0cml4OiBbWzAsIDAsIDAsIDBdLCBbMCwgMCwgMCwgMF0sIFswLCAwLCAwLCAwXSwgWzAsIDAsIDAsIDBdXVxuICAgIH1cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnMjA0OCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIGJvYXJkOiBCb2FyZFxuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgICAnY29tYmluZVRvTGVmdCc6KCk9PntcbiAgICAgICAgbGV0IG5ld01hdHJpeCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLm1hdHJpeCkpXG4gICAgICAgIGxldCBsZW4gPSBuZXdNYXRyaXgubGVuZ3RoXG4gICAgICAgIGZvcihsZXQgcm93ID0gMDsgcm93IDwgbGVuOyByb3crKykge1xuICAgICAgICAgIGZvciAobGV0IGNvbCA9IGxlbjsgY29sID4gMDsgY29sLS0pIHtcbiAgICAgICAgICAgIGlmKG5ld01hdHJpeFtyb3ddW2NvbF0gPiAwICYmIG5ld01hdHJpeFtyb3ddW2NvbF0gPT09IG5ld01hdHJpeFtyb3ddW2NvbCAtIDFdKSB7XG4gICAgICAgICAgICAgIG5ld01hdHJpeFtyb3ddW2NvbCAtIDFdICo9IDJcbiAgICAgICAgICAgICAgbmV3TWF0cml4W3Jvd11bY29sXSA9IDBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld01hdHJpeFtyb3ddW2NvbF0gPiAwICYmIG5ld01hdHJpeFtyb3ddW2NvbCAtIDFdID09PSAwKSB7XG4gICAgICAgICAgICAgIG5ld01hdHJpeFtyb3ddW2NvbCAtIDFdID0gbmV3TWF0cml4W3Jvd11bY29sXVxuICAgICAgICAgICAgICBuZXdNYXRyaXhbcm93XVtjb2xdID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZFJhbmRvbU51bShuZXdNYXRyaXgpXG4gICAgICB9LFxuICAgICAgJ2NvbWJpbmVUb1JpZ2h0JzooKT0+e1xuICAgICAgICBsZXQgbmV3TWF0cml4ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEubWF0cml4KSlcbiAgICAgICAgbGV0IGxlbiA9IG5ld01hdHJpeC5sZW5ndGhcbiAgICAgICAgZm9yKGxldCByb3cgPSAwOyByb3cgPCBsZW47IHJvdysrKSB7XG4gICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbGVuOyBjb2wrKykge1xuICAgICAgICAgICAgaWYobmV3TWF0cml4W3Jvd11bY29sXSA+IDAgJiYgbmV3TWF0cml4W3Jvd11bY29sXSA9PT0gbmV3TWF0cml4W3Jvd11bY29sICsgMV0pIHtcbiAgICAgICAgICAgICAgbmV3TWF0cml4W3Jvd11bY29sICsgMV0gKj0gMlxuICAgICAgICAgICAgICBuZXdNYXRyaXhbcm93XVtjb2xdID0gMFxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdNYXRyaXhbcm93XVtjb2xdID4gMCAmJiBuZXdNYXRyaXhbcm93XVtjb2wgKyAxXSA9PT0gMCkge1xuICAgICAgICAgICAgICBuZXdNYXRyaXhbcm93XVtjb2wgKyAxXSA9IG5ld01hdHJpeFtyb3ddW2NvbF1cbiAgICAgICAgICAgICAgbmV3TWF0cml4W3Jvd11bY29sXSA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICB0aGlzLmFkZFJhbmRvbU51bShuZXdNYXRyaXgpXG4gICAgICB9LFxuICAgICAgJ2NvbWJpbmVUb1RvcCc6KCk9PntcbiAgICAgICAgbGV0IG5ld01hdHJpeCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLm1hdHJpeCkpXG4gICAgICAgIGxldCBsZW4gPSBuZXdNYXRyaXgubGVuZ3RoXG4gICAgICAgIGZvcihsZXQgcm93ID0gbGVuIC0gMTsgcm93ID4gMDsgcm93LS0pIHtcbiAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBsZW47IGNvbCsrKSB7XG4gICAgICAgICAgICBpZihuZXdNYXRyaXhbcm93XVtjb2xdID4gMCAmJiBuZXdNYXRyaXhbcm93XVtjb2xdID09PSBuZXdNYXRyaXhbcm93IC0gMV1bY29sXSApIHtcbiAgICAgICAgICAgICAgbmV3TWF0cml4W3JvdyAtIDFdW2NvbF0gKj0gMlxuICAgICAgICAgICAgICBuZXdNYXRyaXhbcm93XVtjb2xdID0gMFxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdNYXRyaXhbcm93XVtjb2xdID4gMCAmJiBuZXdNYXRyaXhbcm93IC0gMV1bY29sXSA9PT0gMCApIHtcbiAgICAgICAgICAgICAgbmV3TWF0cml4W3JvdyAtIDFdW2NvbF0gPSBuZXdNYXRyaXhbcm93XVtjb2xdXG4gICAgICAgICAgICAgIG5ld01hdHJpeFtyb3ddW2NvbF0gPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkUmFuZG9tTnVtKG5ld01hdHJpeClcbiAgICAgIH0sXG4gICAgICAnY29tYmluZVRvQm90dG9tJzooKT0+e1xuICAgICAgICBsZXQgbmV3TWF0cml4ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEubWF0cml4KSlcbiAgICAgICAgbGV0IGxlbiA9IG5ld01hdHJpeC5sZW5ndGhcbiAgICAgICAgZm9yKGxldCByb3cgPSAwOyByb3cgPCBsZW4gLSAxOyByb3crKykge1xuICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGxlbjsgY29sKyspIHtcbiAgICAgICAgICAgIGlmKG5ld01hdHJpeFtyb3ddW2NvbF0gPiAwICYmIG5ld01hdHJpeFtyb3ddW2NvbF0gPT09IG5ld01hdHJpeFtyb3cgKyAxXVtjb2xdKSB7XG4gICAgICAgICAgICAgIG5ld01hdHJpeFtyb3cgKyAxXVtjb2xdICo9IDJcbiAgICAgICAgICAgICAgbmV3TWF0cml4W3Jvd11bY29sXSA9IDBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3TWF0cml4W3Jvd11bY29sXSA+IDAgJiYgbmV3TWF0cml4W3JvdyArIDFdW2NvbF0gPT09IDApICB7XG4gICAgICAgICAgICAgIG5ld01hdHJpeFtyb3cgKyAxXVtjb2xdID0gbmV3TWF0cml4W3Jvd11bY29sXVxuICAgICAgICAgICAgICBuZXdNYXRyaXhbcm93XVtjb2xdID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZFJhbmRvbU51bShuZXdNYXRyaXgpXG4gICAgICB9XG4gICAgfVxuICAgIGdldFJhbmRvbU51bSAoYXJyKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmFyci5sZW5ndGgpXG4gICAgfVxuICAgIGdldEVtcHR5Q2VsbCAobmV3TWF0cml4KSB7XG4gICAgICBsZXQgZW1wdHlDZWxscyA9IFtdXG4gICAgICBmb3IobGV0IGkgPSAwOyBpPG5ld01hdHJpeC5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGo8bmV3TWF0cml4W2ldLmxlbmd0aDtqKyspIHtcbiAgICAgICAgICBsZXQgdmFsdWUgPSBuZXdNYXRyaXhbaV1bal1cbiAgICAgICAgICBpZih2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgZW1wdHlDZWxscy5wdXNoKFtpLGpdKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5Q2VsbHNcbiAgICB9XG4gICAgYWRkUmFuZG9tTnVtIChuZXdNYXRyaXgpIHtcbiAgICAgIGxldCBlbXB0eUNlbGxzID0gdGhpcy5nZXRFbXB0eUNlbGwobmV3TWF0cml4KVxuICAgICAgaWYoZW1wdHlDZWxscy5sZW5ndGggPT09IDApIHJldHVyblxuICAgICAgbGV0IHJhbmRvbUNlbGwgPSB0aGlzLmdldFJhbmRvbU51bShlbXB0eUNlbGxzKVxuICAgICAgbGV0IHJhbmRvbU51bSA9IHRoaXMuZ2V0UmFuZG9tTnVtKFsyLDRdKVxuICAgICAgbmV3TWF0cml4W2VtcHR5Q2VsbHNbcmFuZG9tQ2VsbF1bMF1dW2VtcHR5Q2VsbHNbcmFuZG9tQ2VsbF1bMV1dID0gWzIsNF1bcmFuZG9tTnVtXVxuICAgICAgdGhpcy5tYXRyaXggPSBuZXdNYXRyaXhcbiAgICB9XG5cbiAgICBvbkxvYWQoKXtcbiAgICAgIHRoaXMuYWRkUmFuZG9tTnVtKHRoaXMuZGF0YS5tYXRyaXgpXG4gICAgfVxuICB9XG4iXX0=