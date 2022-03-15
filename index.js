const express = require ("express");
const bodyParser = require ("body-parser");
const mongoose = require ("mongoose");

const app = express();
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

//   mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });
mongoose.connect("mongodb://localhost/27017/gameDB",{useNewUrlParser:true});

const UserSchema = new mongoose.Schema({
    email : String,
    password : String
});

const User = mongoose.model("User",UserSchema);

app.post("/login",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    User.findOne({ email: username }, (err, foundUser) => {
        if (err) {
          console.log(err);
        } else {
          if (foundUser)
            if (foundUser.password === password) {
              res.render("secrets");
            }
            else{
                res.send("Incorrect Password");
            }
          else {
              res.send("User not found! kindly register");
          }
        }
      });
      
});

app.listen(3000,()=>{
    console.log("Set up port 3000, Ready!");
});