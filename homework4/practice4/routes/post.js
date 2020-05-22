var express = require('express');
var router = express.Router();
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let responseMessage = require('../modules/responseMessage');
let Post = require('../models/posts');
const moment = require('moment');
const date = new Date();
let createdAt = moment(date).format('YYYY-MM-DD HH:mm:ss');



router.post('/add', async(req,res) =>{
    
    const {author,title,content} = req.body;
    if(!title || !content || !author) {
        res.status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE))
    }   
    const idx = await Post.addPost(author,title,content,createdAt)
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }
    res.status(statusCode.OK)
    .send(util.success(statusCode.OK, responseMessage.POST_CREATE_SUCCESS, { postAuthor: author, postTitle: title }));


})

router.get('/add/:id', async(req,res) => {
    const id = req.params.id;
    if(!id) {
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE))
    }
     // 존재하는 아이디인지 확인 - 없다면 No user 반환
    const post = await Post.getPostbyId(id)
    if(post.length == 0 ){  
    res.status(statusCode.BAD_REQUEST)
    .send(util.fail(statusCode.BAD_REQUEST,responseMessage.POST_FAIL));
    return
    }

    // 성공 - login success와 함께 user Id 반환
    res.status(statusCode.OK)
    .send(util.success(statusCode.OK,responseMessage.READ_PROFILE_SUCCESS,{
        Author : post[0].author,
        Title: post[0].title,
        Content: post[0].content}))


})

router.put('/edit/:id', async(req,res) => {

    const id = req.params.id;
    
    const {title,content} = req.body;

    if (!title || !content || !id) {
        return res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    // for(i in post) {
    //     if(post[i].id === id) {
    //         post[i].title = title;
    //         post[i].content = content;
    //     }
        const edit = await Post.editPost(id,title,content)
        const result = await Post.getPostbyId(id)
        if(edit.length == 0){
            res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.POST_EDIT_FAIL));
    
    
        }
        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, responseMessage.POST_EDIT_SUCCESS,
            {
                id: result[0].author,
                title: result[0].title,
                content: result[0].content
            }));

})


router.delete('/delete/:id', async(req,res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

        const result = await Post.deletePost(id);
        if(result == 0) {
            res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.POST_DELETE_FAIL));
        }


        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, responseMessage.POST_DELETE_SUCCESS,
            {
                deleteId : id
            }));

    
})

module.exports = router;