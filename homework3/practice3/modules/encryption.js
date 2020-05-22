
const crypto = require('crypto');

const makesalt = () =>{
    return crypto.randomBytes(32).toString('hex');
}; // salt를 만드는 함수를 정의 해준다. 

const encrypt = (salt, password) => {
    return new Promise((res,rej) => {
        crypto.pbkdf2(password,salt.toString(),1,32,'sha512',(err,derivedKey)=> {
            if(err) throw err;
            const digest = derivedKey.toString('hex');
            res(digest);
        })
    })
}


module.exports = {
    makesalt : makesalt,
    encrypt: encrypt
}