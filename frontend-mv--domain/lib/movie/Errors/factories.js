import GenericMovieError from "./GenericMovieError";
import NotFoundMovieError from "./NotFoundMovieError";
import NotImplementedMovieError from "./NotImplementedMethodMovie";

var MovieErrorsFactories = function MovieErrorsFactories() {};

MovieErrorsFactories.genericMovieError = function () {
  return new GenericMovieError();
};

MovieErrorsFactories.notFoundError = function () {
  return new NotFoundMovieError();
};

MovieErrorsFactories.notImplementedMovieError = function () {
  return NotImplementedMovieError();
};

export { MovieErrorsFactories as default };