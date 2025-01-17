const multer = require("multer");
const express=require('express');
const router=express.Router();

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,"images/user");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});


var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;