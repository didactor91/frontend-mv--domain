import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import MovieError from "./MovieError";

var NotFoundMovieError =
/*#__PURE__*/
function (_MovieError) {
  _inheritsLoose(NotFoundMovieError, _MovieError);

  function NotFoundMovieError() {
    return _MovieError.apply(this, arguments) || this;
  }

  return NotFoundMovieError;
}(MovieError);

export { NotFoundMovieError as default };