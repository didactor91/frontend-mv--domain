export default class Config {
    constructor() {
        this._config = {
            API_HOST: 'https://api.themoviedb.org/3',
            API_KEY: '9d60e1ff50a8d88d373005edaa7ce431'
        }
    }
    get(key) {
        return this._config[key]
    }
}