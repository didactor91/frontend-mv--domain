import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

var SearchMovieUseCase =
/*#__PURE__*/
function () {
  function SearchMovieUseCase(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        repository = _ref.repository;

    this._repository = repository;
  }

  var _proto = SearchMovieUseCase.prototype;

  _proto.execute =
  /*#__PURE__*/
  function () {
    var _execute = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref2) {
      var keyword, movieListValueObject;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              keyword = _ref2.keyword;
              _context.next = 3;
              return this._repository.search({
                keyword: keyword
              });

            case 3:
              movieListValueObject = _context.sent;
              return _context.abrupt("return", movieListValueObject.toJSON());

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function execute(_x) {
      return _execute.apply(this, arguments);
    }

    return execute;
  }();

  return SearchMovieUseCase;
}();

export { SearchMovieUseCase as default };