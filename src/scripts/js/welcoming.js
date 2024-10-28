const welcomeImg = document.querySelector(".welcome img");
const welcomeTxt = document.querySelector(".welcome .txt");

async function loadImages(){
    try {
        const imgsResponse = await fetch('../../src/scripts/js/images.json');
        const txtsResponse = await fetch('../../src/scripts/js/welcoming.json');

        if(!imgsResponse.ok){
            throw new Error(`HTTP Error, status: ${imgsResponse.status}`);
        }
        if(!txtsResponse.ok){
            throw new Error(`HTTP Error, status: ${txtsResponse.status}`);
        }
        const images = await imgsResponse.json();
        const txts = await txtsResponse.json();
        setInterval(() => {
            randomImage = images[Math.floor(Math.random() * images.length)];
            randomTxt = txts[Math.floor(Math.random() * txts.length)];
            welcomeImg.src = randomImage.img;
            welcomeImg.alt = randomImage.location;
            welcomeTxt.innerHTML = randomTxt.title
            welcomeImg.style .opacity = .4;
            setTimeout(() => {
                welcomeImg.style.opacity = 1
            }, 500);
        }, 5000);

    }catch(error) {
        console.error("Error fetching the data", error);
    }
}

loadImages()