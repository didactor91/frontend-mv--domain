import MovieValueObjectsFactories from '../ValueObjects/factories';
import MovieEntitiesFactories from '../Entities/factories';
import FetcherFactories from '../../Fetcher/factories';
import HTTPMovieRepository from './HTTPMovieRepository';

var MovieRepositoriesFactories = function MovieRepositoriesFactories() {};

MovieRepositoriesFactories.httpMovieRepository = function (_ref) {
  var config = _ref.config;
  return new HTTPMovieRepository({
    fetcher: FetcherFactories.httpFetcher(),
    movieListValueObjectFactory: MovieValueObjectsFactories.movieListValueObject,
    movieEntityFactory: MovieEntitiesFactories.movieEntity,
    config: config
  });
};

export { MovieRepositoriesFactories as default };