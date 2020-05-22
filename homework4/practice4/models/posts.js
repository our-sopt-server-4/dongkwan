const pool = require('../modules/pool');
const table = 'post';
let encryption = require('../modules/encryption');
const post = {

        addPost : async (author,title,content,createdAt) => {
            const fields = 'author,title,content,createdAt';
            const questions = '?, ?, ?, ?';
            const values = [author,title,content,createdAt];
            const query = `INSERT INTO ${table}(${fields}) VALUES(${questions})`;


            try{
                const result = await pool.queryParamArr(query,values);
                const insertId = result.insertId;
                return insertId;
            }catch(err) {
                if(err.errno == 1062){
                    console.log('signup ERROR : ', err.errno, err.code);
                    return -1;
                }

                console.log('signup ERROR : ', err);
                throw err;
            }
    },

    getPostbyId : async (id) => {
    const query = `SELECT * FROM ${table} WHERE postIdx = "${id}"`;
    try {
        const result = await pool.queryParam(query);
        return result;
        
    }  catch(err){

        if (err.errno == 1062) {
            console.log('signup ERROR : ', err.errno, err.code);
            return -1;
        }
        console.log('signup ERROR : ', err);
        throw err;
    }

},

    editPost : async (id,title,content) => {
        const query = `UPDATE ${table} SET title = "${title}", content = "${content}" WHERE postIdx = "${id}" `;
        try {
            const result = await pool.queryParam(query);
            return result
        }catch(err){

            if (err.errno == 1062) {
                console.log('signup ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('signup ERROR : ', err);
            throw err;
        }
    },

    deletePost : async (id) => {
        const query = `delete FROM ${table} WHERE postIdx = "${id}"`;
        try {
            const result = await pool.queryParam(query);
            return result
        }catch(err){

        throw err;
        }
    }

}

module.exports = post;