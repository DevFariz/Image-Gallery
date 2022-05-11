const input = document.getElementById("input__text");
const imagesContainer = document.querySelector(".images-container");

input.focus();

const url = "https://api.unsplash.com/search/photos?query=bmw&extras=url_m&per_page=30&page=1&orientation=landscape&tag_mode=all&client_id=D_ECBb6LVpttxYZ0RN1Bx3gxVmVa1__vr40Z2Cg6Lvo";

    fetch(url)

    .then(response => {
        if(response.ok){
            return response.json();
        }else{
            alert("No images");
        }
    })

    .then(data => {
        const imageNodes = [];

        for(let i = 0; i < data.results.length; i++){
            imageNodes[i] = document.createElement("div");
            imageNodes[i].className = "img";
            imageNodes[i].style.backgroundImage = "url("+data.results[i].urls.small+")";
        
            imagesContainer.appendChild(imageNodes[i]);
        }
    })


input.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        loadImg();
    }
});


function loadImg(){

    removeImages();

    const url = "https://api.unsplash.com/search/photos?query="+input.value+"&extras=url_m&per_page=30&page=1&orientation=landscape&tag_mode=all&client_id=D_ECBb6LVpttxYZ0RN1Bx3gxVmVa1__vr40Z2Cg6Lvo";

    fetch(url)

    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            alert("No images");
        }
    })

    .then(data => {
        const imageNodes = [];

        for(let i = 0; i < data.results.length; i++){
            imageNodes[i] = document.createElement("div");
            imageNodes[i].className = "img";
            imageNodes[i].style.backgroundImage = "url("+data.results[i].urls.small+")";
        
            imagesContainer.appendChild(imageNodes[i]);
        }
    })

}

function removeImages(){
    imagesContainer.textContent = "";
}

const deleteBtn = document.querySelector(".delete");


deleteBtn.addEventListener("click", () =>{
    input.value = "";
    input.focus();
});