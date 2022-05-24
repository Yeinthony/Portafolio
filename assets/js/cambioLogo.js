export function cambiaImg (img) {
    const $img = document.querySelector(img);
    $img.setAttribute("src", "./assets/img/lobo.png");
}

export function devuelveImg (img){
    const $img = document.querySelector(img);
    $img.setAttribute("src", "./assets/img/lobo2.png");
}

// $evento.addEventListener("mouseover", cambiaImg);
// $evento.addEventListener("mouseout", devuelveImg);