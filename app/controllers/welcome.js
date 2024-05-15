const handlers = require("../exceptions/handlers");
const native = require("../helpers/native");

module.exports = {
  welcome: async (req, res) => {
    try {

      // throw new Error("this is error")
      native.response(
        {
          success: true,
          message: "Data loaded Successful",
          data: null,
          meta: {
            count: 0,
          },
          status: 200,
        },
        req,
        res
      );
    } catch (error) {
      console.log(error.message);
      handlers(
        {
          errorLog: {
            location: req.originalUrl.split("/").join("::"),
            details: `Error: ${error}`,
          },
          message: error.message,
          success: false,
          error,
        },
        req,
        res
      );
    }
  },
};
