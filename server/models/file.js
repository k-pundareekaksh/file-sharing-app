import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    downloadCount: {
        type: Number,
        required: true,
        default: 0,
    },
});

const File = mongoose.model("file", FileSchema);

export default File;





// backend will interact with mongodb (nosql) but to make this interaction even smoother we will use mongoose (which acts like a middle-man), provides us easy functions, simplifies code for us
// ORM - for SQL DBs - connects objects to tables
// ODM - for NoSQL DBs - connects objects to documents