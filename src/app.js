const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();


//importing routes 
const productsRoutes = require('./routes/products');

//settting 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs' );
app.set('views', path.join(__dirname, 'views'));


//middleweares
app.use(morgan('dev'));
app.use(myConnection(mysql, { 
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test',
    port: 3306,
}, 'single'));

//routes
app.use('/', productsRoutes);


// statics files 
app.use(express.static(path.join(__dirname, 'public')));



// starting the server
app.listen(app.get ('port'), () => { 
    console.log('Server on port 3000');
});