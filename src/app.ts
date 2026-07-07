import express from 'express';

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
app.use((req,res) => {
    const message = `Cannot ${req.method} on ${req.path}`;

    res.status(404).json({
        message,
        status: 'fail',
        success: false,
        data: "null"
    })
})

export default app;