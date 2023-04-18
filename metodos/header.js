
//Barra busqueda

let barra = document.getElementById('input-srch');

barra.addEventListener('click', () => {
    if (barra.classList.contains('itxt-oculto')) {
        barra.classList.remove('itxt-oculto');
        barra.classList.add('itxt-act');
    }
});

//lateral

let btnLateral = document.getElementById('btnLateral');
let lateral = document.getElementById('links');

btnLateral.addEventListener('click', () => {
    if (lateral.classList.contains('lnk-oculto')) {
        btnLateral.classList.add('fa-rotate-90');
        lateral.classList.remove('lnk-oculto');
        lateral.classList.add('lnk-activo');
    } else if (lateral.classList.contains('lnk-activo')) {
        btnLateral.classList.remove('fa-rotate-90');
        lateral.classList.remove('lnk-activo');
        lateral.classList.add('lnk-oculto');
    }
});


//Footer
let notas = document.querySelectorAll('.nota');
let acciones = document.getElementById('acciones');
let pie = document.getElementById('pie');
let doc = document.body;

for (let i = 0; i < notas.length; i++) {
    doc.addEventListener('click', function(evento){
        if(!evento.target.classList.contains('nt')){
            for (let i = 0; i < notas.length; i++) {
                notas[i].classList.remove('seleccionada');
                pie.classList.remove('cont-activo')
                pie.classList.add('cont-inactivo');
                acciones.classList.add('acc-oculto');
            }
        }else{
            notas[i].onclick = function () {
                for (let j = 0; j < notas.length; j++) {
                    notas[j].classList.remove('seleccionada');
                }
                this.classList.add('seleccionada');
                pie.classList.remove('cont-inactivo');
                pie.classList.add('cont-activo');

                acciones.classList.remove('acc-oculto');
            }
        }
        
    });

    
}

