let audio = new Audio("Chanting.mp3")
let btn=document.querySelector("#btn")
const btnPlay=async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            audio.play()
            resolve(200)
        }, 5000);
    })
}
btn.addEventListener("click",async()=>{
  let i=true;
  while(i){
    await btnPlay()
  }
})