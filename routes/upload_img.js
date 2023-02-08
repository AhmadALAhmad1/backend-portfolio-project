import { Router } from 'express';
import multer, { diskStorage } from 'multer';
var router = Router();
import { extname } from "path";
import { unlinkSync } from 'fs';

const image_path = './public/images'

const storage = diskStorage({
    destination: function (req, file, cb) {

        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

// add image
router.post('/', upload.single('uploaded_file'), function (req, res) {
    try {
        let name = req.body;
        console.log(JSON.stringify(name))
        if (name !== "" || undefined || null) {
            unlinkSync(image_path + name)
        }
        res.status(200).json({
            message: `successfuly added`,
            data: req.file
        });
        console.log("test");

    } catch (err) {
        res.status(400).send(err);
    }
});


// delete image
router.delete('/', function (req, res) {
    let name = req.body.name
    try {
        unlinkSync(image_path + name)
        res.send("img is deleted")
    } catch (err) {
        res.send(err);
    }
});

export default router;