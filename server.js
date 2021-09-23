const express =require('express');

const app = express();

const port = 7879;

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