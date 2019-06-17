import Fetcher from './HTTPFetcher'

export default class FetcherFactories {
    static httpFetcher = () => new HTTPFetcher({
        fetcher: axios
    })
}