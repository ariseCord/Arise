let btn = document.getElementById("submit")

btn.addEventListener("click", ()=>{
  alert("submitted feedback");
});
  
const colours = {
  1:"cyan",
  2:"blue",
  3:"red",
  4:"green"
}

function random(){
  let arr = document.getElementsByClassName("sd")
  for(let i = 0; i < 5; i++)
  {
    arr[i].style.color = colours[Math.floor(Math.random() * 4) + 1]
  }
}

setInterval(random, 100)
