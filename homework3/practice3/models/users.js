// const pool = require('../modules/pool');
// const table = 'user';


// const user = {
//     signup : async (id,name,password,salt,email) => {
//         const fields = 'id, name, password,salt,email';
//         const questions = '?, ?, ?, ?, ?';
//         const values = [id,name,password,salt,email];
//         const query = `INSERT INTO ${table}(${fields}) VALUES(${questions})`;

//         try {
//             const result = await pool.queryParamArr(query,values);
//             const insertId = result.insertId;
//             return insertId;
//         } catch (err) {
//             if (err.errno == 1062) {
//                 console.log('signup ERROR : ', err.errno, err.code);
//                 return -1;
                
//             }
//             console.log('signup ERROR : ', err);
//             throw err;  
//         }
//     }


// }

