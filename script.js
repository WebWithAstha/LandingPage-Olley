


var arr = [
    {img:"purple-blonde-girl.jpg",sub:"Latin",name:"Maria Zen"},
    {img:"mobile-blue-icecream-girl.jpg",sub:"Spanish",name:"Anna Hella"},
    {img:"brown-top-girl.jpg",sub:"British",name:"Tokito Maru"}
]
function print(){
    var clutter=``;
arr.forEach(function(elem,index){
    clutter+=`<div id="${index}" class="cont">
    <img src="${elem.img}" alt="">
    <div class="lan"><h4>${elem.sub}</h4>
    <h3 class="star">
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    </h3>
    </div>
</div>`  
});
document.querySelector(".teachers .part2").innerHTML=clutter    
}
print()
document.querySelector(".part2").addEventListener("click",function(dets){
    document.querySelector(".pic img").setAttribute("src",`${arr[dets.target.id].img}`)
    document.querySelector(".name h3").innerHTML=`${arr[dets.target.id].name}`
    document.querySelector(".name h4").innerHTML=`${arr[dets.target.id].sub} Teacher`
    document.querySelector(".box1").innerHTML=`<h2>Greetings!! <br> I'm ${arr[dets.target.id].name}</h2>
    <p>Nice to meet ya Lorem ipsum dolor sit, ${arr[dets.target.id].sub} amet consectetur adipisicing elit. Nobis, iure.</p>
    <button class="pink">Get Started
                    </button>
                    <button class="white">Teacher Search
                    </button>
    `
    print()
})
var tl = gsap.timeline();

tl.from(".big-circle",{
    opacity:0,
    x : -30,
    delay: 1,
    stagger:.3,
    duration:.2,
    scale:0,
    duration:1,
    left:"-40%"


})
tl.from("#navbar h3,.nav1 img,.nav3 button",{
    opacity:0,
    y : -30,
    // delay: 1,
    stagger:.3,

})

tl.from(".box1 h2",{
    x:-100,
    opacity:0,
    stagger:.5,
    duration:.2,
})
tl.from(".box1 p",{
    x:-100,
    opacity:0,
    duration:.2,
})
tl.from(".box1 button",{
    x:-100,
    opacity:0,
    stagger:.3, 
    duration:.2,
})
tl.from(".outer",{
    x:-100,
    opacity:0,
    stagger:.3,
    scale:0,
})
tl.from(".circle",{
    x:-100,
    opacity:0,
    stagger:.3,
    scale:0,
})
tl.from(".circle img,.name,.media h4",{
    y:-20,
    opacity:0,
    stagger:.2,
    scale:0,
})

tl.from(".teachers,.part",{
    y:-10,
    opacity:0,
    stagger:.1,
})

tl.from(".part2 .cont,.part2 h4,.part2 h3",{
    y:-30,
    opacity:0,
    scale:0,
    stagger:.2,
})
tl.from(".teachers .hello",{
    y:-10,
    rotate:360,
    opacity:0,
    scale:10,
    duration:.2
    // stagger:.3,
})

document.querySelector(".cross").addEventListener("click",function(){
    menubar.style.top="-51%"
})
var flag=0
var menubar = document.querySelector("#menubar")
document.querySelector(".menu").addEventListener("click",function(){
            if(flag===0){
                menubar.style.top="0%";
            }
            else{
                menubar.style.top="-100%";
                flag=0;
            }
        }
            );