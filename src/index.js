const fontBoxChild = document.querySelector(".fontBoxRight");
const inputBox = document.querySelector(".inputBox");
const choiceBox = document.querySelector(".choiceBox");
const FONT = "TmonMonsori";
const FONTS = document.querySelectorAll(".fonts");
const con = document.getElementById("choiceFont");


// var selectedCollection = HTMLSelectElement.selectedOptions;
// const choice = () => {
//   con.addEventListener("change", ()=>{
//     const lst = con.selectedOptions;
//     console.log(lst)
//     const list = lst;
//     console.log(list);
//   })

// }

// choice();


// con.addEventListener("change", () =>{
//   const index = con.selectedOptions;
//   const fon = index.
//   fontBoxChild.innerHTML = `${index}`;
//   console.log(index);
// })

// font-family: 'NanumBarunGothic';


con.addEventListener("change", () =>{
  const index = con.selectedIndex;
  const pick = FONTS[index].attributes[5]
  const rep = pick.value
  const toRightBox = rep.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi,'').slice(rep.indexOf(" ")-1);
  // console.log(repe)
  // const replace = rep.slice(rep.indexOf(": ")+3).slice(rep.indexOf("';"));
  // console.log(replace);
  fontBoxChild.innerHTML = `${toRightBox}`;
  // console.log(index);
  // console.log(pick);
  // console.log(rep);
  // console.log(FONTS[5].attributes[5]);
})






// const style = getComputedStyle(Element, pseudoElement);
// console.log(style)
// const test = () =>{
//   const font = con.style.fontFamily;
//   console.log(font);
// }
// test();

// console.log(con)

// console.log(FONTS);
// console.log(FON)
// FONTS.forEach((nowV, nowI, listO)=>{
//   console.log(`${nowV}, ${nowI}, ${listO}`)
// })

// const pickNow = 
//   const FONTS = document.querySelectorAll(".fonts");

// function val() {
//   d = choiceBox;
//   console.log(d);
// }

// const pickNow = {
// }

// var content = $('#oi_report_contact_sex option:selected').html();

// console.log(strUser);
const pickFont = () => choiceBox.addEventListener("change", (e) => {
  // 폰트를 잡아서 내보내려합니다.
  const FONTS = document.querySelectorAll(".fonts");
  console.log(FONTS)
  console.log(e.target);
  console.log(e.target.style.fontFamily);
  
})

// pickFont();

// function blockContext(){
//   if(document.addEventListener){
//     document.addEventListener("contextmenu",(e)=>{
//       e.preventDefault();
//     })
//   }
// }

// FONTS.addEventListener("change",(e)=>{
//   console.log(e.target);
// })

// addEventListener("change", (e)=>{
//   e.currentTarget
// })

// console.log(FONTS[5].attributes[5].value);

// console.log(FONTS[5].map(attributes[5].map()));

// const STYLE = FONTS.forEach(indexOf("style"));
// const changeFont = addEventListener("change",(choiceBox)=>{
//   console.log(document.querySelector("data"));
//   // choiceBox.preventDefault;
//   font = `${choiceBox}`;
//   console.log(choiceBox);
// })

// FONTS.values.apply(indexOf("style"));

// console.log(FONTS.length);
// console.log(FONTS.entries);
// console.log(FONTS.keys);
// console.log(FONTS.values);
// console.log(FONTS.item);
// console.log(FONTS.forEach);

// addEventListener("change", (e) => {
//   console.log(e.target.choiceBox);
// });




const blockContext = () => {
  if (document.addEventListener) {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    })
  }
}

function font_apply() {
  fontBoxChild.innerHTML = `${FONT}`;
  fontBoxChild.style.fontFamily = `${FONT}`;
  inputBox.style.fontFamily = `${FONT}`;
  choiceBox.style.fontFamily = `${FONT}`
}


function init() {
  blockContext();
  font_apply();
}

init();