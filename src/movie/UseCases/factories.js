import SearchMoviesUseCase from './SearchMovieUseCase'
import MovieRepositoriesFactories from '../Repositories/factories'

export default class MovieUseCasesFactories {
    static searchMoviesUseCase = ({config}) => new SearchMoviesUseCase({
        repository: MovieRepositoriesFactories.httpMovieRepository({config})
    })
}