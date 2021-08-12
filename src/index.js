const zero = "zero"
const one = "one"
const two = "two"
const tree = "three"
const four = "four"
const five = "five"
const six = "six"
const seven = "seven"
const eight = "eight"
const nine = "nine"
const ten = "ten"
const eleven = "eleven"
const twelve = "twelve"
const thirteen = "thirteen"
const fourteen = "fourteen"
const fifteen = "fifteen"
const sixteen = "sixteen"
const seventeen = "seventeen"
const eighteen = "eighteen"
const nineteen = "nineteen"
const twenty = "twenty"
const thirty = "thirty"
const forty = "forty"
const fifty = "fifty"
const hundred = "hundred"
const thousand ="thousand"
const eighty = "eighty"


module.exports = function toReadable (num) {
  let result = ""
  let numToString = String(num);

  if ( num == 1000) {
    result += one + " " + thousand
  } else if (numToString.length == 3) {
    result += convertTreeNum(num)
  } else if (numToString.length == 2) {
    result += convertTwoNum(num)
  }   else if (numToString.length == 1) {
    result += convertOneNum(num)
  }

  return result
}


function convertOneNum (num) {

  let result = "";

  if (num === 0 ) {
    result += zero
  } else if (num % 9 == 0){
    result += nine
  } else if (num % 8 == 0) {
      result += eight
  } else if (num % 7 == 0) {
    result += seven
  } else if (num % 6 == 0) {
    result += six
  } else if (num % 5 == 0) {
    result += five
  } else if (num % 4 == 0) {
    result += four
  } else if (num % 3 == 0) {
    result += tree
  } else if (num % 2 == 0) {
    result += two
  } else if (num == 1) {
    result += one
  } 

  return result

}



function convertTwoNum (num) {

  let result = "";
  let firstNum = Math.floor(num / 10);
  let restNum = num - (firstNum * 10)

  if ( num < 20) {
    if (num == 10) {
      result += ten
    } else if (num == 11) {
      result += eleven
    } else if (num == 12) {
      result += twelve
    } else if (num == 13) {
      result += thirteen
    } else if (num == 14) {
      result += fourteen
    } else if (num == 15) {
      result += fifteen
    } else if (num == 16) {
      result += sixteen
    } else if (num == 17) {
      result += seventeen
    } else if (num == 18) {
      result += eighteen
    } else if (num == 19) {
      result += nineteen
    } 
  } else {
    if (firstNum === 5) {
      if (num % 10 === 0) {
        result += fifty
      } else {
        result += fifty + " " + convertOneNum(restNum)
      }
    } else if (firstNum === 4) {
      if (num % 10 === 0) {
        result += forty
      } else {
        result += forty + " " + convertOneNum(restNum)
      }
    } else if (firstNum === 3) {
      if (num % 10 === 0) {
        result += thirty
      } else {
        result += thirty + " " + convertOneNum(restNum)
      }
    } else if (firstNum === 2) {
      if (num % 10 === 0) {
        result += twenty
      } else {
        result += twenty + " " + convertOneNum(restNum)
      }
    } else if (firstNum === 8) {
      if (num % 10 === 0) {
        result += eighty
      } else {
        result += eighty + " " + convertOneNum(restNum)
      }
    } else {
      if (num % 10 === 0) {
        result += convertOneNum(firstNum) + 'ty'
      } else {
        result += convertOneNum(firstNum) + 'ty' + " " + convertOneNum(restNum)
      }
    }
  }

  return result
}


function convertTreeNum (num) {

  let result = ""

  let firstNum = Math.floor(num / 100)
  let restNum = num - (firstNum * 100)

  if (num % 100 === 0 ) {
    result += convertOneNum(firstNum) + " " + hundred
  }  else if (restNum  < 10) {
    result += convertOneNum(firstNum) + " " + hundred + " " + convertOneNum(restNum)
  } else {
    result += convertOneNum(firstNum) + " " + hundred + " " + convertTwoNum(restNum)
  }

  return result
}
