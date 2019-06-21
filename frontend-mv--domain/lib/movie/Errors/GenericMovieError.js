import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import MovieError from "./MovieError";

var GenericMovieError =
/*#__PURE__*/
function (_MovieError) {
  _inheritsLoose(GenericMovieError, _MovieError);

  function GenericMovieError() {
    return _MovieError.apply(this, arguments) || this;
  }

  return GenericMovieError;
}(MovieError);

export { GenericMovieError as default };