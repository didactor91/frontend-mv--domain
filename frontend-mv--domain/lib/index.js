import Config from './Config';
import MovieUseCasesFactories from './movie/UseCases/factories';
var config = new Config();

var Domain =
/*#__PURE__*/
function () {
  function Domain() {
    this.useCases = {
      search_movies_use_case: MovieUseCasesFactories.searchMovieUseCase({
        config: config
      }),
      get_trending_movies_use_case: MovieUseCasesFactories.getTrendingMovieUseCase({
        config: config
      }),
      get_detail_movies_use_case: MovieUseCasesFactories.getDetailMovieUseCase({
        config: config
      })
    };
  }

  var _proto = Domain.prototype;

  _proto.get = function get(useCase) {
    return this.useCases[useCase];
  };

  return Domain;
}();

export { Domain as default };