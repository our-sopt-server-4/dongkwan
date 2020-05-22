// var vv = 123;
// var vv = 321;
// console.log("vv : ", vv);

// const cc = 321;
// console.log("cc : ", cc);

// // /* -------------------- */
// // /*   2. 변수 재할당 실습    */
// // /* -------------------- */

// // // var vv = 'abc';
// // // vv = 'def';
// // // console.log("vv : ", vv);

// // // let ll = 'abc';
// // // ll = 'def';
// // // console.log("ll : ", ll);

// // // const cc = 'abc';
// // // cc = 'def';
// // // console.log("cc : ", cc);



// // /* -------------------- */
// // /*   3. 변수 초기화 실습    */
// // /* -------------------- */

// var vv;
// console.log("vv : ", vv);

//  let ll;
//  console.log("ll : ", ll);

// const cc;
// console.log("cc : ", cc);



// function funcScope() {
//     var v1 = 123;
//     if (true) {
//         var v2 = 123;
//         let ll = 'abc';
//         console.log('let은 Block Scope, ll : ', ll);
//     }
//     console.log('let은 Block Scope, ll : ', ll);
//     console.log('var은 function Scope, v2 : ', v2);
// }   
// funcScope();
// console.log('var은 function Scope, v1 : ', v2);*/


// var server1 = ["김해리","손예지",43,null,true];
// var server2 = Array("신윤재","유가희",13);
// var server3 = new Array("이현주","조충범",false,undefined);

// console.log('server1 : ', server1);
// console.log('server2 : ', server2);
// console.log('server3 : ', server3);

// server1.push(123)
// server2[server2.length] = "뭐 넣지";
// server3[99] = "server3의 길이는 얼마일까요?";

// console.log('server1 :', server1);
// console.log('server2 : ', server2);
// console.log('server3 : ', server3);

// let str1 = 'server1에는 "';
// for(var item of server1){
//     str1 += item + ', ';

// }
// str1 += '"이 들어있네요 ~';
// console.log(str1);  

// function addNum(x,y){
//     console.log(x+y);
// }

// addNum(2,3);

// var addStr = function(x,y){
//     console.log(x+y);
// }
// addStr("함수", "표현식");

// var addBool = (x,y) =>{
//     console.log(x+y);
// }

// addBool(true,false);


var sopt = {
    name : 'OUR SOPT',
    slogan : '(WE LEAD OUR SOPT',
    part : ['plan', 'design','android','iOS','server'],
    number : 180,
    printName : function () {
        console.log('name : ', this.name)
    },

    printNum : function(){
        console.log('number : ', this.number)
    }
};


// console.log('typeof sopt : ' + typeof sopt);

// console.log('sopt : ' + sopt);
// console.log('sopt : ', sopt);
// console.log('sopt :' + JSON.stringify(sopt));

sopt.printName();
sopt.number = 190;
sopt.printNum();


// var dogs = [ { name : '식빵', family : "웰시코기", age : 1, weight: 2.14},
// {name: '콩콩', family: '포메라니안', age : 3, weight: 2.5},
// {name: '두팥', family: '푸들', age : 7, weight : 3.1} ];


// console.log("dogs : " + dogs);
// console.log('dogs : ', dogs);
// console.log('dongs :' + JSON.stringify(dogs));
// dogs.forEach( 
//     dog => console.log(dog.name+'이는 종이 '+dog.family+'이고, 나이가 '+dog.age+'세입니다 ~')
//     );