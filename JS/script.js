const IMAGES = document.querySelectorAll("img");
const SIZES = {
    showcase: "100vw", 
    reason: "(max-width: 799px) 100vw, 372px",
    feature: "(max-width: 799px) 100vw, 558px",
    story: "(max-width: 799px) 100vw, 670px",
};

function makeSrcset(imgsrc) {
    let markup = [];
    let width = 400;

    for (let i = 0; i<5; i++){
        markup[i] = imgsrc + "-" + width + ".jpg" + width + "w";
        width+=400;
    }

    return markup.join();
}

for (let i = 0; i<IMAGES.length; i++) {
    let imgsrc = IMAGES[i].getAttribute("src");
    imgsrc = imgsrc.slice(0,-8);
    let srcset = makeSrcset(imgsrc);
    console.log(srcset);

    let type = IMAGES[i].getAttribute("data-type");
    let sizes = SIZES[type];
    console.log(sizes);

}