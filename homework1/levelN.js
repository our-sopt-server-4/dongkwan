var sajo = [ { name : '김동관', gender : "m", age : 26, printName : function(){
        return('name : ',this.name);
}},
{ name : '조충범', gender : "m", age : 25, printName : function(){
    return this.name;
}},

{ name : '해랑', gender : "f", age : 27, printName : function(){
    return this.name;
}},

{ name : '다은', gender : "f", age : 23, printName : function(){
    return this.name;
}},

{ name : '유태혁', gender : "m", age : 20, printName : function(){
    return this.name;
}},
 ];


 sajo.forEach( 
    
    row => console.log(row.printName()+'는 성별이 '+row.gender+'이고, 나이가 '+row.age+'세입니다 ~')
    );

