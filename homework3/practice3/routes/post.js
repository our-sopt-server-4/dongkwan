// var express = require('express');
// var router = express.Router();
// let util = require('../modules/util');
// let statusCode = require('../modules/statusCode');
// let responseMessage = require('../modules/responseMessage');
// let postModel = require('../models/posts');



// router.post('/add', async(req,res) =>{
//     const {title,content,author} = req.body;
//     if(!title || !content || !author) {
//         res.status(statusCode.BAD_REQUEST)
//         .send(util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE))
//     }   
//     let id;

//     if (postModel.length == 0) id = 1;
//     else id = postModel[postModel.length - 1].id + 1;
    
//     postModel.push({ id, title, content, author });
//     res.status(statusCode.OK)
//     .send(util.success(statusCode.OK, responseMessage.POST_CREATE_SUCCESS, { postId: id, postTitle: title }));


// })

// router.get('/add/:id', async(req,res) => {
//     console.log(req)
//     const id = req.params.id;
//     if(!id) {
//         res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,resMessage.NULL_VALUE))
//     }
//      // 존재하는 아이디인지 확인 - 없다면 No user 반환
//   const post = postModel.filter(post => post.id == id); //===3개 쓰면 타입이 안맞음 . // request로 보낸것은 무조건 스트링으로 보내줌.
//   if(post.length == 0 ){  
//     res.status(statusCode.BAD_REQUEST)
//     .send(util.fail(statusCode.BAD_REQUEST,responseMessage.NO_USER));
//     return
//   }

//     // 성공 - login success와 함께 user Id 반환
//     res.status(statusCode.OK)
//     .send(util.success(statusCode.OK,responseMessage.READ_PROFILE_SUCCESS,{
//         Title : post[0].id,
//         Content: post[0].content,
//         Author: post[0].author}))


// })

// module.exports = router;

var express = require('express');
var router = express.Router();
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let responseMessage = require('../modules/responseMessage');
let postModel = require('../models/posts');



router.post('/add', async(req,res) =>{
    const {title,content,author} = req.body;
    if(!title || !content || !author) {
        res.status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE))
    }   
    let id;

    if (postModel.length == 0) id = 1;
    else id = postModel[postModel.length - 1].id + 1;
    
    postModel.push({ id, title, content, author });
    res.status(statusCode.OK)
    .send(util.success(statusCode.OK, responseMessage.POST_CREATE_SUCCESS, { postId: id, postTitle: title }));


})

router.get('/add/:id', async(req,res) => {
    const id = req.params.id;
    if(!id) {
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,resMessage.NULL_VALUE))
    }
     // 존재하는 아이디인지 확인 - 없다면 No user 반환
  const post = postModel.filter(post =>  post.id === id);
  if(post.length == 0 ){  
    res.status(statusCode.BAD_REQUEST)
    .send(util.fail(statusCode.BAD_REQUEST,responseMessage.POST_FAIL));
    return
  }

    // 성공 - login success와 함께 user Id 반환
    res.status(statusCode.OK)
    .send(util.success(statusCode.OK,responseMessage.READ_PROFILE_SUCCESS,{
        Title : post[0].id,
        Content: post[0].content,
        Author: post[0].author}))


})

router.put('/edit/:id', async(req,res) => {

    const id = req.params.id;
    
    const {title,content} = req.body;

    if (!title || !content || !id) {
        return res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    for(i in postModel) {
        if(postModel[i].id === id) {
            postModel[i].title = title;
            postModel[i].content = content;
        }

        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, responseMessage.POST_EDIT_SUCCESS,
            {
                id: postModel[i].id,
                title: postModel[i].title,
                content: postModel[i].content
            }));
    }

    return res.status(statusCode.BAD_REQUEST)
    .send(util.fail(statusCode.BAD_REQUEST, responseMessage.POST_EDIT_FAIL));



})


router.delete('/delete/:id', async(req,res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    for(i in postModel) {
        if(postModel[i].id === id) {
            delete postModel[i];
        }
        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, responseMessage.POST_DELETE_SUCCESS,
            {
                deleteId : id
            }));
    }

    
    return res.status(statusCode.BAD_REQUEST)
    .send(util.fail(statusCode.BAD_REQUEST, responseMessage.POST_DELETE_FAIL));
    
})
module.exports = router;