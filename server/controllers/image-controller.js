import File from "../models/file.js";

export const uploadImage = async (req, res) => {
    //res.send("Uploaded Image"); -> dont use since we are sending respose in try block so we cant send multiple
    //console.log(req);
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
    }
    
    try {
        const file = await File.create(fileObj);
        return res.status(200).json({
            path: `http://localhost:8000/file/${file._id}`,
            success: true,
            message: "File uploaded successfully. "
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getImage = async (req, res) => {
    
    try {
        const file = await File.findById(req.params.fileid);
        if(!file)
        {
            return res.status(404).json({
                success: false,
                message: "File not found.",
            });
        }
        file.downloadCount++;
        await file.save();
        res.download(file.path, file.name);

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};






















// frontend is running on localhost:5173 and backend is running on localhost:8000
// for browser, it makes illegal to send stuff from 5173 to 8000
// to make this possible import CORS

// to store static content, dont use databases
// use storage services like aws s3 bucket, google firebase, etc - ideally

// but for now, whenever user uploads file, we will store its path in our database
// this path is our local system path
// image -> server (local system) -> path (local system) -> database
// but where are we storing the file -> in our local system directory only. -> not a good idea to add unnecessary data to our server directory