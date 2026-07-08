import mongoose from 'mongoose';

export const connectdatabase = (DB_URI: string) => {
    mongoose.connect(DB_URI).then(() => {
        console.log ("Database Connected Successfully");
    })
    .catch((error) => {
        console.log("Database connection fail");
        console.log(error);
        });
};