var MovieEntity =
/*#__PURE__*/
function () {
  function MovieEntity(_ref) {
    var id = _ref.id,
        title = _ref.title,
        image = _ref.image,
        description = _ref.description;
    this._id = id;
    this._title = title;
    this._image = image;
    this._description = description;
  }

  var _proto = MovieEntity.prototype;

  _proto.toJSON = function toJSON() {
    return {
      id: this._id,
      title: this._title,
      image: this._image,
      description: this._description
    };
  };

  return MovieEntity;
}();

export { MovieEntity as default };