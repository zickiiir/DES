// S-BOX matrixes
const boxS1 = {
  0: [ 14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7 ],
  1: [ 0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8 ],
  2: [ 4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0 ],
  3: [ 15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13 ]
}
const boxS2 = {
  0: [ 15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10 ],
  1: [ 3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5 ],
  2: [ 0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15 ],
  3: [ 13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9 ]
}
const boxS3 = {
  0: [ 10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8 ],
  1: [ 13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1 ],
  2: [ 13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7 ],
  3: [ 1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12 ]
}
const boxS4 = {
  0: [ 7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15 ],
  1: [ 13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9 ],
  2: [ 10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4 ],
  3: [ 3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14 ]
}
const boxS5 = {
  0: [ 2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9 ],
  1: [ 14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6 ],
  2: [ 4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14 ],
  3: [ 11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3 ]
}
const boxS6 = {
  0: [ 12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11 ],
  1: [ 10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8 ],
  2: [ 9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6 ],
  3: [ 4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13 ]
}
const boxS7 = {
  0: [ 4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1 ],
  1: [ 13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6 ],
  2: [ 1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2 ],
  3: [ 6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12 ]
}
const boxS8 = {
  0: [ 13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7 ],
  1: [ 1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2 ],
  2: [ 7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8 ],
  3: [ 2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11 ]
}

// DES permutations matrixes
const initPermutationMatrix = [
  58, 50, 42, 34, 26, 18, 10, 2,
  60, 52, 44, 36, 28, 20, 12, 4,
  62, 54, 46, 38, 30, 22, 14, 6,
  64, 56, 48, 40, 32, 24, 16, 8,
  57, 49, 41, 33, 25, 17,  9, 1,
  59, 51, 43, 35, 27, 19, 11, 3,
  61, 53, 45, 37, 29, 21, 13, 5,
  63, 55, 47, 39, 31, 23, 15, 7
]
const finalPermutationMatrix = [
  40, 8, 48, 16, 56, 24, 64, 32,
  39, 7, 47, 15, 55, 23, 63, 31,
  38, 6, 46, 14, 54, 22, 62, 30,
  37, 5, 45, 13, 53, 21, 61, 29,
  36, 4, 44, 12, 52, 20, 60, 28, 
  35, 3, 43, 11, 51, 19, 59, 27,
  34, 2, 42, 10, 50, 18, 58, 26,
  33, 1, 41,  9, 49, 17, 57, 25
]

// F funtion matrixes
const fFunctionExpanseMatrix = [
  32,  1,  2,  3,  4,  5,
  4,   5,  6,  7,  8,  9,
  8,   9, 10, 11, 12, 13,
  12, 13, 14, 15, 16, 17,
  16, 17, 18, 19, 20, 21,
  20, 21, 22, 23, 24, 25,
  24, 25, 26, 27, 28, 29,
  28, 29, 30, 31, 32,  1
]
const fFunctionPermutationMatrix = [
  16,  7, 20, 21,
  29, 12, 28, 17,
  1,  15, 23, 26,
  5,  18, 31, 10,
  2,   8, 24, 14,
  32, 27,  3,  9,
  19, 13, 30,  6,
  22, 11,  4, 25
]

// KEY permutations matrixes
const permuteKeyMatrixPC1 = [ 
  57, 49, 41, 33, 25, 17, 9,
  1, 58, 50, 42, 34, 26, 18,
  10, 2, 59, 51, 43, 35, 27,
  19, 11, 3, 60, 52, 44, 36,
  63, 55, 47, 39, 31, 23, 15,
  7, 62, 54, 46, 38, 30, 22,
  14, 6, 61, 53, 45, 37, 29,
  21, 13, 5, 28, 20, 12, 4
]
const permuteKeyMatrixPC2 = [
  14, 17, 11, 24, 1, 5,
  3, 28, 15, 6, 21, 10,
  23, 19, 12, 4, 26, 8,
  16, 7, 27, 20, 13, 2,
  41, 52, 31, 37, 47, 55,
  30, 40, 51, 45, 33, 48,
  44, 49, 39, 56, 34, 53,
  46, 42, 50, 36, 29, 32
]
const keyShifts = {
  0:1, 1:1,  2:2,  3:2,  4:2,  5:2,  6:2,  7:2,
  8:1, 9:2, 10:2, 11:2, 12:2, 13:2, 14:2, 15:1
}
let keys = []

// HEX functions
const string2hex = (str, ret = '') => { // correct
  str.split('').forEach((item, index) => {
    ret += str.charCodeAt(index).toString(16)
  })
  return ret
}
const hex2string = (str, hex, ret = '') => { // correct
  hex = str.match(/.{1,2}/g) || []
  hex.forEach(item => {
    ret += String.fromCharCode(parseInt(item, 16))
  })
  return ret
}

// BIN functions
const hex2bin = (str, ret = '') => { // correct
  str.split('').forEach(item => {
    ret += parseInt(item, 16).toString(2).padStart(4, '0')
  })
  return ret
}
const bin2hex = (str, quad, ret = '') => { // correct
  quad = str.match(/.{1,4}/g) || []
  quad.forEach(item => {
    ret += parseInt(item, 2).toString(16)
  })
  return ret
}
const bin2dec = str => { // correct
  return parseInt(str, 2)
}
const dec2bin = str => { // correct
  return str.toString(2)
}

// XOR operator
const xor = (a, b, item2, ret = '') => {
  let i = 1
  a.split('').forEach((item, index) => {
    item = parseInt(item)
    item2 = parseInt(b[index])
    if ((!item && item2) || (item && !item2)) ret += 1
    else ret += 0
  })
  return ret
}

// init permutation and depermutation
const initPermutation = (m, ret = []) => {
  initPermutationMatrix.forEach(item => {
    ret += m[item - 1]
  })
  ret = ret.match(/.{32}?/g)
  return ret
}
const initDepermutation = (m, ret = [], ffs = '', r = '') => {
  initPermutationMatrix.forEach((item, index) => {
    ffs = String(item).padStart(2, '0')
    ret.push([ffs, m[index]])
  })
  ret.sort().forEach(item => {
    r += item[1]
  })
  return r
}

// final permutation and depermutation
const finalPermutation = (m, ret = '') => {
  finalPermutationMatrix.forEach(item => {
    ret += m[item - 1]
  })
  return ret
}
const finalDepermutation = (m, ret = [], ffs = '', r = []) => {
  finalPermutationMatrix.forEach((item, index) => {
    ffs = String(item).padStart(2, '0')
    ret.push([ffs, m[index]])
  })
  ret.sort().forEach(item => {
    r += item[1]
  })
  r = r.match(/.{32}?/g)
  return r
}

// key permutation
const permuteKey = async (key, permutePC1 = '', halfPart1 = [], halfPart2 = [], remember = '') => {
  keys = [] // reset keys
  // permuted choice 1
  permuteKeyMatrixPC1.forEach(item => {
    permutePC1 += key[item - 1]
  })
  // 16 left shifts
  for (let i = 0; i < 16; i++) { 
    let ret = '', part1 = '', part2 = ''
    halfPart1 = permutePC1.match(/.{28}?/g)
    permutePC1 = ''
    halfPart1.forEach(item => {
      item.split('').forEach((char, index) => {
        if (index === 0) {
          remember = char
        } else if (index === 27) {
          part1 += char + remember
          remember = ''
        } else {
          part1 += char
        }
      })
    })
    if (keyShifts[i] > 1) {
      halfPart2 = part1.match(/.{28}?/g)
      halfPart2.forEach(item => {
        item.split('').forEach((char, index) => {
          if (index === 0) {
            remember = char
          } else if (index === 27) {
            part2 += char + remember
            remember = ''
          } else {
            part2 += char
          }
        })
      })
      permutePC1 = part2
      // permuted choice 2
      permuteKeyMatrixPC2.forEach(item => {
        ret += part2[item - 1]
      })
    } else {
      permutePC1 = part1
      // permuted choice 2
      permuteKeyMatrixPC2.forEach(item => {
        ret += part1[item - 1]
      })
    }
    keys.push(ret)
  }
}

// function F
const fFunction = (r, k, s = [], e = '', xored = '', sboxed = '', row = '', col = '', ret = '') => {
  fFunctionExpanseMatrix.forEach(item => {
    e += r[item - 1]
  })
  xored = xor(e, k)
  s = xored.match(/.{6}?/g)
  s.forEach((item, index) => {
    row = bin2dec(item[0] + item[5]) 
    col = bin2dec(item[1] + item[2] + item[3] + item[4])
    switch (index) {
      case 0:
        sboxed += dec2bin(boxS1[row][col]).padStart(4, '0')
        break
      case 1:
        sboxed += dec2bin(boxS2[row][col]).padStart(4, '0')
        break
      case 2: 
        sboxed += dec2bin(boxS3[row][col]).padStart(4, '0')
        break
      case 3:
        sboxed += dec2bin(boxS4[row][col]).padStart(4, '0')
        break
      case 4:
        sboxed += dec2bin(boxS5[row][col]).padStart(4, '0')
        break
      case 5:
        sboxed += dec2bin(boxS6[row][col]).padStart(4, '0')
        break
      case 6:
        sboxed += dec2bin(boxS7[row][col]).padStart(4, '0')
        break
      case 7:
        sboxed += dec2bin(boxS8[row][col]).padStart(4, '0')
        break
    }
  })
  fFunctionPermutationMatrix.forEach(item => {
    ret += sboxed[item - 1]
  })
  return ret
}

// encrypt form
const sc = document.getElementById('encrypt')
const tc = document.getElementById('Tc')
const kc =  document.getElementById('Kc')
const em = document.getElementById('encrypted-message')

// decrypt form
const sd = document.getElementById('decrypt')
const td = document.getElementById('Td')
const kd =  document.getElementById('Kd')
const dm = document.getElementById('decrypted-message')

sc.addEventListener('submit', (e) => {
  e.preventDefault()
  if (tc.value && kc.value) {
    // HEX convertion
    let hexString = string2hex(tc.value)
    let hexKeyString = string2hex(kc.value)
    // let hexString = '0123456789ABCDEF'
    // let hexKeyString = '133457799BBCDFF1'
    // BIN convertion
    let binString = hex2bin(hexString)
    let binKeyString = hex2bin(hexKeyString)
    // empty spaces
    let x = (64 - binString.length) / 8
    let sub = '01011111'
    if (x > 0) {
      for (let i = 0; i < x; i++) {
        binString += sub
      }
    }
    permuteKey(binKeyString)
    let L, R, oldL, oldR, f, output
    let meziPocet = 0
    for (let i = 0; i < 16; i++) {
      if (i === 0) { // prvni permutace zpravy, klice a prohozeni stran zpravy
        [oldL, oldR] = initPermutation(binString) // L0, R0
        console.log(`L${meziPocet}: `, oldL, `R${meziPocet}: `, oldR)
        meziPocet++
        f = fFunction(oldR, keys[i])
        R = xor(oldL, f) // R1
        L = oldR // L1
        console.log(`L${meziPocet}: `, L, `R${meziPocet}: `, R)
        meziPocet++
      }
      if (i > 0 && i < 15) {
        oldR = R // R1...
        f = fFunction(R, keys[i])
        R = xor(L, f) // R2,...,R15
        L = oldR // L2,...,L15
        console.log(`L${meziPocet}: `, L, `R${meziPocet}: `, R)
        meziPocet++
        if (i === 14) oldR = R
      }
      if (i === 15) { // posledni permutace zpravy
        f = fFunction(R, keys[i])
        R = xor(L, f) // R16
        L = oldR
        console.log(`L${meziPocet}: `, L, `R${meziPocet}: `, R)
        output = finalPermutation(`${R}${L}`)
      }
    }
    em.innerHTML = 'Zašifrovaná zpráva: ' + bin2hex(finalPermutation(`${R}${L}`))
    console.log('--------------------------------------------------------------')
  // console.log('85e813540f0ab405')
  // console.log(bin2hex(output))
  }
})
//71f2b9993091db96
//AFCC1256
//asd
sd.addEventListener('submit', (e) => {
  e.preventDefault();
  if (td.value && kd.value) {
    // HEX
    // let hexMessage = hex2bin(td.value)
    // let hexKeyString = hex2bin(kd.value)
    // let hexMessage = '85e813540f0ab405'
    // let hexKeyString = '133457799BBCDFF1'
    // BIN
    let binMessage = hex2bin(td.value)
    let binKeyString = hex2bin(kd.value)
    // console.log('zprava v bin: ', binMessage)
    permuteKey(binKeyString)
    let L, R, oldL, oldR, f
    let meziPocet = 16
    for (let i = 15; i > -1; i--) {
      if (i === 15) {
        [R, L] = finalDepermutation(binMessage) // L16, R16
        console.log(`L${meziPocet}: `, L, `R${meziPocet}: `, R)
        meziPocet--
        // oldR = L
        // f = fFunction(R, keys[i])
        // R = xor(L, f)
        // oldL = R
        // // oldR = L // R15
        // // f = fFunction(L, keys[i])
        // // oldL = xor(L, f) // L15
        // // R = oldR
        // console.log(`L${meziPocet}: `, oldL, `R${meziPocet}: `, oldR)
        // meziPocet--
      }
      if (i > 0 && i < 15) {
        if (i === 14) oldR = L
        else oldR = oldL // R14...
        f = fFunction(oldR, keys[i])
        oldL = xor(R, f) // L14...
        R = oldR
        console.log(`L${meziPocet}: `, oldL, `R${meziPocet}: `, oldR)
        meziPocet--
      }
      if (i === 0) {
        oldR = oldL
        f = fFunction(oldR, keys[i])
        oldL = xor(R, f)
        console.log(`L${meziPocet}: `, oldL, `R${meziPocet}: `, oldR)
        // console.log(initDepermutation(`${oldL}${oldR}`))
        // console.log(bin2hex(initDepermutation(`${oldL}${oldR}`)))
        // console.log(hex2string(bin2hex(initDepermutation(`${oldL}${oldR}`))))
        dm.innerHTML = 'Dešifrovaná zpráva: ' + hex2string(bin2hex(initDepermutation(`${oldL}${oldR}`)));
      }
    }
  // console.log('0123456789ABCDEF')
  }
})