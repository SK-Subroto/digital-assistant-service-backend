const mongoose = require("mongoose");
let dbURL = `mongodb+srv://Test1234:Test1234@cluster0.e3jxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

module.exports = () => {
    console.log("connecting to DB...")
    console.log(dbURL)
    mongoose.set('strictQuery', true);
    mongoose.connect(dbURL, {

    });

    const db = mongoose.connection;
    db.on("error", (error) => console.log(error));
    db.once('open', () => console.log("MongoDB connect successfully"));
}