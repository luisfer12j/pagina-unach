const btnInformacion = document.getElementById('btnInformacion')
const btnObjetivos = document.getElementById('btnObjetivos')
const informacion = document.getElementById('informacion')
const objetivos = document.getElementById('objetivos')

btnInformacion.addEventListener('click',()=>{
    informacion.classList.toggle('oculto')
})

btnObjetivos.addEventListener('click',()=>{
    objetivos.classList.toggle('oculto')
})