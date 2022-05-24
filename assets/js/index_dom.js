import WratingMachine from "./maquinaEscribir.js";
import { cambiaImg, devuelveImg } from "./cambioLogo.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    WratingMachine("Yeinthony!  ", 750, "maquina-escribir");
});

d.addEventListener("mouseover", (e)=>{
    if(e.target.matches("#logoEv *")){
        cambiaImg(".img")
    }
});

d.addEventListener("mouseout", (e)=>{
    if(e.target.matches("#logoEv *")){
        devuelveImg(".img")
    }
});