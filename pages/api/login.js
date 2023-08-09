
import connectDb from "@/middleware/conndb";
import User from "@/models/User";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


const handler = async (req, res) => {
   
  if (req.method == "POST") {
    let user = await User.findOne({email:req.body.email});
   
    if(user){
      var bytes  = CryptoJS.AES.decrypt(user.password, 'secret123')
      var originalText = bytes.toString(CryptoJS.enc.Utf8);

       if(user.email==req.body.email && originalText ==req.body.password){
        var token = jwt.sign({  email:user.email,name:user.name }, 'jwtsecret',{expiresIn:"2d"});
        res.status(200).json({success: true ,token});
        // console.log({token});
        // res.status(200).json({ success: true , email:user.email,name:user.name });
       }
    }
    else{
        res.status(400).json({ success: false ,error: "User Invalid" });
    }

    
  } else {
    res.status(400).json({ error: "error! This method is not allowed." });
  }
  
};
export default connectDb(handler);