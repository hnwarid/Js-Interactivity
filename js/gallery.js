/*Name this external file gallery.js*/

const images = [
    {
        src: "./img/IMG_20171124_063528-playground-swing.jpg",
        alt: "My friends playing with swings"
    },
    {
        src: "./img/IMG_20171124_160921-Anmok-beach.jpg",
        alt: "Anmok beach during winter in 2017"
    },
    {
        src: "./img/IMG_20171124_112405-flowers.jpg",
        alt: "Lovely flowers"
    },
    {
        src: "./img/IMG_20171125_175935-underground-sports.jpg",
        alt: "Playing in the underground sports ground"
    },
    {
        src: "./img/IMG_20171124_062300-breakfast.jpg",
        alt: "Leaving after breakfast"
    },
    {
        src: "./img/IMG_20171123_125354-stadium.jpg",
        alt: "Walking past an empty stadium"
    },
];

function createImageElement(src, alt) {
    const imgElement = document.createElement("img");
    imgElement.className = "preview";
    imgElement.src = src;
    imgElement.alt = alt;
    imgElement.onmouseover = function () { upDate(this); };
    imgElement.onmouseout = unDo;
    imgElement.tabIndex = 0; 
    imgElement.addEventListener("focus", function () { onFocus(this); });
    imgElement.addEventListener("blur", function () { onBlur(this); })
    return imgElement;
}

function initializeGallery() {
    const galleryContainer = document.getElementById('gallery');
    images.forEach(image => {
        const imgElement = createImageElement(image.src, image.alt);
        galleryContainer.appendChild(imgElement);
    });
}

function upDate(previewPic){
    /* Change the url for the background image of the div with the id = "image" 
       to the source file of the preview image alt & change the text to the alt text of the preview image 
    */  
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
}
   
function unDo(){
    /* Update the url and change the text for the background image of the div with the id = "image" 
       back to the orginal-image & original text.
    */
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').style.backgroundColor = "#8e68ff"; 
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

function onFocus(previewPic) {
    previewPic.style.border = "3px solid yellow";
    upDate(previewPic);
    console.log("Focus on", previewPic.alt);
}

function onBlur(previewPic) {
    previewPic.style.border = "8px solid black";
    unDo();
    console.log("Blur on", previewPic.alt);
}

window.onload = function () {
    console.log("Gallery loaded.")
};

// Initialize the gallery
initializeGallery();