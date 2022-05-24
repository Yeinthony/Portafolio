const d = document;

export default function WratingMachine(text = '', tiempo=200, idMaquinaEscribir=''){
    const $maquina = d.getElementById(idMaquinaEscribir)
    let arrayCaracteres = text.split('');
    $maquina.innerHTML = '';
    let cont = 0;
    let escribir = setInterval(function(){
        $maquina.innerHTML += arrayCaracteres[cont]; 
        cont++;
        if (cont === arrayCaracteres.length) {
            cont = 0;
            $maquina.innerHTML = '';
        }
    }, tiempo);
}

