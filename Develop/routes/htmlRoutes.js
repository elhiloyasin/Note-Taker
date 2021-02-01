const path = require(path);



module.exports = (app) => {

    app.get("/tables", (req, res) => {
        res.sendFile(path.join(__dirname, `./Develop/public/index.html`));
    });





};