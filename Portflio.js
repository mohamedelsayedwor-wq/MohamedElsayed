/* =========================================
   PORTFOLIO GALLERY
========================================= */


const galleryImage = document.getElementById("PortflioGalleryImage");

const thumbnailsContainer = document.getElementById("PortflioThumbnails");

const prevBtn = document.getElementById("PortflioPrev");

const nextBtn = document.getElementById("PortflioNext");

const currentText = document.getElementById("PortflioCurrent");

const totalText = document.getElementById("PortflioTotal");



/* =========================================
   SETTINGS
========================================= */


const firstImage = 1;

const lastImage = 12;

let currentImage = firstImage;



const totalImages = lastImage - firstImage + 1;



if(totalText){

    totalText.textContent =
    String(totalImages).padStart(2,"0");

}



/* =========================================
   CREATE THUMBNAILS
========================================= */


for(let i = firstImage; i <= lastImage; i++){


    const number =
    String(i).padStart(2,"0");



    const button =
    document.createElement("button");


    button.className =
    "profile-thumbnail";



    button.dataset.index = i;



    const img =
    document.createElement("img");



    img.src =
    `profile${i}.jpg`;



    img.alt =
    `Project ${i}`;



    img.loading = "lazy";



    button.appendChild(img);



    thumbnailsContainer.appendChild(button);



    if(i === firstImage){

        button.classList.add("active");

    }



    button.onclick = ()=>{

        showImage(i);

    };


}





/* =========================================
   SHOW IMAGE
========================================= */


function showImage(index){



    if(index < firstImage){

        index = lastImage;

    }



    if(index > lastImage){

        index = firstImage;

    }



    currentImage = index;



    const number =
    String(index).padStart(2,"0");



    galleryImage.style.opacity = "0";



    setTimeout(()=>{


        galleryImage.src =
        `profile${index}.jpg`;



        galleryImage.style.opacity = "1";



    },150);





    if(currentText){

        currentText.textContent =
        number;

    }




    document
    .querySelectorAll(".profile-thumbnail")
    .forEach(btn=>{

        btn.classList.remove("active");

    });





    const active =
    document.querySelector(
        `.profile-thumbnail[data-index="${index}"]`
    );



    if(active){

        active.classList.add("active");

    }


}





/* =========================================
   BUTTONS
========================================= */


if(prevBtn){

prevBtn.onclick = ()=>{


    showImage(currentImage - 1);


};


}





if(nextBtn){

nextBtn.onclick = ()=>{


    showImage(currentImage + 1);


};


}





/* =========================================
   KEYBOARD
========================================= */


document.addEventListener("keydown",(e)=>{


    if(e.key === "ArrowLeft"){

        showImage(currentImage + 1);

    }



    if(e.key === "ArrowRight"){

        showImage(currentImage - 1);

    }



});