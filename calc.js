var displayVal = ""
var val1 = ""
var val2 = ""
var solv = ""
var funcVal = ""
var funcType = ""

function getInput(btnVal, inputBox){
  if (btnVal === "+"){
      val1 = funcVal
      displayVal = displayVal.concat(btnVal)
      funcVal = ""
      funcType = "add"
  }
  else if (btnVal === "-"){
      val1 = funcVal
      displayVal = displayVal.concat(btnVal)
      funcVal = ""
      funcType = "subtract"
  }
  else if (btnVal === "*"){
      val1 = funcVal
      displayVal = displayVal.concat(btnVal)
      funcVal = ""
      funcType = "multiply"
  }
  else if (btnVal === "/"){
      val1 = funcVal
      displayVal = displayVal.concat(btnVal)
      funcVal = ""
      funcType = "divide"
  }
  else if (btnVal === "="){
      val2 = funcVal
      switch (funcType){
          case "add":
              solv = add(val1, val2)
              displayVal = displayVal.concat("=" + solv)
              break
          case "subtract":
              solv = subtract(val1, val2)
              displayVal = displayVal.concat("=" + solv)
              break
          case "multiply":
              solv = multiply(val1, val2)
              displayVal = displayVal.concat("=" + solv)
              break
          case "divide":
              solv = divide(val1, val2)
              displayVal = displayVal.concat("=" + solv)
              break
      }
  }
  else if (btnVal === "X"){
      displayVal = ""
      val1 = ""
      val2 = ""
      solv = ""
      funcVal = ""
      funcType = ""
  }
  else {
      displayVal = displayVal.concat(btnVal)
      funcVal = funcVal.concat(btnVal)
  }

  inputBox.val(displayVal)
}

function add(val1, val2){
  return Number(val1) + Number(val2)
}

function subtract(val1, val2){
  return Number(val1) - Number(val2)
}

function multiply(val1, val2){
  return Number(val1) * Number(val2)
}

function divide(val1, val2){
  return Number(val1) / Number(val2)
}