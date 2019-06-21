import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import MovieRepository from './MovieRepository';

var HTTPMovieRepository =
/*#__PURE__*/
function (_MovieRepository) {
  _inheritsLoose(HTTPMovieRepository, _MovieRepository);

  function HTTPMovieRepository(_ref) {
    var _this;

    var fetcher = _ref.fetcher,
        config = _ref.config,
        movieListValueObjectFactory = _ref.movieListValueObjectFactory,
        movieEntityFactory = _ref.movieEntityFactory;
    _this = _MovieRepository.call(this) || this;
    _this._fetcher = fetcher;
    _this._config = config;
    _this._movieListValueObjectFactory = movieListValueObjectFactory;
    _this._movieEntityFactory = movieEntityFactory;
    return _this;
  }

  var _proto = HTTPMovieRepository.prototype;

  _proto.search =
  /*#__PURE__*/
  function () {
    var _search = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref2) {
      var keyword, API_HOST, API_KEY, _ref3, data, results, movieListValueObject;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              keyword = _ref2.keyword;
              API_HOST = this._config.get('API_HOST');
              API_KEY = this._config.get('API_KEY');
              _context.next = 5;
              return this._fetcher.get(API_HOST + "/search/movie?api_key=" + API_KEY + "&query=" + keyword);

            case 5:
              _ref3 = _context.sent;
              data = _ref3.data;
              results = data.results;
              movieListValueObject = this._movieListValueObjectFactory({
                list: results
              });
              return _context.abrupt("return", movieListValueObject);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function search(_x) {
      return _search.apply(this, arguments);
    }

    return search;
  }();

  _proto.trending =
  /*#__PURE__*/
  function () {
    var _trending = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      var API_HOST, API_KEY, _ref4, data, results, movieListValueObject;

      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              API_HOST = this._config.get('API_HOST');
              API_KEY = this._config.get('API_KEY');
              _context2.next = 4;
              return this._fetcher.get(API_HOST + "/movie/popular?api_key=" + API_KEY);

            case 4:
              _ref4 = _context2.sent;
              data = _ref4.data;
              results = data.results;
              movieListValueObject = this._movieListValueObjectFactory({
                list: results
              });
              return _context2.abrupt("return", movieListValueObject);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function trending() {
      return _trending.apply(this, arguments);
    }

    return trending;
  }();

  _proto.detail =
  /*#__PURE__*/
  function () {
    var _detail = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3(_ref5) {
      var id, API_HOST, API_KEY, _ref6, data, movieId, title, overview, poster_path, movieDetailEntity;

      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = _ref5.id;
              API_HOST = this._config.get('API_HOST');
              API_KEY = this._config.get('API_KEY');
              _context3.next = 5;
              return this._fetcher.get(API_HOST + "/movie/" + id + "?api_key=" + API_KEY);

            case 5:
              _ref6 = _context3.sent;
              data = _ref6.data;
              movieId = data.id, title = data.title, overview = data.overview, poster_path = data.poster_path; // eslint-disable-line

              movieDetailEntity = this._movieEntityFactory({
                id: movieId,
                title: title,
                description: overview,
                image: poster_path
              });
              return _context3.abrupt("return", movieDetailEntity);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function detail(_x2) {
      return _detail.apply(this, arguments);
    }

    return detail;
  }();

  return HTTPMovieRepository;
}(MovieRepository);

export { HTTPMovieRepository as default };