const express = require("express");
const fileUpload = require('express-fileupload');

const app = express();

app.use(express.json());
app.use(fileUpload());

app.post('/files', (req, res) => {
    const fileName = Date.now() + "_" + req.files.image.name;
    const file = req.files.image;
    console.log(req.files);
    const uploadPath = __dirname + "/uploads/" + fileName;
    console.log(uploadPath);
    file.mv(uploadPath, (err) => {
        if (err) {
            return res.send(err);
        }
    });
    res.sendStatus(200);
})

app.listen(5000);