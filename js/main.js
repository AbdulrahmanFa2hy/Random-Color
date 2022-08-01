let myBtn = document.querySelector('#btn')
myBtn.addEventListener('click', colorChange)

// ------------- First Solution ----------------

function colorChange() {
  document.body.style.backgroundColor = `#${Math.random()
    .toString(16)
    .slice(2, 8)}`
}

// ------------- Second Solution ---------------- //

/*
function colorChange(){
  let myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let randomColor = 0;
  
  for(let i = 0; i < 6; i++){
    let index = Math.floor(Math.random() * 16);
    let randomIndexArr = myArr[index];
    randomColor += `${randomIndexArr}`;
    if(randomColor.length == 6){
      document.body.style.backgroundColor = `#${randomColor}`  
      console.log(randomColor)
    }
  }
}
*/

// ------------- Third Solution ---------------- //

// let myArr = [];
// function colorChange(){
//   for(let i = 0; i < 3; i++){
//     let myRgb = Math.floor(Math.random() * 256);
//     myArr.push(myRgb);
//     document.body.style.backgroundColor =  `rgb(${myArr[0]}\, ${myArr[1]}\,${myArr[2]})`
//     console.log(myArr)
//   }
//   myArr = [];
// }
