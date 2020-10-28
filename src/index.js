const fontBoxChild = document.querySelector(".fontBoxRight");
const inputBox = document.querySelector(".inputBox");
const choiceBox = document.querySelector(".choiceBox");
const FONT = 'HELLO?'

console.log(choiceBox.data);

// const changeFont = addEventListener("change",(choiceBox)=>{
//   console.log(document.querySelector("data"));
//   // choiceBox.preventDefault;
//   font = `${choiceBox}`;
//   console.log(choiceBox);
// })

fontBoxChild.innerHTML=`${FONT}`;
fontBoxChild.style.fontFamily = `${FONT}`;
inputBox.style.fontFamily = `${FONT}`;
