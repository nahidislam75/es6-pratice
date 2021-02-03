const students =[
    {id:12,name:'Omer sonny'},
    {id:31,name:'manna'},
    {id:41,name:'mouruy'},
    {id:71,name:'Deepjol'}
];
const names = students.map(s=>s.name);
const ids = students.map(s=>s.id);
const bigger = students.filter(s=>s.id>40);
const biggerONe= students.find(s=>s.id>40);
 console.log(biggerONe);
