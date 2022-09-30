const number = document.getElementById("number");
const button= document.querySelectorAll(".btn");
let count = 0;
// ### FOR EACH METHOD ### \\
// button.forEach(function(e){
//     e.addEventListener("click",function(a){
//         let Class = a.currentTarget.classList;
//         if(Class.contains("decrement") === true){
//             count--;
//             number.innerHTML = count;
//         }else if(Class.contains("increment")=== true){
//             count ++;
//             number.innerHTML = count;
//         }else if(Class.contains("reset") === true){
//             window.location.reload();
//         }

//         // add color
//         if(count<0){
//             number.style.color = "red";
//         }else if(count>0){
//             number.style.color = "green"
//         }
//     })
// })

// ### CLICK FUNCTION METHOD ### \\
const plusBtn = document.querySelector(".increment");
const minusBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");

plusBtn.addEventListener("click",function(){
    count++;
    number.innerHTML = count;
    addColor(count)
})
minusBtn.addEventListener("click", function(){
    count--;
    number.innerHTML = count;
    addColor(count)
})
resetBtn.addEventListener("click", function(){
    window.location.reload();
})
// add color
function addColor(e){
    if(e<0){
        number.style.color = "red";
    }else if(e>0){
        number.style.color = "green";
    }
 }