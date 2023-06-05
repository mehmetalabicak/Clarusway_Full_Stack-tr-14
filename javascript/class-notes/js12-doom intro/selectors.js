console.log("***** SELECTORS *****")

document.title = "DOM DOM 🚲"

//*===========================================
//*            GETELEMENTBYID()
//*===========================================
// document.getElementById("header").style.border = "1px solid red"

const myHeader = document.getElementById("header")
console.log(myHeader)

myHeader.style.backgroundColor = "red"
myHeader.style.color = "white"



//* Add Buton
const addButon = document.getElementById("btn")
console.log(addButon);
addButon.style.backgroundColor = "#bebe"
addButon.style.border = "none"
addButon.style.borderRadius = "10px"
addButon.style.padding = "0.6rem"


//? Değer atama
addButon.value= "SAVE"

//* h1
const h1 = document.getElementById("heading1")
console.log(h1)

//? Deger atama
h1.textContent = "DOM Introduction"

//? Deger okuma
console.log(h1.textContent)
console.log(h1.innerText)
console.log(h1.innerHTML)


//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

 const myInputs = document.getElementsByTagName("input")
 consele.log(myInputs)  //?   [input#input, input#btn, input: input#input, btn: input#btn]


//! HTML Collection (Array-Like) döndürür.
console.log("Size:", myInputs.length)

console.log(myInputs[0])
console.log(myInputs[1])

console.log(document.getElementsByTagName("h3")[0])