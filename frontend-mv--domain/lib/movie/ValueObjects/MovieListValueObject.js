var MovieListValueObject =
/*#__PURE__*/
function () {
  function MovieListValueObject(_ref) {
    var listEntities = _ref.listEntities;
    this._listEntities = listEntities;
  }

  var _proto = MovieListValueObject.prototype;

  _proto.toJSON = function toJSON() {
    return {
      list: this._listEntities.map(function (entity) {
        return entity.toJSON();
      })
    };
  };

  return MovieListValueObject;
}();

export { MovieListValueObject as default };