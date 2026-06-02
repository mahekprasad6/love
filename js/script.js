const startDate = new Date("2026-05-18");

function updateCounter(){

const today = new Date();

const diff = today - startDate;

const days = Math.floor(
diff/(1000*60*60*24)
);

const counter=document.getElementById("counter");

if(counter){
counter.innerHTML=
`❤️ ${days} Days of Khajur & Majur ❤️`;
}

}

updateCounter();

setInterval(updateCounter,1000);

for(let i=0;i<100;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

document.body.appendChild(star);

}

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

},600);

function revealLove(){

document.getElementById("surprise")
.style.display="block";

}