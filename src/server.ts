import app from "./app";
import { connectdatabase } from "./config/db.config";


const DB_URI = "mongodb://localhost:27017/myDB";

//Database connection
connectdatabase(DB_URI);

//connect to database
// mongoose.connect("mongodb://localhost:27017/Ecommerce" ).then(() => {
//   console.log("Database Connected Successfully");
// }).catch((err) => {
//   console.log("Database Connection Failed", err);
// });



app.listen(8000, ()=>{
    console.log("Server has started on Port http://localhost:8000");
    console.log("Press ctrl+c to stop server");
});