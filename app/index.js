const numbers = [1,2,3,4,5,6,6,7,7,8,8,9,10,1000]

function sum (arr) {
    return arr.reduce((accum, num) => {
        return accum + num
    }, 0)
}