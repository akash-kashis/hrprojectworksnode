const express = require('express')
const router = express.Router()
const xlsx=require('xlsx');
const PostModel =require('../../models/Payment');
const fse = require('fs-extra')
const fileUpload = require('express-fileupload')
// var admin=require('./admin')
router.use(fileUpload());



router.post('/', function(req, res) 
{
    if (!req.files || Object.keys(req.files).length === 0) 
    {
      return res.status(400).send('No files were uploaded.');
    }
    const File = req.files.sampleFile3;
    var fileName=File.name
    if (['xls', 'xlsx'].indexOf(fileName.split('.')[fileName.split('.').length-1]) === -1) 
    {
      res.send("error")
   }
    uploadPath = 'uploads/'+fileName;
    console.log(uploadPath)
    File.mv(uploadPath, function(err) 
    {
      if (err)
      {
          return res.status(500).send(err);
      }
      else
      {
       
        const excelfile =xlsx.readFile(uploadPath);
        const firstsheet=excelfile.SheetNames[0];
        const sheet=excelfile.Sheets[firstsheet]
        const exceldata =xlsx.utils.sheet_to_json(sheet);
        console.log(exceldata);
        PostModel.collection.insertMany(exceldata, function (err, docs) {
          if (err)
          { 
            res.send(err);
          } 
          else 
          {
            return res.status(200).send("Uploaded Sussessfully");
          }
        });

        //empty directory
        fse.emptyDir('uploads', err => {
          if (err) return console.error(err)
          console.log('success!')
          
        })

      }
    });
  });

  module.exports=router;