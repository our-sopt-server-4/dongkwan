const pool = require('../modules/pool');
const table = 'user';
let encryption = require('../modules/encryption');

const user = {

    signin : async(id) => {
        const query = `SELECT * FROM ${table} WHERE id = "${id}"`;
        
        try {
            const result = await pool.queryParam(query);
            return result;

        }
        catch(err) {
            if(err.errno == 1062){
                console.log('signup ERROR : ', err.errno,err.code);
                return -1;
            }
            console.log('signup ERROR : ', err);
            throw err;
        }
    },

    signup : async (id,name,password,salt,email) => {
        const fields = 'id, name,password,salt,email';
        const questions = '?, ?, ?, ?, ?';
        const values = [id,name,password,salt,email];
        const query = `INSERT INTO ${table}(${fields}) VALUES(${questions})`;

        try {
            const result = await pool.queryParamArr(query,values);
            const insertId = result.insertId;
            return insertId;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('signup ERROR : ', err.errno, err.code);
                return -1;
                
            }
            console.log('signup ERROR : ', err);
            throw err;  
        }
    },

    checkUser: async (id) => {
        const query = `SELECT * FROM ${table} WHERE id = "${id}"`;
        try {
            const result = await pool.queryParam(query);
            if(result.length === 0) {
                return false;
            } else return true; 
        }   catch(err){
            if (err.errno == 1062) {
                console.log('signup ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('signup ERROR : ', err);
            throw err;
        }
    },
    getUserById: async (id) => {
        const query = `SELECT * FROM ${table} WHERE id = ?`;
        try {
            const result = await pool.queryParamArr(query,[id]);
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


}

module.exports = user;