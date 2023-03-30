function loadImage(id, targetId){
    let el = document.getElementById(id),
    targetEl = targetId ? document.getElementById(targetId) : el,
    imageToLoad;
    
    if(el.dataset.image){
        imageToLoad = el.dataset.image;
    }else if(typeof el.currentSrc == "undefined"){
        imageToLoad = el.scroll;
    }else{
        imageToLoad = el.currentSrc;
    }
    console.log(`${targetId}, ${targetEl} ${imageToLoad}`)
    if(imageToLoad){
        let img = new Image();
        img.src = imageToLoad;
        img.onload = function(){
            console.log("Loaded Image")
            targetEl.classList.add('is-loaded');
        };
    }
}

document.addEventListener('DOMContentLoaded', function(){
    loadImage('wallpaper');
});