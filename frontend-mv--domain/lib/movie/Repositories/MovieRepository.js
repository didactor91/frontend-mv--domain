var MovieRepository =
/*#__PURE__*/
function () {
  function MovieRepository() {}

  var _proto = MovieRepository.prototype;

  _proto.search = function search() {
    throw new Error('[MovieRepository#search]');
  };

  _proto.trending = function trending() {
    throw new Error('[MovieRepository#trending]');
  };

  _proto.detail = function detail() {
    throw new Error('[MovieRepository#detail]');
  };

  return MovieRepository;
}();

export { MovieRepository as default };