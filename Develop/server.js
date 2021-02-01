const express = require('express');

const app = express();

const PORT = 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// require('./routes/apiRoutaes')(app);
require('./Develop/routes/htmlRoutes')(app);


app.listen(PORT, ()=> console.log(`Server Listening at ${PORT}`));

