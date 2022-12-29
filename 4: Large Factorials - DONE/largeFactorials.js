// why doesn't the simple solution work? 

// function factorial(n) {
//   let output = 1n
//   for (let i = 1; i <= n; i++) {
//     output = output * BigInt(i)
//   }
//   return String(output)
// }

// console.log(factorial(15))


// algorithm for multiplication of large numbers, represented as arrays of digits

// e.g., [2,5,1,6,8,4,5,7,2,4,1] and [1,6,7,8,6,0,9,3]

// return another array of digits

// step 1: arr * num

function arrNumMult(arr, num) {
  // initial multiplication simply multiplies each digit by the number. save each 'digit' as a string for later manipulation
  const initMult = [...arr].map(el => String(el * num));
  // console.log(initMult);

  // now, carry values. iterate backwards through array

  return carry(initMult)
}

// carry operator: iterate backwards through the digits array, carrying digits as necessary
// digitsArr is an array of integers
function carry(digitsArr) {

  const digitsStringArr = digitsArr.map(el => String(el));
  // console.log(digitsStringArr);

  // deal with all digits except the first. first digit dealt with separately
  for (let i = digitsArr.length - 1; i > 0; i--) {
    // console.log(`inspecting digit ${i}: ${digitsStringArr[i]}`)
    // console.log(`length of digit ${i}: ${digitsStringArr[i].length}`)
    if (digitsStringArr[i].length > 1) {
      // console.log(`carrying digit ${i}, ${digitsStringArr[i]}`)
      const carry = Number(digitsStringArr[i][0])
      digitsStringArr[i] = digitsStringArr[i].slice(1);
      digitsStringArr[i - 1] = String(Number(digitsStringArr[i - 1]) + carry)
    }
  }
  // special case for the first digit
  if (digitsStringArr[0].length > 1) {
    const carry = digitsStringArr[0][0]
    digitsStringArr.unshift(carry)
    digitsStringArr[1] = digitsStringArr[1].slice(1)
  }
  return digitsStringArr.map(el => Number(el))
}

console.log('carry([12,2,14]), expect [1, 2, 3, 4]:', carry([12, 2, 14]))
console.log('carry([19,48,62], expect [2, 4, 4, 2]', carry([19, 48, 62]))
console.log('arrNumMult([2,4,6,8], 2), expect [4, 9, 3, 6]:', arrNumMult([2, 4, 6, 8], 2))

// ----------- STEP 2: iterate arrNumMult for full arr x arr ---------------

// first, module for array addition
function arrAdd(arr1, arr2) {
  const length = arr1.length > arr2.length ? arr1.length : arr2.length;

  // give both arrays leading zeroes until they are the length of the longer array
  while (arr1.length < length) arr1.unshift(0);
  while (arr2.length < length) arr2.unshift(0);
  return arr1.map((el, i) => el + arr2[i])
}

console.log('arrAdd([1,2,3], [4,5]); expect [1,6,8]:', arrAdd([1, 2, 3], [4, 5]))

// order does not matter (length)
// remember to correct for 10s digit

function arrArrMult(arr1, arr2) {
  let output = []
  // iterate backwards to simplify adding 0s
  for (let i = arr1.length - 1; i >= 0; i--) {
    const multArr = arrNumMult(arr2, arr1[i]);
    console.log(`multArr for arr1[${i}] (${arr1[i]}): ${multArr}`)
    // correct for digit place
    for (let j=0; j<arr1.length-i-1; j++) {
      multArr.push(0)
    }
    output = arrAdd(output, multArr)
  }
  return carry(output)
}

console.log('arrArrMult([1, 2, 3], [4, 5]); expect [5,5,3,5]', arrArrMult([1, 2, 3], [4, 5]));
console.log('arrArrMult([2,7,5,8,3,9,0], [3,7,3,4,1,2]); expect [1,0,3,0,0,1,5,9,2,6,6,8,0]:', arrArrMult([2,7,5,8,3,9,0], [3,7,3,4,1,2]))

// ----------------- STEP 3: apply to factorials -------------------

function factorial(n) {
  let output = [1];
  for (let i=0; i<n; i++) {
    const stringArr = String(n-i).split('').map(el=>Number(el))
    output = arrArrMult(output,stringArr)
  }
  return output.join('')
}

console.log('factorial(5); expect 120:', factorial(5))