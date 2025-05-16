const path = require("path");
const express= require("express");
const multer  = require('multer');

const app = express();
const PORT = 4005;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  });
   const upload = multer({ storage: storage });

app.set("view engine", "ejs");
app.set("Views" ,path.resolve("./Views"));

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  return  res.render("homepage");
});  
app.post('/profile', upload.single('profileImage'), function (req, res, next) {
console.log(req.body);
console.log(req.file);
return res.render("homepage");
  })  ;



app.listen(PORT,()=>{
    console.log("server is running on port" + PORT);
});