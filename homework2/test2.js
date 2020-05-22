// // // function greet(){
// // //     console.log('hello!');
// // // }

// // // function timer(){
// // //     return setTimeout(()=>{
// // //         console.log('end');
// // //     }, 3000);
// // // }

// // // greet();
// // // timer();

// // // function task1(){
// // //     setTimeout( () => {
// // //         console.log('task1');
// // //     }, 0 );
// // // }

// // // function task2(){
// // //     console.log('task2');

// // // }

// // // function task3(){

// // //     console.log('task3');
// // // }

// // // task1();
// // // task2();
// // // task3();

// // // const func1 = (param) =>{
// // //     return new Promise((resolved,rejected)=>{
// // //         setTimeout(()=>{
// // //             console.log('func1 return resolved');
// // //             resolved(`func 1 success: ${param}`);
// // //         },500)
// // //     })
// // // }

// // // const func2 = (param) => {
// // //     return new Promise((resolved,rejected) => {
// // //         setTimeout(() => {
// // //             console.log('func2 return rejected');
// // //             rejected(new Error(`func2 param: '${param}'`));
// // //         },500)
// // //     })
// // // }

// // // const func3 = (param) => {
// // //     return new Promise((resolved, rejected) => {
// // //         setTimeout (() => {
// // //                 console.log('func3 return resolved');
// // //                 resolved(`func 3 success: ${param}\n`);
// // //             }, 500);
// // //     });
// // // }

// // // const func4 = (param) => {
// // //     return new Promise((resolved, rejected) => {
// // //         setTimeout(() => {
// // //                 console.log('func4 return rejected');
// // //                 rejected(Error(`func 4 error: ${param}\n`));
// // //             }, 500);
// // //     });
// // // }

// // // const func5 = (param) => {
// // //     return new Promise((resolved, rejected) => {
// // //         setTimeout(() => {
// // //                 console.log('func5 return resolved');
// // //                 resolved(`func 5 success: ${param}\n`);
// // //             }, 500);
// // //     });
// // // }

// // // const promise = func1('sopt')

// // // /*
// // //     .then(func2) 은
// // //     .then((result) => func2(result)) 와 동일
// // // */
// // // promise
// // //     .then(func2)
// // //     .then(func3)
// // //     .catch(console.error) // errorhandler1
// // //     .then(func3)
// // //     .then(func4)
// // //     .then(func5)
// // //     .catch(console.error) // errorhandler2
// // //     .then(console.log);

// // // let isMomHappy = false;
// // // let phone = {
// // //     brand: 'Samsung' ,
// // //     color: 'black'
// // // };

// // // var willIGetNewPhone = new Promise((resolved,rejected) => {
// // //     if(isMomHappy){
// // //         console.log(phone);
// // //         resolved(`isMomHappy success: ${isMomHaapy}\n`);
// // //     }
// // //     else{
// // //         console.log('Mom is not happy');
// // //         rejected(Error(`imMomhappy error: ${isMomHappy}\n`));
// // //     }

// // // })

// // // let asyncFunc1 = (msg) => 
// // //     new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             resolve(`func1 : ${msg}`)
// // //         }, 1000)
// // //     })

// // // let asyncFunc2 = (msg) => 
// // //     new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             resolve(`func2 : ${msg}`)
// // //         }, 1000)
// // //     })

// // // function promiseMain () {
// // //     asyncFunc1('Hello').then((result) => {
// // //         console.log(result)
// // //         return asyncFunc2('world')
// // //     }).then((result) => {
// // //         console.log(result)
// // //     })
// // // }

// // // async function asyncMain () {
// // //     let result = await asyncFunc1('Hello')
// // //     console.log(result)
// // //     result = await asyncFunc2('world')
// // //     console.log(result)
// // // }

// // // promiseMain()
// // // // // asyncMain()

// // // const cal = require('./calculator');
// // // var sum1 = cal.sum(1,3);
// // // var sub1 = cal.substract(3,1);
// // // var mul1 = cal.multiply(1,3);
// // // var div1 = cal.divide(3,1);
// // // console.log('sum result : ', sum1);
// // // console.log('sub result : ', sub1);
// // // console.log('mul result : ', mul1);
// // // console.log('div result : ', div1);

// // const crypto = require('crypto');

// // const encrypt = (salt,password) => {
// //     crypto.pbkdf2(password,salt.toString(),1,32,'sha512',(err,derivedKey)=>{

// //         if(err) throw err;
// //         const hashed = derivedKey.toString('hex');
// //         console.log('salt : ', salt);
// //         console.log('hashed : ', hashed);
// //     })
// // }

// // const password = 'fl0wer';
// // // const salt = crypto.randomBytes(32).toString('hex');
// // // encrypt(salt,password);

// // const fs = require('fs');

// // const numArr = [1,2,3,4,5];

// // numArr.forEach ((num)=> {
// //     const title = 'async' + num;
// //     const data = `파일이 잘 만들어 졌어요!\n제 이름은 '${title}.txt'입니다 ~`;
// //     fs.writeFile(`${title}.txt`, data,(err,data)=> {
// //         if(err) return console.log(err.message);
// //         console.log(`${title} 비동기라 순서가 뒤죽박죽 ~`);
// //     })
// // })



// // numArr.forEach((num) => {
// //     const title = 'async' + num;
// //     fs.readFile(`${title}.txt`, (err, data) => {
// //         if (err) return console.log (err.message);
// //         console.log(`${title}.txt 파일에는 아래의 데이터가 있습니다. \n"${data}"\n`);
// //     });
// // });

// const fs = require('fs');

// /*
//    fs.writeFileSync ( file, data, [options]) {}
//    동기 방식으로 파일 쓰기 - 순서 확인해보기
// */

// const title = 'password';
// const data = `dongkwan`;
// fs.writeFileSync(`${title}.txt`, data);

// const data1 = fs.readFileSync(`${title}.txt`);
// console.log(`${title}.txt 파일에는 아래의 데이터가 있습니다. \n"${data1}"\n`);

// const crypto = require('crypto');

// const encrypt = (salt,password) => {
//     crypto.pbkdf2(password,salt.toString(),1,32,'sha512',(err,derivedKey)=>{

//         if(err) throw err;
//         const hashed = derivedKey.toString('hex');
//         return hashed;
//     })
    
// }


// const password = data1;
// const salt = crypto.randomBytes(32).toString('hex');

// const title1 = 'hashed';
// const data2 = encrypt(salt,password);
// console.log(data2);
// fs.writeFileSync(`${title1}.txt`, data2);

// const data3 = fs.readFileSync(`${title1}.txt`);
// console.log(`${title1}.txt 파일에는 아래의 데이터가 있습니다. \n"${data3}"\n`);

//미션 1
// let isMomHappy = false;
// let phone = {
//     brand: "Samsung",
//     color: 'black'
// };

// var willIGetNewPhone = new Promise( (resolve,reject)=>{

//     if(isMomHappy){
//         resolve (console.log(phone));
//     }else{
//         reject(new Error(`mom is not happy`));    
//     }
// })

// let asyncFunc1 = (msg) => 
//                 new Promise((resolve)=>{
//                     setTimeout(()=>{
//                         resolve(`func1 : ${msg}`)
//                     }, 1000)
//                 })

// let asyncFunc2 = (msg) => new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve(`func2 : ${msg}`)
//     }, 1000)
// })

// function promiseMain () {
//     asyncFunc1('Hello').then((result)=>{
//         console.log(result)
//         return asyncFunc2('world');
//     }).then((result) =>{
//         console.log(result)
//     })
// }

// // promiseMain()

// async function asyncMain(){
//     let result = await asyncFunc1('hello')
//     console.log(result)
//     result = await asyncFunc2('world');
//     console.log(result);
// }

// asyncMain()

// const crypto = require('crypto');

// const secret = 'abcdefg';
// const hash = crypto.createHash('sha256', secret)
//             .update('I love cupcakes')
//             .digest('hex')

// console.log(hash);

// const crypto = require('crypto');
// crypto.pbkdf2('secret','salt', 100000,64,'sha512',(err,derivedKey)=>{
//     if(err) throw err;
//     console.log(derivedKey.toString('hex'));
// })

// const crypto = require('crypto');

// const encrypt = (salt, password) => {
//     crypto.pbkdf2(password, salt,1,32,'sha512',(err,derivedKey) => {
//         if(err) throw err;
//         const hashed = derivedKey.toString('hex');
//         console.log('salt : ', salt);
//         console.log('hashed', hashed);

//     })
// }

// const password = 'fl0wer';
// const salt = crypto.randomBytes(32).toString('hex')
// encrypt(salt,password);

// 비동기 파일 입출력
// const fs = require('fs');

// const numArr = [1,2,3,4,5];

// numArr.forEach ((num) => {
//     const title = 'async' + num;
//     const data = `파일이 잘 만들어 졌어요!\n제 이름은 '${title}.txt'입니다 ~ `;
//     fs.writeFile (`${title}.txt`, data, (err,data)=>{
//         if(err) return console.log(err.message);
//         console.log(`${title}`)
//     })
// })

// numArr.forEach((num) => {
//     const title = 'async' + num;
//     fs.readFile(`${title}.txt`, (err,data)=> {  
//         if(err) return console.log(err.message);
//         console.log(`${title}.txt 파일에는 아래의 데이터가 있습니다. \n"${data}"\n`);

//     })
// })


//미션 2


// const crypto = require('crypto');
// const fs = require('fs');
// const password = 'querty';
// fs.writeFile (`password.txt`,password,(err,data)=>{
//     if(err) return console.log(err.message);
//     console.log(password);
// })

// const encrypt = (salt, password) => {
//     return new Promise((res, rej) => {
//         crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
//             if (err) throw err;
//             const digest = derivedKey.toString('hex');
//             res(digest);
//         });
//     });
// }

// fs.readFile(`password.txt`, async(err,data)=> {
//     if(err) return console.log(err.message);
//     console.log(`password.txt 파일에는 아래의 데이터가 있습니다. \n"${data}"\n`);

//     const password = data.toString();
//     const salt = crypto.randomBytes(32).toString('hex');
//     const hashed = await encrypt(salt,password);

//     fs.writeFile(`hashed.txt`,hashed,(err)=>{
//         if(err) return console.log(err.message);
//         console.log("해쉬값이 잘 등록 되었습니다.")
//     })
// })






