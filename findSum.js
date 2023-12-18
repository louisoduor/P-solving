/**
 * if array = [1,2,3,4] then return sum = 10
 * if array = [7,3,2] then   return sum = 12
 * 
 * 
 * Pseudcode
 * 
 * 
 * function (int_array)
 * Loop
 * 
 * 
 * initialize sum = 0
 * 
 * 
 * sum = sum + int_array[i]
 */

function findSum(int_array){
    if (int_array.length == 0 ){
        return 0
    }

    let sum = 0
    for (let i = 0; i <= int_array.length -1 ; i++){

        sum = sum + int_array[i]

    }
    return sum

}

let results = findSum([1,2,3,4] )
console.log(results)
