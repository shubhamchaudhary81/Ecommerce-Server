import express from 'express';
import { errorHandler } from './middleware/errorHandler.middleware';

//create instance of express
const app = express();

// using middleware
app.use(express.json());

//health route
app.get("/", (req,res) => {
    res.status(200).json({
        message: "Server is up & running",
        status: "success",
        success: true,
        data: null
    })
});

//using routes

//error routes
app.use((req,res, next) => {
    const message = `Cannot ${req.method} on ${req.path}`;
    const error: any = new Error(message);
    error.status= "fail";
    error.statusCode= 404;

    next(error);
});


// error handler middleware

app.use(errorHandler);

export default app;