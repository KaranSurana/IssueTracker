const express =require('express');

const path = require('path');

const app = express();

const port = 7879;

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

app.use(express.static('assets'));

app.use(express.static('views'));

app.set('view-engine','ejs');
app.set('views','./views');

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log("Error In Running The Server");
        return;
    }
    console.log("Server Running!");
});