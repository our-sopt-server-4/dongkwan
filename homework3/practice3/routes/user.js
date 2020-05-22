// var express = require('express');
// var router = express.Router();
// //const UserModel = require('../models/users');
// let User = require('../models/users');
// let util = require('../modules/util');
// let statusCode = require('../modules/statusCode');
// let responseMessage = require('../modules/responseMessage');
// let encryption = require('../modules/encryption');


// /*
// METHOD: POST
// URI : localhost:3000/user/signup
// REQUEST BODY : id, name,password,email
// RESPONSE STATUS : 200(OK)
// RESPONSE DATA : User ID
// */
// /* GET users listing. */

// router.post('/signup', async (req,res)=> {
//   //1. request body에서 값을 읽어온다.
  
//   const{id,name,password,email} = req.body;
  
//   // 1 parameter
//   if(!id || !name || !password || !email) {
//     return res.status(statusCode.BAD_REQUEST)
//     .send(util.fail(400, 'BAD REQUEST')); // send 할때 ()안에 JSON형식으로 된 파일을 보내줘야한다. 
//   } 

//   // 예외처리 2 아이디 중복
//   if(User.filter(it => it.id ===id).length>0){ 
//     res.status(400).send(util.fail(400,"ALREADY ID")); // 구분하기 쉽게 에러메세지를 통일해서 사용한다.
//     return;
//   }

//   const salt = encryption.makesalt();
//   const pwd = encryption.encrypt(password,salt);
//   //2. 새로운 User를 등록한다.
//   //UserModel.push({id,name,password : pwd,salt,email}); //데이터베이스 사용하면 insert문

//   const idx = await User.signup(id, name, password, salt, email);
//   //3. 응답 메세지를 보낸다.
//   //res.status(200).send(util.success(statusCode.OK,responseMessage.CREATED_USER, {userId: id}));
//   if (idx === -1) {
//     return res.status(statusCode.DB_ERROR)
//         .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
// }
// res.status(statusCode.OK)
//     .send(util.success(statusCode.OK, resMessage.CREATED_USER, {userId: idx}));
// });

// /* 
//       sign in
//     METHOD : POST
//     URI : localhost:3000/user/signin
//     REQUEST BODY : id, password
//     RESPONSE STATUS : 200 (OK)
//     RESPONSE DATA : User ID
// */
// router.post('/signin', async(req, res) => {
//   // request body 에서 데이터 가져오기
//   const {id,password} = req.body;
//   // request data 확인 - 없다면 Null Value 반환
//   if(!id || !password) {
//     res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE))
//     return;
//   }
//   // 존재하는 아이디인지 확인 - 없다면 No user 반환
//   const user = UserModel.filter(user => user.id == id);
//   console.log(user);
//   if(user.length ==0){
//     res.status(statusCode.BAD_REQUEST)
//     .send(util.fail(statusCode.BAD_REQUEST,responseMessage.MISS_MATCH_PW));
//     return
//   }
  
//   // 비밀번호 확인 - 없다면 Miss match password 반환
//   for(var i = 0 ; i<user.length;  i++){
//     if(user[i].pwd === encryption.encrypt(password,user[i].salt)){
//       res.status(statusCode.OK)
//       .send(util.success(statusCode.OK,responseMessage.LOGIN_SUCCESS,{userId: id}))
//     }
//     else{
//     res.status(statusCode.BAD_REQUEST)
//     .send(util.fail(statusCode.BAD_REQUEST,responseMessage.MISS_MATCH_PW))
//     }
//   }

//   // 성공 - login success와 함께 user Id 반환

// });


// router.get('/profile/:id', async(req,res)=> {
//   // request params 에서 데이터 가져오기
//   const id = req.query.id;


//   // 존재하는 아이디인지 확인 - 없다면 No user 반환
//   const user = UserModel.filter(user => user.id === id);
//   if(user.length == 0 ){  
//     res.status(statusCode.BAD_REQUEST)
//     .send(util.fail(statusCode.BAD_REQUEST,responseMessage.NO_USER));
//     return
//   }

  
//   // 성공 - login success와 함께 user Id 반환
//   res.status(statusCode.OK)
//   .send(util.success(statusCode.OK,responseMessage.READ_PROFILE_SUCCESS,{user}))

// })

// module.exports = {
//   success: (status, message, data) => {
//       return {
//           status: status,
//           success: true,
//           message: message,
//           data: data
//       }
//   },
//   fail: (status, message) => {
//       return {
//           status: status,
//           success: false,
//           message: message
//       }
//   },
// };

// module.exports = router;

var express = require('express');
var router = express.Router();
const UserModel = require('../models/users');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let responseMessage = require('../modules/responseMessage');
let encryption = require('../modules/encryption');


/*
METHOD: POST
URI : localhost:3000/user/signup
REQUEST BODY : id, name,password,email
RESPONSE STATUS : 200(OK)
RESPONSE DATA : User ID
*/
/* GET users listing. */

router.post('/signup', async (req,res)=> {
  //1. request body에서 값을 읽어온다.
  
  const{id,name,password,email} = req.body;
  
  // 1 parameter
  if(!id || !name || !password || !email) {
    return res.status(statusCode.BAD_REQUEST)
    .send(util.fail(400, 'BAD REQUEST')); // send 할때 ()안에 JSON형식으로 된 파일을 보내줘야한다. 
  } 

  // 예외처리 2 아이디 중복
  if(UserModel.filter(it => it.id ===id).length>0){ 
    res.status(400).send(util.fail(400,"ALREADY ID")); // 구분하기 쉽게 에러메세지를 통일해서 사용한다.
    return;
  }

  const salt = encryption.makesalt();
  const pwd = encryption.encrypt(password,salt);
  //2. 새로운 User를 등록한다.
  UserModel.push({id,name,password : pwd,salt,email}); //데이터베이스 사용하면 insert문
  //3. 응답 메세지를 보낸다.
  res.status(200).send(util.success(statusCode.OK,responseMessage.CREATED_USER, {userId: id}));
 
})

/* 
      sign in
    METHOD : POST
    URI : localhost:3000/user/signin
    REQUEST BODY : id, password
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/
router.post('/signin', async(req, res) => {
  // request body 에서 데이터 가져오기
  const {id,password} = req.body;
  // request data 확인 - 없다면 Null Value 반환
  if(!id || !password) {
    res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE))
    return;
  }
  // 존재하는 아이디인지 확인 - 없다면 No user 반환
  const user = UserModel.filter(user => user.id == id);
  console.log(user);
  if(user.length ==0){
    res.status(statusCode.BAD_REQUEST)
    .send(util.fail(statusCode.BAD_REQUEST,responseMessage.MISS_MATCH_PW));
    return
  }
  
  // 비밀번호 확인 - 없다면 Miss match password 반환
  for(var i = 0 ; i<user.length;  i++){
    if(user[i].pwd === encryption.encrypt(password,user[i].salt)){
      res.status(statusCode.OK)
      .send(util.success(statusCode.OK,responseMessage.LOGIN_SUCCESS,{userId: id}))
    }
    else{
    res.status(statusCode.BAD_REQUEST)
    .send(util.fail(statusCode.BAD_REQUEST,responseMessage.MISS_MATCH_PW))
    }
  }

  // 성공 - login success와 함께 user Id 반환

});


router.get('/profile/:id', async(req,res)=> {
  // request params 에서 데이터 가져오기
  const id = req.params.id;

  // 존재하는 아이디인지 확인 - 없다면 No user 반환
  const user = UserModel.filter(user => user.id === id);
  if(user.length == 0 ){  
    res.status(statusCode.BAD_REQUEST)
    .send(util.fail(statusCode.BAD_REQUEST,responseMessage.NO_USER));
    return
  }

  
  // 성공 - login success와 함께 user Id 반환
  res.status(statusCode.OK)
  .send(util.success(statusCode.OK,responseMessage.READ_PROFILE_SUCCESS,{user}))

})

module.exports = {
  success: (status, message, data) => {
      return {
          status: status,
          success: true,
          message: message,
          data: data
      }
  },
  fail: (status, message) => {
      return {
          status: status,
          success: false,
          message: message
      }
  },
};

module.exports = router;
