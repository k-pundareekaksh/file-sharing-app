import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
    //const MONGODB_URL = ""; // can't hardcode here as this is sensitive info so create a .env file and put it there, then call that using dotenv package
    const MONGODB_URL = process.env.MONGODB_URI;
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to the database successfully.");
    } catch (error) {
        console.log("Error connecting to the database: ", error.message);
    }
};

export default DBConnection;

// only one default export allowed per file, and can name it anything while importing in other file, like import xyz from './database.js'
// but when using named exports, must have exact name in curly braces but can use alias via 'as'

// for lazy loading, dynamic import (asynchronous) can be used
// for eg if there is a greet function in utils which console.logs some msg
/*
async function loadGreet() {
    const module = await import('./utils.js');
    module.greet();

this will load module dynamically at runtime
returns a promise so we need await
}*/

/*
Use named exports for utility files (many functions).
Use default export when your file exposes a single main thing (e.g., a React component).
Use dynamic imports when importing only when needed, like modals, routes, etc.
*/