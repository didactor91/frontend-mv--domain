import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

var GetDetailMovieUse =
/*#__PURE__*/
function () {
  function GetDetailMovieUse(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        repository = _ref.repository;

    this._repository = repository;
  }

  var _proto = GetDetailMovieUse.prototype;

  _proto.execute =
  /*#__PURE__*/
  function () {
    var _execute = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref2) {
      var id, movieListValueObject;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = _ref2.id;
              _context.next = 3;
              return this._repository.detail({
                id: id
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

  return GetDetailMovieUse;
}();

export { GetDetailMovieUse as default };