var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const fs = require('fs');


// fs.readFile('pass.txt', async(err,data) => {
//     if(err) return console.log(err.message);
//     console.log(`pass.txt 파일에는 아래의 데이터가 있습니다. \n'${data}'\n`);

//     const password = data.toString();
//     const salt = crypto.randomBytes(32).toString('hex');
//     const hashed = await encrypt(salt,password);

//     fs.writeFile(`hash.txt`,hashed,(err) => {
//         if(err) return console.log(err.message);
//         console.log("해쉬값이 잘 등록 되었습니다.");
//     })
// })


const encrypt = (salt, password) => {
    return new Promise((res,rej) => {
        crypto.pbkdf2(password,salt.toString(),1,32,'sha512',(err,derivedKey)=> {
            if(err) throw err;
            const digest = derivedKey.toString('hex');
            res(digest);
        })
    })
}


router.post('/register', async(req,res) => {
    const salt = crypto.randomBytes(32).toString('hex');
    const password = await encrypt(salt,req.body.password)

    const user = {
        username: req.body.username,
        password: password,
        email: req.body.email,
        salt:salt
    };
    

    fs.appendFile (`fsDB.json`, '\n'+JSON.stringify(user), (err,data)=>{
        if(err) return console.log(err.message);
        console.log(user);
    })
    const result = {
        status: 200,
        message: `${user.username}님 회원가입 되셨습니다.`,
        data: user
    }
    console.log(password);
    res.status(200).send(result);
})

router.post('/login', (req,res) => {


    const {username,password} = req.body;
    var fs = require('fs');

    fs.readFile('fsDB.json', 'utf8', async(err,data) => {
        if(err)throw err;
        var arr = data.toString().split('\n');

        // if(!(username && password)){
        //     return res.status(400).json({success: false, message:'제대로 입력하세요.'}); 
        // }

        for(i in arr){          
            const pass = await encrypt(JSON.parse(arr[i]).salt,password);
            // console.log(JSON.parse(arr[i].password))
            if(JSON.parse(arr[i]).username === username && JSON.parse(arr[i]).password === pass ){
                res.status(200).send(result);
            }
            
        }

    })

    
    
    const result = {
        status: 200,
        message: `${username}님 로그인 성공하셨습니다.`,
    }


})



module.exports = router;