const fontBoxChild = document.querySelector(".fontBoxChild");
const inputBox = document.querySelector(".inputBox");
const choiceBox = document.querySelector(".choiceBox");
const FONT = `'Press Start 2P'`;

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
