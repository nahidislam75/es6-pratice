const person = {name: 'Jack Willim',age:17,job:'facebooker',gfName: 'Ema Watson',address:'kochu Khet', phone: '01717112211',friends:['tom hanks','tom cruise','tom yarn']};
//const gfName=person.gfName;
const { phone,gfName,address,salary }=person;
const compexObject={
    name:'abc',
    info:{
        address:'kola bagan',
        leader:'Tiger Leader'
    }
}
const {leader}=compexObject.info;
//const phone=person.phone;
// console.log(gfName,phone ,address,salary);
// console.log(gfName,phone,address,salary);
// console.log(gfName,phone,address,salary);
// console.log(gfName,phone,address,salary);


const friends =['Sakib khan','Arman khan','Amir khan','Salman khan','Sharuk khan'];
const [chotoFriend,nextFriend,...restFriends] =friends;
console.log(restFriends);