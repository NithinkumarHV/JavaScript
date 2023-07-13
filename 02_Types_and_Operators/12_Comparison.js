// Comparison Operators

console.log( 3 < 2 < 1 ) // true, left to right associativity

// Working
console.log(3 < 2) // false
console.log(false < 1) // false is coerced to number(0), 0 < 1 -> true

console.log( 1 < 2 < 3 ) // true

console.log(1 < 2) // true
console.log(true < 3) // true is coerced to number(1), 1 < 3 -> true

console.log(Number(false))     // 0
console.log(Number(undefined)) // NaN
console.log(Number(null))      // 0

console.log("3" == 3)      // true, why "3" is coerced to 3
console.log("3" === 3)

console.log(false == 0)    // true, why false is coerced to 0
console.log(false === 0)


console.log(null == 0)    // false, no coercion
console.log("" == 0)
console.log("" == false)

// Note: To avoid coercion use ===


