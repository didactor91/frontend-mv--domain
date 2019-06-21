import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";

var NotImplementedMovieError =
/*#__PURE__*/
function (_MovieError) {
  _inheritsLoose(NotImplementedMovieError, _MovieError);

  function NotImplementedMovieError() {
    return _MovieError.apply(this, arguments) || this;
  }

  return NotImplementedMovieError;
}(MovieError);

export { NotImplementedMovieError as default };