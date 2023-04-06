const jwt = require('jsonwebtoken');
const config = require('../config');


function verifyToken(request, response, next){
    // const bearerHeader = request.headers['authorization'];
    //     const bearer = bearerHeader.split(" ");
    //     const token = bearer[1];
    //     request.token = token;

        let token = request.headers['authorization']

        // const token = request.headers.authorization.split(' ')[1];
        console.log(request.headers)

        console.log("token in node is ", token);
        // next();

        jwt.verify(token, config.secretkey, (err, authData) =>{
            if(err){
                response.send("invalid token")
            }
            else {
                // response.send(result)
                next();
            }
        })

}

module.exports = verifyToken