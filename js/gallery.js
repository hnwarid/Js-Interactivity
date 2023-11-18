/*Name this external file gallery.js*/

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