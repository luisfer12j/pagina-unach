//Objeto que almacena los documentos y sus propiedades

const docs = {
    documentos : [{
        dir: "../sources/pdfs/electronica.pdf",
        periodo: '2s',
        anio: '2020',
        carrera: 'Arquitectura',
        tema:'Aqui va el tema del proyecto'
    },{
        dir: "../sources/pdfs/nombre_del_archivo",
        periodo: '1s',
        anio: '2020',
        carrera: 'Arquitectura',
        tema:'Aqui va el tema del proyecto'
    },{
        dir: "../sources/pdfs/nombre_del_archivo",
        periodo: '1s',
        anio: '2020',
        carrera: 'Arquitectura',
        tema:'Aqui va el tema del proyecto'
    },{
        dir: "../sources/pdfs/nombre_del_archivo",
        periodo: '1s',
        anio: '2020',
        carrera: 'Arquitectura',
        tema:'Aqui va el tema del proyecto'
    },{
        dir: "../sources/pdfs/nombre_del_archivo",
        periodo: '1s',
        anio: '2020',
        carrera: 'Arquitectura',
        tema:'Aqui va el tema del proyecto'
    },{
        dir: "../sources/pdfs/nombre_del_archivo",
        periodo: '1s',
        anio: '2020',
        carrera: 'Arquitectura',
        tema:'Aqui va el tema del proyecto'
    }]
}
//Contenedor en donde iran los resultados de las busquedas
const containerDocs = document.getElementById('container-docs')

//Botones del filtro anio
const todoAnio = document.getElementById('radioAnio0')
const anio1 = document.getElementById('radioAnio1')
const anio2 = document.getElementById('radioAnio2')
const anio3 = document.getElementById('radioAnio3')
const anio4 = document.getElementById('radioAnio4')
//Botones del filtro periodo
const todoPeriodo = document.getElementById('radioPeriodo0')
const periodo1 = document.getElementById('radioPeriodo1') 
const periodo2 = document.getElementById('radioPeriodo2') 
//Botones del filtro carrera
const todoCarrera = document.getElementById('radioCarrera0')
const carrera1 = document.getElementById('radioCarrera1') 
const carrera2 = document.getElementById('radioCarrera2') 
const carrera3 = document.getElementById('radioCarrera3') 
const carrera4 = document.getElementById('radioCarrera4') 
const carrera5 = document.getElementById('radioCarrera5') 
const carrera6 = document.getElementById('radioCarrera6') 
const carrera7 = document.getElementById('radioCarrera7') 


const btnBuscar = document.getElementById('buscar')
btnBuscar.addEventListener('click',()=>{
    const resultados = buscarDocumentos(verificarFiltros())
    renderDocumentos(resultados)
})

const verificarFiltros = ()=>{
    const res = {
        periodo:'',
        anio:'',
        carrera:''
    }
    if(todoCarrera.checked){res.carrera = (todoCarrera.labels[0].innerText)}
    if(carrera1.checked){res.carrera = (carrera1.labels[0].innerText)}
    if(carrera2.checked){res.carrera = (carrera2.labels[0].innerText)}
    if(carrera3.checked){res.carrera = (carrera3.labels[0].innerText)}
    if(carrera4.checked){res.carrera = (carrera4.labels[0].innerText)}
    if(carrera5.checked){res.carrera = (carrera5.labels[0].innerText)}
    if(carrera6.checked){res.carrera = (carrera6.labels[0].innerText)}
    if(carrera7.checked){res.carrera = (carrera7.labels[0].innerText)}
    //----------------------------------------------------------------
    if(todoPeriodo.checked){res.periodo = (todoPeriodo.labels[0].innerText)}
    if(periodo1.checked){res.periodo = (periodo1.labels[0].innerText)}
    if(periodo2.checked){res.periodo = (periodo2.labels[0].innerText)}
    //----------------------------------------------------------------
    if(todoAnio.checked){res.anio=todoAnio.labels[0].innerText}
    if(anio1.checked){res.anio=anio1.labels[0].innerText}
    if(anio2.checked){res.anio=anio2.labels[0].innerText}
    if(anio3.checked){res.anio=anio3.labels[0].innerText}
    if(anio4.checked){res.anio=anio4.labels[0].innerText}

    return(res)
}

const buscarDocumentos = (res)=>{
    if(res.carrera === 'Todas' && res.anio === 'Todo' && res.periodo === 'Todo'){
        return(docs.documentos)
    }else if(res.carrera !== 'Todas' && res.anio === 'Todo' && res.periodo === 'Todo'){
        return docs.documentos.filter((documento)=>{
            if (documento.carrera === res.carrera){
                return documento
            }
        })
    }else if(res.carrera === 'Todas' && res.anio !== 'Todo' && res.periodo === 'Todo'){
        return docs.documentos.filter((documento)=>{
            if (documento.anio === res.anio){
                return documento
            }
        })
    }else if(res.carrera === 'Todas' && res.anio === 'Todo' && res.periodo !== 'Todo'){
        return docs.documentos.filter((documento)=>{
            if (documento.periodo === res.periodo){
                return documento
            }
        })
    }else if(res.carrera !== 'Todas' && res.anio !== 'Todo' && res.periodo === 'Todo'){
        return docs.documentos.filter((documento)=>{
            if (documento.anio === res.anio && documento.carrera === res.carrera){
                return documento
            }
        })
    }else if(res.carrera !== 'Todas' && res.anio === 'Todo' && res.periodo !== 'Todo'){
        return docs.documentos.filter((documento)=>{
            if (documento.carrera === res.carrera && documento.periodo === res.periodo){
                return documento
            }
        })
    }else if(res.carrera === 'Todas' && res.anio !== 'Todo' && res.periodo !== 'Todo'){
        return docs.documentos.filter((documento)=>{
            if (documento.anio === res.anio && documento.periodo === res.periodo){
                return documento
            }
        })
    }else{
        const resultados = docs.documentos.filter((documento)=>{
            if (documento.anio === res.anio && documento.carrera === res.carrera && documento.periodo === res.periodo){
                return documento
            }
        })
        return resultados  
    }
}

const renderDocumentos = (array)=>{
    let lista = document.getElementById('lista')
    containerDocs.removeChild(lista)
    const ul = document.createElement('div')
    ul.classList.toggle('list-group')
    ul.setAttribute("id","lista");
   
    array.forEach((documento)=>{
        const a = document.createElement('a')
        a.classList.toggle('list-group-item')
        a.classList.toggle('list-group-item-action')
        a.innerText = `${documento.tema}`
        a.setAttribute('href',`${documento.dir}`)
        a.setAttribute('target','_blank')
        ul.append(a)
        containerDocs.append(ul)
    })
    if(array.length === 0){
        const p = document.createElement('p')
        p.innerText = 'No se encontraron resultados'
        ul.append(p)
        containerDocs.append(ul)
    }
}

renderDocumentos(buscarDocumentos(verificarFiltros()))


