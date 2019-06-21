import MovieEntitiesFactories from '../Entities/factories';
import MovieListValueObject from './MovieListValueObject';

var MovieValueObjectsFactories = function MovieValueObjectsFactories() {};

MovieValueObjectsFactories.movieListValueObject = function (_ref) {
  var list = _ref.list;
  return new MovieListValueObject({
    listEntities: list.map(function (movie) {
      return MovieEntitiesFactories.movieEntity({
        id: movie.id,
        title: movie.title,
        image: movie.poster_path
      });
    })
  });
};

export { MovieValueObjectsFactories as default };