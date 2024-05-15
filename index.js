require("dotenv").config();
const handlers = require('./app/exceptions/handlers');
const NotFoundError = require('./app/exceptions/NotFoundError');

const port = process.env.PORT || 5000;

const app = require("./app")

app.use((req, res, next) => {
  const error = new NotFoundError('API Endpoint Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
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
})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

// app.listen(port, "172.16.10.224", () => {
//   console.log(`listening on port ${port}`);
// });
