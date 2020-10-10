const express = require('express');
const todoController = require('./controllers/todoController');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '/static');

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static(publicDirectoryPath));

//fire controllers
todoController(app);

//listen to port
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
