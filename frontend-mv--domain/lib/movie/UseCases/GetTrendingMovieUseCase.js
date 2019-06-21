import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

var GetTrendingMovieUseCase =
/*#__PURE__*/
function () {
  function GetTrendingMovieUseCase(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        repository = _ref.repository;

    this._repository = repository;
  }

  var _proto = GetTrendingMovieUseCase.prototype;

  _proto.execute =
  /*#__PURE__*/
  function () {
    var _execute = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      var movieListValueObject;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this._repository.trending();

            case 2:
              movieListValueObject = _context.sent;
              return _context.abrupt("return", movieListValueObject.toJSON());

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function execute() {
      return _execute.apply(this, arguments);
    }

    return execute;
  }();

  return GetTrendingMovieUseCase;
}();

export { GetTrendingMovieUseCase as default };