import express from 'express';

//create instance of express
const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>Welcome to my project</h1>");
});


app.listen(8000, ()=>{
    console.log("Server has started on Port http://localhost:8000");
    console.log("Press ctrl+c to stop server");
})