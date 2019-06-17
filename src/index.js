import Config from './Config/index'
import MovieUseCasesFactories from './movie/UseCases/factories'

const config = new Config()

const useCases = {
    search_movies_use_case: MovieUseCasesFactories.searchMoviesUseCase({config})
}

export default class Domain {
    get(useCase) {
        return useCases[useCase]
    }
}