var Config =
/*#__PURE__*/
function () {
  function Config() {
    this._config = {
      API_HOST: 'https://api.themoviedb.org/3',
      API_KEY: '73b32ac270598ba6ec4f69477e773e28'
    };
  }

  var _proto = Config.prototype;

  _proto.get = function get(key) {
    return this._config[key];
  };

  return Config;
}();

export { Config as default };