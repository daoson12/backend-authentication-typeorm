const jwt =require('jsonwebtoken')
const jwtSecret=require('../config/Config')


const checkJwt = (req, res,next)=>{
const authHeader=req.headers['authorization'];
const token=authHeader && authHeader.split(' ')[1];
if(!token) return res.status(403).send({status:'Access Denied', message:'No token Provided'});

jwt.verify(token,jwtSecret, function (err, decoded) {
  if (err)return res.status(500).send({status:'Access Denied', message: 'failed to authenticate'}); 
req.userId= decoded.id;
next();
  
})
}
module.exports=checkJwt;