import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _wrapNativeSuper from "@babel/runtime/helpers/esm/wrapNativeSuper";

var MovieError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(MovieError, _Error);

  function MovieError() {
    return _Error.apply(this, arguments) || this;
  }

  return MovieError;
}(_wrapNativeSuper(Error));

export { MovieError as default };