const native = require("../helpers/native");
const NotFoundError = require("./NotFoundError");
const UnauthorizedError = require("./UnauthorizedError");
const ValidationError = require("./ValidationError");

module.exports = (v, req, res) => {

  if (v.error instanceof NotFoundError) {
    native.response(
      {
        errorLog: v.errorLog,
        status: 404,
        message: v.message,
        success: v.success
      },
      req,
      res
    );
  }
  else if (v.error instanceof UnauthorizedError) {
    native.response(
      {
        errorLog: v.errorLog,
        status: 401,
        message: v.message,
        success: v.success

      },
      req,
      res
    );
  }
  else if (v.error instanceof ValidationError) {
    native.response(
      {
        responseCode: "TRY_AGAIN",
        errorLog: v.errorLog,
        status: 422,
        message: v.message,
        success: v.success
      },
      req,
      res
    );
  } else {
    native.response(
      {
        responseCode: "TRY_AGAIN",
        errorLog: v.errorLog,
        status: 400,
        message: v.message,
        success: v.success
      },
      req,
      res
    );
  }
};
