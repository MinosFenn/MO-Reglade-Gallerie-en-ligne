
const lightBoxContainer = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-img");
const counter= document.querySelector(".lightbox-counter");
const prevButton= document.querySelector(".prev");
const nextButton= document.querySelector(".next");

// const lightboxText = document.querySelector(".lightbox-text");
const portfolioItems = document.querySelector(".portfolio-items").children;
let index;
let imgSrc;

// Close lightbox if click anywhere outside arrow
lightBoxContainer.addEventListener("click", function(event){
    if(event.target!==lightboxImage && event.target!==prevButton && event.target!==nextButton){
        lightBox();
    }
})

//on img click open img lightbox and changeimage information
for(let i=0; i<portfolioItems.length; i++){
    portfolioItems[i].querySelector(".fa").addEventListener("click",function(){
        index=i;
        changeImage();
        lightBox();
    })
}


// change img index +1 -1
function next(){
    if(index==portfolioItems.length-1){
        index=0
    }
    else{
        index++;
    }
    changeImage()
}

function prev(){
    if(index==0){
        index=portfolioItems.length-1;
    }
    else{
        index--;
    }
    changeImage()
}

// change img with arrow left/right
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if  (e.keyCode == '37') {
       prev()
    }
    else if (e.keyCode == '39') {
      next()
    }
    else if (e.keyCode == '27') {
        lightBox()
      }

}

// change css properties to open img
function lightBox(){
    lightBoxContainer.classList.toggle("open");
}

//make the image change according to index and change mentions according to img

function changeImage(){
    imgSrc=portfolioItems[index].querySelector("img").getAttribute("src");
    lightboxImage.src=imgSrc;
    counter.innerHTML=(index+1)+ " sur " + portfolioItems.length;
    // lightboxText.innerHTML=portfolioItems[index].querySelector("h2").innerHTML;
}


// // lightbox: open img full screen v1 no img change

// const lightbox = document.createElement('div')
// lightbox.id = 'lightbox'
// document.body.appendChild(lightbox)

// const images = document.querySelectorAll('img')
// images.forEach(image => {
//     image.addEventListener('click', e => {
//         lightbox.classList.add('active')
//         const img = document.createElement('img')
//         img.src = image.src
//         while (lightbox.firstChild) {
//             lightbox.removeChild(lightbox.firstChild)
//         }
//             lightbox.appendChild(img)
//     })
// })

// lightbox.addEventListener('click', e => {
//     if (e.target !== e.currentTarget) return
//     lightbox.classList.remove('active')
// })