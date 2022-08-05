//Objeto que almacena los documentos y sus propiedades

const docs = {
    documentos: [{
        dir: "../sources/pdfs/agroindustrial01.pdf",
        periodo: '1s',
        anio: '2021',
        carrera: 'Ingenieria Agroindustrial',
        tema: 'Desarrollo de la capacidad de jóvenes indigenas emprendedores, especialmente mujeres, para dar valor agregado a las materias primas agropecuarias, en las comunidades de las provincias de Chimborazo y Bolivar'
    }, {
        dir: "../sources/pdfs/agroindustrial02.pdf",
        periodo: '1s',
        anio: '2019',
        carrera: 'Ingenieria Agroindustrial',
        tema: 'Asesoramiento y Consultoria Gratuita en Materia de Seguridad, Tecnología, Industria y Construcción a Personas en condiciones vulnerables, pequeños productores y artesanos de la zona 3'
    }, {
        dir: "../sources/pdfs/agroindustrial03.pdf",
        periodo: '1s',
        anio: '2022',
        carrera: 'Ingenieria Agroindustrial',
        tema: 'Fortalecimiento de las capacidades y buenas practicas de granjas lecheras en zonas rurales y comunidades del Canton Guaranda, Provincia de Bolivar'
    }, {
        dir: "../sources/pdfs/agroindustrial04.pdf",
        periodo: '1s',
        anio: '2021',
        carrera: 'Ingenieria Agroindustrial',
        tema: 'Fortalecimiento técnico y productivo a los productores minorista de lácteos de la provincia de Chimborazo'
    }, {
        dir: "../sources/pdfs/ambiental01.pdf",
        periodo: '1s',
        anio: '2021',
        carrera: 'Ingenieria Ambiental',
        tema: 'Asesoria en la planificación y diseño urbano arquitectónico de los espacios públicos, patrimoniales, de servicios y recreativos del canton Colta de la Provincia de chimborazo'
    }, {
        dir: "../sources/pdfs/arquitectura01.pdf",
        periodo: '1s',
        anio: '2021',
        carrera: 'Arquitectura',
        tema: 'Asesoria en la planificación y diseño urbano arquitectónico de los espacios públicos, patrimoniales, de servicios y recreativos del canton Colta de la Provincia de chimborazo'
    }, {
        dir: "../sources/pdfs/arquitectura02.pdf",
        periodo: '1s',
        anio: '2019',
        carrera: 'Arquitectura',
        tema: 'Asesoramiento y Consultoria Gratuita en Materia de Seguridad, Tecnología, Industria y Construcción a Personas en condiciones vulnerables, pequeños productores y artesanos de la zona 3'
    }, {
        dir: "../sources/pdfs/civil01.pdf",
        periodo: '1s',
        anio: '2021',
        carrera: 'Ingenieria Civil',
        tema: 'Apoyo técnico en la gestión de conservacion de carreteras rurales de los cantones de Colta, Guano y Penipe en la provincia de Chimborazo'
    }, {
        dir: "../sources/pdfs/civil02.pdf",
        periodo: '1s',
        anio: '2019',
        carrera: 'Ingenieria Civil',
        tema: 'Asesoramiento y Consultoria Gratuita en Materia de Seguridad, Tecnología, Industria y Construcción a Personas en condiciones vulnerables, pequeños productores y artesanos de la zona 3'
    }, {
        dir: "../sources/pdfs/civil03.pdf",
        periodo: '2s',
        anio: '2019',
        carrera: 'Ingenieria Civil',
        tema: 'Mejoramiento de viviendas en las parroquias rurales de los cantones Chambo, Guano y Penipe de la provincia de Chimborazo.'
    }, {
        dir: "../sources/pdfs/electronica01.pdf",
        periodo: '1s',
        anio: '2021',
        carrera: 'Ingenieria Electronica y Telecomunicaciones',
        tema: 'Diseño e implementacion de un sistema autonomo para el monitorio de variable ambientales basado en redes de sensores que permita cuantificar el recurso agua, de la provincia de Chimborazo en colaboracion con la Direccion de Riego del gad Provincia'
    }, {
        dir: "../sources/pdfs/industrial1.pdf",
        periodo: '1s',
        anio: '2021',
        carrera: 'Ingenieria industrial',
        tema: 'Diseño e implementacion de un sistema autonomo para el monitorio de variable ambientales basado en redes de sensores que permita cuantificar el recurso agua, de la provincia de Chimborazo en colaboracion con la Direccion de Riego del gad Provincial'
    }, {
        dir: "../sources/pdfs/industrial2.pdf",
        periodo: '1s',
        anio: '2021',
        carrera: 'Ingenieria industrial',
        tema: 'Acesoramiento de un sistema de Gestion en seguridad y salud ocupacional que la logra la disminucion y/o eliminacion de inseguridades, accidentes, enfermedades ocupacionales y factores de riesgos ambientales dirigido al personal administrativo y a grupos vulnerables tales como productores y comerciantes en la limpiesa publica de productos Agricolas San Pedro de Riobamba.'
    }, {
        dir: "../sources/pdfs/industrial3.pdf",
        periodo: '1s',
        anio: '2021',
        carrera: 'Ingenieria industrial',
        tema: 'Diseño de un sistema de gestiòn de mantenimiento para los equipos e infrestructura del Gobierno Autonomo Desentralizado Municipal del Canton Guamote'
    }, {
        dir: "../sources/pdfs/tics01.pdf",
        periodo: '1s',
        anio: '2021',
        carrera: 'Ingenieria en TICS',
        tema: 'Diseño de un sistema de gestiòn de mantenimiento para los equipos e infrestructura del Gobierno Autonomo Desentralizado Municipal del Canton Guamote'
    }, {
        dir: "../sources/pdfs/tics02.pdf",
        periodo: '1s',
        anio: '2021',
        carrera: 'Ingenieria en TICS',
        tema: 'Diseño de un sistema de gestiòn de mantenimiento para los equipos e infrestructura del Gobierno Autonomo Desentralizado Municipal del Canton Guamote'
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
btnBuscar.addEventListener('click', () => {
    const resultados = buscarDocumentos(verificarFiltros())
    renderDocumentos(resultados)
})

const verificarFiltros = () => {
    const res = {
        periodo: '',
        anio: '',
        carrera: ''
    }
    if (todoCarrera.checked) { res.carrera = (todoCarrera.labels[0].innerText) }
    if (carrera1.checked) { res.carrera = (carrera1.labels[0].innerText) }
    if (carrera2.checked) { res.carrera = (carrera2.labels[0].innerText) }
    if (carrera3.checked) { res.carrera = (carrera3.labels[0].innerText) }
    if (carrera4.checked) { res.carrera = (carrera4.labels[0].innerText) }
    if (carrera5.checked) { res.carrera = (carrera5.labels[0].innerText) }
    if (carrera6.checked) { res.carrera = (carrera6.labels[0].innerText) }
    if (carrera7.checked) { res.carrera = (carrera7.labels[0].innerText) }
    //----------------------------------------------------------------
    if (todoPeriodo.checked) { res.periodo = (todoPeriodo.labels[0].innerText) }
    if (periodo1.checked) { res.periodo = (periodo1.labels[0].innerText) }
    if (periodo2.checked) { res.periodo = (periodo2.labels[0].innerText) }
    //----------------------------------------------------------------
    if (todoAnio.checked) { res.anio = todoAnio.labels[0].innerText }
    if (anio1.checked) { res.anio = anio1.labels[0].innerText }
    if (anio2.checked) { res.anio = anio2.labels[0].innerText }
    if (anio3.checked) { res.anio = anio3.labels[0].innerText }
    if (anio4.checked) { res.anio = anio4.labels[0].innerText }

    return (res)
}

const buscarDocumentos = (res) => {
    if (res.carrera === 'Todas' && res.anio === 'Todo' && res.periodo === 'Todo') {
        return (docs.documentos)
    } else if (res.carrera !== 'Todas' && res.anio === 'Todo' && res.periodo === 'Todo') {
        return docs.documentos.filter((documento) => {
            if (documento.carrera === res.carrera) {
                return documento
            }
        })
    } else if (res.carrera === 'Todas' && res.anio !== 'Todo' && res.periodo === 'Todo') {
        return docs.documentos.filter((documento) => {
            if (documento.anio === res.anio) {
                return documento
            }
        })
    } else if (res.carrera === 'Todas' && res.anio === 'Todo' && res.periodo !== 'Todo') {
        return docs.documentos.filter((documento) => {
            if (documento.periodo === res.periodo) {
                return documento
            }
        })
    } else if (res.carrera !== 'Todas' && res.anio !== 'Todo' && res.periodo === 'Todo') {
        return docs.documentos.filter((documento) => {
            if (documento.anio === res.anio && documento.carrera === res.carrera) {
                return documento
            }
        })
    } else if (res.carrera !== 'Todas' && res.anio === 'Todo' && res.periodo !== 'Todo') {
        return docs.documentos.filter((documento) => {
            if (documento.carrera === res.carrera && documento.periodo === res.periodo) {
                return documento
            }
        })
    } else if (res.carrera === 'Todas' && res.anio !== 'Todo' && res.periodo !== 'Todo') {
        return docs.documentos.filter((documento) => {
            if (documento.anio === res.anio && documento.periodo === res.periodo) {
                return documento
            }
        })
    } else {
        const resultados = docs.documentos.filter((documento) => {
            if (documento.anio === res.anio && documento.carrera === res.carrera && documento.periodo === res.periodo) {
                return documento
            }
        })
        return resultados
    }
}

const renderDocumentos = (array) => {
    let lista = document.getElementById('lista')
    containerDocs.removeChild(lista)
    const ul = document.createElement('div')
    ul.classList.toggle('list-group')
    ul.setAttribute("id", "lista");

    array.forEach((documento) => {
        const a = document.createElement('a')
        a.classList.toggle('list-group-item')
        a.classList.toggle('list-group-item-action')
        a.classList.toggle('p-4')
        a.innerText = `${documento.tema}`
        a.setAttribute('href', `${documento.dir}`)
        a.setAttribute('target', '_blank')
        ul.append(a)
        containerDocs.append(ul)
    })
    if (array.length === 0) {
        const p = document.createElement('p')
        p.innerText = 'No se encontraron resultados'
        ul.append(p)
        containerDocs.append(ul)
    }
}

renderDocumentos(buscarDocumentos(verificarFiltros()))


