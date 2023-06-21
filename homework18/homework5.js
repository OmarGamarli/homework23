// ----------1-----------

const number = '4,5,2,7'

function addNum(str) {
   const numbers=str.split(',')
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += str[i];
    }
    console.log(sum);

}
addNum(number)

// --------------2----------------





// -------------3----------------  Object.entries() принимает объект и возвращает массив
function obtoarr(obj){
    return Object.entries(obj)
}

// --------------4------------    Concat используется для объединения массивов
function plussum(arr){
return [].concat(...arr)
}

const arr1=[3,5,7]
const arr2=[4,2,4]
console.log(plussum([arr1,arr2]))

// ----------------5--------------- 
function count(number){
return number.toString().length
}
const num=45684
console.log(count(num))