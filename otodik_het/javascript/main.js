import { list } from './users.js'; 
//o(*￣︶￣*)o o(*≧▽≦)ツ┏━┓
const userName= 'Pista';
console.log(list[0].name);

//primitív típusok(retardáltak)
const active = true; //boolean
const age = 33; // number(float, int)
const message = 'Hello'; //string
const nothing = null; //object
let start; //undefined

console.log(typeof active);
console.log(typeof age);
console.log(typeof message);
console.log(typeof nothing);
console.log(typeof start);

Number.prototype.hello = function() 
    {
        console.log(this);
        console.log('Hello abbabababa');
    }
age.hello();

//collections
const numbers = [1,2,3,4,5,6,7,8,9];
const settings = [1, true, [42, 46], 'jijijijijijijijijiji'];
console.log(settings[2][1]);
console.log(settings.length);

//ojektum
console.log(list[0].age)
const key = 'name';
console.log(list[0][key]);