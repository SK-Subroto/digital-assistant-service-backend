
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors');
const dbConnect = require('./app/helpers/dbConnect');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({
    limit: "500mb"
}));
app.use(cors());
app.use(cookieParser())
app.use((req, res, next) => {
    req.rootDir = __dirname;
    req.nativeRequest = {};
    next();
})

//database connection with mongoose
dbConnect();


app.use('/api/v1', require('./routes/api'))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
    return;
});


module.exports = app