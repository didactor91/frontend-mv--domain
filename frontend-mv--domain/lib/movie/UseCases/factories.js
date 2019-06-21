import MovieRepositoriesFactories from '../Repositories/factories';
import SearchMovieUseCase from './SearchMovieUseCase';
import GetTrendingMovieUseCase from './GetTrendingMovieUseCase';
import GetDetailMovieUse from './GetDetailMovieUse';

var MovieUseCasesFactories = function MovieUseCasesFactories() {};

MovieUseCasesFactories.searchMovieUseCase = function (_ref) {
  var config = _ref.config;
  return new SearchMovieUseCase({
    repository: MovieRepositoriesFactories.httpMovieRepository({
      config: config
    })
  });
};

MovieUseCasesFactories.getTrendingMovieUseCase = function (_ref2) {
  var config = _ref2.config;
  return new GetTrendingMovieUseCase({
    repository: MovieRepositoriesFactories.httpMovieRepository({
      config: config
    })
  });
};

MovieUseCasesFactories.getDetailMovieUseCase = function (_ref3) {
  var config = _ref3.config;
  return new GetDetailMovieUse({
    repository: MovieRepositoriesFactories.httpMovieRepository({
      config: config
    })
  });
};

export { MovieUseCasesFactories as default };