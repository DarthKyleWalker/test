const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();
const port = process.env.PORT || 3000;

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use('/static', express.static('./static'));

//fire controllers
todoController(app);

//listen to port
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
