import MovieEntity from './MovieEntity';

var MovieEntitiesFactories = function MovieEntitiesFactories() {};

MovieEntitiesFactories.movieEntity = function (_ref) {
  var id = _ref.id,
      title = _ref.title,
      image = _ref.image,
      description = _ref.description;
  return new MovieEntity({
    id: id,
    title: title,
    image: image,
    description: description
  });
};

export { MovieEntitiesFactories as default };