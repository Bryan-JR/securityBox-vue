//Links de las API de MockAPI

cliente = "https://61e1dafc3050a10017682028.mockapi.io/cliente";
cuentaSecurityBox = "https://61e1dafc3050a10017682028.mockapi.io/cuentaSB";
cuentas = "https://61e1dafc3050a10017682028.mockapi.io/cuentas";
aplicaciones = "https://61e1dafc3050a10017682028.mockapi.io/aplicaciones";


//Operaciones CRUD para la entidad cuentaDB (cuentaSecurityBox)

//GET
getCuentasSB = async (email) => {
    try {
        const respuesta = await fetch(this.cuentaSecurityBox+"?correo="+email);
        if(respuesta.status == 200){
            let json = await respuesta.json();
            return json;
        }
    } catch (error) {
        location.href = "../index.html";
        alert("Error: sin conexión \n"+error);
    }
}

//GET
getCuentasConId = async (id) => {
    try {
        const respuesta = await fetch(this.cuentaSecurityBox+"/"+id);
        if(respuesta.status == 200){
            let json = await respuesta.json();
            return json;
        }
    } catch (error) {
        location.href = "../index.html";
        alert("Error: sin conexión \n"+error);
    }
}

//DELETE
let eliminarCuentaSB = async (id)=>{ 
    try { 
        const respuesta = await fetch(this.cuentaSecurityBox+'/'+id,
            { 
            method: "DELETE", 
            headers: {"Content-type": "application/json; charset=UTF-8"} 
        });
        } catch (error) { 
            console.log("ERROR: "+error) 
        } 
}

//PUT
let editarCuentaSB = async (id, cuenta) => {
    try {
        const respuesta = await fetch(this.cuentaSecurityBox+"/"+id, { 
            method: "PUT",
            body: JSON.stringify(cuenta), 
            headers: {"Content-type": "application/json; charset=UTF-8"} 
        }); 
        const data = await respuesta.json(); 
        if (respuesta.status == 201) {
            return data; 
        } 
        } catch (error) { 
            alert("ERROR: "+error);
            location.href = "../index.html";
        }
}

// IMPLEMENTADO EN EL SCRIPT regiScript.js  '../js/regiScript.js'

//POST 
// guardarCuentaSB = async (cuentaSB) => {
//     try { 
//         const respuesta = await fetch(this.cuentaSecurityBox, { 
//             method: "POST", body: JSON.stringify(cuentaSB), 
//             headers: {"Content-type": "application/json; charset=UTF-8"} 
//         }); 
//         const data = await respuesta.json(); 
//         if (respuesta.status == 201) { 
//             console.log("Registro creado.") 
//             return data; } 
//         } catch (error) { 
//             console.log("ERROR: "+error)
//         }
// }

// getUsuarioSB = async (user) => {
//     try {
//         const respuesta = await fetch(this.cuentaSecurityBox+"?usuario="+user);
//         if(respuesta.status == 200){
//             let json = await respuesta.json();
//             return json;
//         }
//     } catch (error) {
//         alert(error);
//     }
// }



//Operaciones CRUD para la entidad cliente (cliente)
//GET
getCliente = async (id) => {
    try {
        const respuesta = await fetch(this.cliente+"/"+id);
        if(respuesta.status == 200){
            let json = await respuesta.json();
            return json;
        }
    } catch (error) {
        location.href = "../index.html";
        alert("Error: sin conexión \n"+error);
    }
}

//DELETE
let eliminarCliente = async (id)=>{ 
    try { 
        const respuesta = await fetch(this.cliente+'/'+id,
            { 
            method: "DELETE", 
            headers: {"Content-type": "application/json; charset=UTF-8"} 
        });
        
        } catch (error) { 
            console.log("ERROR: "+error) 
        } 
}

//PUT
let editarCliente = async (id, cliente) => {
    try {
        const respuesta = await fetch(this.cliente+"/"+id, { 
            method: "PUT",
            body: JSON.stringify(cliente), 
            headers: {"Content-type": "application/json; charset=UTF-8"} 
        }); 
        const data = await respuesta.json(); 
        if (respuesta.status == 201) {
            return data; 
        } 
        } catch (error) { 
            alert("ERROR: "+error);
            location.href = "../index.html";
        }
}

// IMPLEMENTADO EN EL SCRIPT regiScript.js  '../js/regiScript.js'

// guardarCliente = async (clienteSB) => {
//     try { 
//         const respuesta = await fetch(this.cliente, { 
//             method: "POST", body: JSON.stringify(clienteSB), 
//             headers: {"Content-type": "application/json; charset=UTF-8"} 
//         }); 
//         const data = await respuesta.json(); 
//         if (respuesta.status == 201) { 
//             console.log("Registro creado.") 
//             return data; } 
//         } catch (error) { 
//             console.log("ERROR: "+error)
//         }
// }

//Operaciones CRUD para la entidad cuentas

//GET
getCuentas = async (id) => {
    try {
        const respuesta = await fetch(this.cuentas+"?idSB="+id);
        if(respuesta.status == 200){
            let json = await respuesta.json();
            return json;
        }
    } catch (error) {
        location.href = "../index.html";
        alert(error);
    }
}

//GET
const getCuentaCambio = async (id) => {
    try {
        const respuesta = await fetch(this.cuentas+"/"+id);

        if(respuesta.status == 200){
            let json = await respuesta.json();
            return json;
        }
    } catch (error) {
        location.href = "../index.html";
        alert(error);
    }
}

//POST
const guardarCuenta = async (cuenta) => {
    try {
        const respuesta = await fetch(this.cuentas, { 
            method: "POST", body: JSON.stringify(cuenta), 
            headers: {"Content-type": "application/json; charset=UTF-8"} 
        }); 
        const data = await respuesta.json(); 
        if (respuesta.status == 201) {
            return data; 
        } 
        } catch (error) { 
            console.log("ERROR: "+error)
            location.href = "../index.html";
        }
}

//PUT
const editarCuenta = async (id, cuenta) => {
    try {
        const respuesta = await fetch(this.cuentas+"/"+id, { 
            method: "PUT",
            body: JSON.stringify(cuenta), 
            headers: {"Content-type": "application/json; charset=UTF-8"} 
        }); 
        const data = await respuesta.json(); 
        if (respuesta.status == 201) {
            return data; 
        } 
        } catch (error) { 
            alert("ERROR: "+error);
            location.href = "../index.html";
        }
}

//DELETE
const eliminarCuenta = async (id)=>{ 
    try { 
        const respuesta = await fetch(cuentas+'/'+id,
            { 
            method: "DELETE", 
            headers: {"Content-type": "application/json; charset=UTF-8"} 
        });
        cuentasApi = [];
        Datos();
        mensaje('Cuenta eliminada.');
        } catch (error) { 
            console.log("ERROR: "+error) 
        } 
}

//Operaciones CRUD para la entidad aplicaciones

//GET
async function getAplicacion(){
    try {
        const respuesta = await fetch(this.aplicaciones);
        if(respuesta.status == 200){
            let json = await respuesta.json();
            return json;
        }
    } catch (error) {
        location.href = "../index.html";
        alert(error);
    }
}

//POST
const guardarApp = async function(app){
    try {
        const respuesta = await fetch(aplicaciones, {
            method: "POST",
            body: JSON.stringify(app),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        const data = await respuesta.json();
        if (respuesta.status == 201) {
            cargarApp();
            console.log("Registro creado!")
        return data;
        }
    } catch (error) {
    console.log("ERROR: "+error)
    }
}

//PUT
const editarApp = async (id, app) => {
    try {
        const respuesta = await fetch(this.aplicaciones+"/"+id, { 
            method: "PUT",
            body: JSON.stringify(app), 
            headers: {"Content-type": "application/json; charset=UTF-8"} 
        }); 
        const data = await respuesta.json(); 
        if (respuesta.status == 201) {
            return data; 
        } 
        } catch (error) { 
            alert("ERROR: "+error);
            location.href = "../index.html";
        }
}

//DELETE
const eliminarApp = async (id)=>{ 
    try { 
        const respuesta = await fetch(this.aplicaciones+'/'+id,
            { 
            method: "DELETE", 
            headers: {"Content-type": "application/json; charset=UTF-8"} 
        }).then(r => {
            cargarApp();
            let item = document.getElementById("div-"+id);
            item.parentNode.removeChild(item);
            mensaje("Sitio eliminado.")
        });
        
        } catch (error) { 
            console.log("ERROR: "+error) 
        } 
}

 //--------------------------------------------------------------------------------


//Implementación de metodos para manejo del frontend
let iniciar = document.getElementById("iniciarSesion");
let store = localStorage;
let entradaCorreo = "";
let entradaContraseña = "";
let msg = document.getElementById("msg");
let codigoCuenta = 0;
let user = "";

//Permite el inicio de sesión a la página
const getIniciar = () => {
    entradaCorreo = document.getElementById("correo").value.replace("@","-");
    entradaContraseña = document.getElementById("contraseña").value;
    getCuentasSB(entradaCorreo).then((dato)=>{
        if(dato.length>0){
            dato.forEach(element => {
                codigoCuenta = Number(element.idSB);
                correoCuenta = String(element.correo)
                user = String(element.usuario);
                let contraseña = String(element.contrasena);
                if(entradaCorreo.toLowerCase()===correoCuenta.toLowerCase() && entradaContraseña===contraseña){
                    store.setItem("idSB", codigoCuenta);
                    store.setItem("user", user);
                    location.href =  "html/securityBox.html";
                } else {
                    msg.classList.remove("down");
                }
            });
        } else {
            msg.innerHTML = "La cuenta no está registrada <a href='html/registro.html'>registrate aquí</a>";
            msg.classList.remove("down");
        }
    });
};

const TablaContenedor = document.getElementById("bodyTabla");
codigoCuenta = Number(store.getItem("idSB"));
const  userSB = store.getItem("user");
let sitiosGuardados = Array();
let cuentasApi = Array();
let item;

let inputSitio = document.getElementById("sitio");
let inputUser = document.getElementById("user");
let inputPass = document.getElementById("pass");
let inputSitioCambio = document.getElementById("sitioCambiar");
let inputUserCambio = document.getElementById("userCambiar");
let inputPassCambio = document.getElementById("passCambiar");
let ventanaCambio = document.getElementById("ventanaCambiar");
let msgEstado = document.getElementById("msgEstado");
let inputSitioBuscar = document.getElementById("busca");
let idParaCambio = 0;

//Carga los sitios guardados en la Api y los guarda en un vector
function cargarApp(){
    sitiosGuardados = [];
    getAplicacion().then(dato=>{
        let texto = "";
        dato.forEach((r, i)=>{
            let datos = {
                nombre: r.nombre,
                url: r.url,
                idApp: r.idApp
            }
            sitiosGuardados.push(datos);
            texto += `<option value="${i+1}" style="font-weight:600;">${r.nombre}</option>`;
        });
        let textAux = `<option value="-1" style="font-weight:600;">Selecciona un sitio...</option>` + texto;
        textAux += `<option value="0" style="font-weight:600;">Mostrar todos</option>`; 
        inputSitioBuscar.innerHTML = textAux;
        texto += '<option value="nuevo" style="font-weight:600; color: #ba0606; background-color:#9b9fa198;">Otro...</option>'
        inputSitio.innerHTML = texto;
        inputSitioCambio.innerHTML = texto;
    });
}


//Carga las cuentas que tiene la cuenta registrada y los muestra en la tabla
const Datos = () => {
    cuentasApi = [];
    cargarApp();
    document.getElementById("ident").innerHTML = '<i class="bi bi-person-circle">'+userSB;
    console.log("cargando los datos...");
    console.log("Si no se muestra, refrescar la página.");
    getCuentas(codigoCuenta).then(respuesta => {
        TablaContenedor.innerHTML = "";
            respuesta.forEach(element => {
                let id = element.idSB;
                let i = Number(element.idApp);
                let idC = Number(element.idCuenta);
                let correo = String(element.Correo);
                let  contraseña = String(element.Contrasena);
                getAplicacion(i).then(result =>{
                    result.forEach(r=>{
                        let j = Number(r.idApp);
                        if(id===codigoCuenta && i===j){
                           
                        let row = document.createElement("tr");
                        let col1=document.createElement("td");
                        col1.innerHTML = `<a href="${r.url}" target="_blank">${r.nombre}</a>`; 
                        let col2=document.createElement("td"); 
                        col2.innerHTML = correo; 
                        let col3=document.createElement("td"); 
                        col3.innerHTML = contraseña;
                        let col4=document.createElement("td");
                        col4.id="op";
                        col4.innerHTML = `
                        <div id="opciones" class="">
                            <i class="bi bi-gear-fill" onclick="getAbrirActualizar(${idC});"></i>
                            <i class="bi bi-trash-fill" onclick="eliminarCuenta(${idC});"></i>
                        </div>`;
                        row.appendChild(col1);
                        row.appendChild(col2);
                        row.appendChild(col3);
                        row.appendChild(col4);
                        row.id="row-"+idC;
                        TablaContenedor.appendChild(row);
                        cuentasApi.push({
                            id: idC,
                            app: i,
                            sitio: r.nombre,
                            url: r.url,
                            correo: correo,
                            contraseña: contraseña
                        });
                        }
                    });
                });
            });       
    });
}

seccion = document.getElementById("OtrosSitio");
//Verifica la opcion de agregar otro sitio a la Api aplicaciones
let setNuevoApp = () => {
 if(inputSitio.value ==="nuevo"){
     console.log("entró");
     seccion.classList.remove("down");
     inputSitio.value = 1;
     
 }
 if(inputSitioCambio.value ==="nuevo"){
    seccion.classList.remove("down"); 
    inputSitioCambio.value = 1;
 }
}

let inputNameSitio = document.getElementById("NombreSitio");
let inputurl = document.getElementById("nuevoUrl");
//Guarda la app que se registró en los campos abiertos
let getGuardarApp = () => {
    App = {
        nombre: inputNameSitio.value,
        url: inputurl.value,
    }
    guardarApp(App).then(response=>{
        console.log(response);
        return response;
    }).then(dato=>{
        seccion.classList.add("down");
        console.log("Registro con exito.");
    });
    
};


let listaApp = document.getElementById("ListaApp");
let Apps = document.getElementById("Apps");

let cierraLista = () =>{
    ventanaCambio.classList.add("down");
    ventanaUser.classList.add("down");
    seccion.classList.add("down");
    listaApp.classList.add("down");
}

//Modifica los datos de el sitio seleccionado en la lista
let modificarApps = (id) =>{
    let input1 = document.getElementById("nombre-"+id);
    let input2 = document.getElementById("url-"+id);
    let app = {
        nombre: input1.value,
        url: input2.value,
        idApp: id
    }
    editarApp(id, app).then(response =>{
        return response
    }).then(dato=>{
        cargarApp();
        mensaje("Sitio actualizado.");
    });
}
let listarApp = () => {
    Apps.innerHTML = "";
    let txt = '<a href="#" class="salirInicio" id="salirLista" onclick="cierraLista();"><i class="bi bi-x-lg"></i></a>';
    listaApp.classList.remove("down");
    for (let dato of sitiosGuardados) {
        txt += `<div id="div-${dato.idApp}">
                    <input type="text" placeholder="Nombre del Sitio"  id="nombre-${dato.idApp}" class="inputs" name="NombreSitio" value="${dato.nombre}">
                    <input type="text" placeholder="Url del Sitio" id="url-${dato.idApp}" class="inputs" name="user" value="${dato.url}">
                    <div id="opciones" class="">
                        <i class="bi bi-gear-fill" onclick="modificarApps(${dato.idApp});"></i>
                        <i class="bi bi-trash-fill" onclick="eliminarApp(${dato.idApp});"></i>
                    </div>
                </div>`;
    }
    Apps.innerHTML = txt;
}


mensaje = (msg) =>{
    msgEstado.classList.remove("down");
    msgEstado.style = "color: #50be06;";
    msgEstado.innerHTML = msg;

    setTimeout(() => {
        msgEstado.classList.add("down");
    }, 3000);
}

let limpiarCampos = () =>{
    inputUser.value = "";
    inputPass.value = "";
    inputSitio.value = 1;
}

//Guarda una nueva cuenta que se quiera agregar y la muestra en la tabla
let setGuardarCuenta = () =>{
    nuevaCuenta = {
        Correo: inputUser.value,
        Contrasena: inputPass.value,
        idApp: Number(inputSitio.value),
        idSB: codigoCuenta
    }
    cuentasApi.push(nuevaCuenta);
    guardarCuenta(nuevaCuenta).then(response=>{
    limpiarCampos();
    return response;
    }).then(data => {
        let nombreApp = "";
        let urlApp = "";
        let j = 0;
        for (let r of sitiosGuardados) {
                j = Number(r.idApp);
                if(data.idApp === j){
                nombreApp = r.nombre;
                urlApp = r.url;
                }
        }
                let row = document.createElement("tr");
                let col1=document.createElement("td"); 
                col1.innerHTML = `<a href="${urlApp}" target="_blank">${nombreApp}</a>`; 
                let col2=document.createElement("td"); 
                col2.innerHTML = data.Correo; 
                let col3=document.createElement("td"); 
                col3.innerHTML = data.Contrasena; 
                let col4=document.createElement("td");
                col4.id="op";
                col4.innerHTML = `
                <div id="opciones" class="">
                    <i class="bi bi-gear-fill" onclick="getAbrirActualizar(${data.idCuenta});"></i>
                    <i class="bi bi-trash-fill" onclick="eliminarCuenta(${data.idCuenta});"></i>
                </div>`;

                row.appendChild(col1);
                row.appendChild(col2);
                row.appendChild(col3);
                row.appendChild(col4);
                row.id="row-"+data.idCuenta;
                TablaContenedor.appendChild(row);
                mensaje("Cuenta agregada.");
    });
}


getAbrirActualizar = (id) => {
    idParaCambio = id;
    console.log(idParaCambio);
    getCuentaCambio(idParaCambio).then(data=>{
            console.log(data);
            ventanaCambio.classList.remove("down");
            inputSitioCambio.value = data.idApp;
            inputUserCambio.value = data.Correo;
            inputPassCambio.value = data.Contrasena;
    });
}

//Edita los datos registrados en una cuenta
let actualizarCuenta = () => {
    datosNuevos = {
        Correo: inputUserCambio.value,
        Contrasena: inputPassCambio.value,
        idApp: Number(inputSitioCambio.value),
        idSB: codigoCuenta
    }

    editarCuenta(idParaCambio, datosNuevos).then(()=>{
        Datos();
        ventanaCambio.classList.add("down");
        mensaje("Cuenta actualizada correctamente.");
    });
}




let buscar = () => {
    idSitio = Number(inputSitioBuscar.value);
    if(idSitio!=0 && idSitio!=-1){
        TablaContenedor.innerHTML = "";
        for (let dato of cuentasApi) {
            if(dato.app===idSitio){
                let row = document.createElement("tr");
                let col1=document.createElement("td");
                col1.innerHTML = `<a href="${dato.url}" target="_blank">${dato.sitio}</a>`; 
                let col2=document.createElement("td"); 
                col2.innerHTML = dato.correo; 
                let col3=document.createElement("td"); 
                col3.innerHTML = dato.contraseña;
                let col4=document.createElement("td");
                col4.id="op";
                col4.innerHTML = `
                <div id="opciones" class="">
                <i class="bi bi-gear-fill" onclick="getAbrirActualizar(${dato.id});"></i>
                <i class="bi bi-trash-fill" onclick="eliminarCuenta(${dato.id});"></i>
                </div>`;
                row.appendChild(col1);
                row.appendChild(col2);
                row.appendChild(col3);
                row.appendChild(col4);
                row.id="row-"+dato.id;
                TablaContenedor.appendChild(row);
            }
        }
    } else if(idSitio===0) {
        Datos();
    }
    
}

//Captura de inputs para cambiar datos de una cuenta

let ventanaUser = document.getElementById("ventanaUser");

let nombreCambiar =  document.getElementById("nombreCambio");
let apellidoCambiar =  document.getElementById("apellidoCambio");
let tipoDocumentoCambiar =  document.getElementById("documentosCambio");
let documentoCambiar =  document.getElementById("nDocumentoCambio");
let fechaNaCambiar =  document.getElementById("fechaCambio");
let generoCambiar =  document.getElementById("generoCambio");
let correoCambiar =  document.getElementById("correoUserCambio");
let contraseñaCambiar =  document.getElementById("contraseñaUserCambio");
let usuarioCambiar =  document.getElementById("usuarioUserCambio");
let btnCambiar =  document.getElementById("aceptarCambioCuenta");
let btnEliminar =  document.getElementById("eliminarCuenta");

//Muestra toda la información de una cuenta registrada y con sesión iniciada
let mostrarVentanaUser = () =>{
    getCuentasConId(codigoCuenta).then(dato=>{
                correoCambiar.value = dato.correo.replace("-","@");
                contraseñaCambiar.value = dato.contrasena;
                usuarioCambiar.value = dato.usuario;
            getCliente(codigoCuenta).then(element=>{
                    nombreCambiar.value = element.nombre;
                    apellidoCambiar.value = element.apellido;
                    tipoDocumentoCambiar.value = element.tipoDocumento;
                    documentoCambiar.value = Number(element.nDocumento);
                    fechaNaCambiar.value = element.fechaNa;
                    generoCambiar.value = element.genero;
            });
        ventanaUser.classList.remove("down");
    });
    
}

//guarda los cambios hechos por el usuario en los campos respectivos
let getCambiosCuentaSB = () => {
    let datosCuenta = {
        usuario: usuarioCambiar.value,
        correo: correoCambiar.value.replace("@", "-"),
        contrasena: contraseñaCambiar.value,
        idSB: codigoCuenta
    }

    let datosCliente = {
        idSB: codigoCuenta,
        nombre: nombreCambiar.value,
        apellido: apellidoCambiar.value,
        tipoDocumento: tipoDocumentoCambiar.value,
        nDocumento: Number(documentoCambiar.value),
        fechaNa: fechaNaCambiar.value,
        genero: generoCambiar.value,
        idCliente: codigoCuenta
    }
    editarCliente(codigoCuenta, datosCliente);
    editarCuentaSB(codigoCuenta, datosCuenta);
    mensaje("Datos de usuario actualizados.");
    store.removeItem("user");
    store.setItem("user", usuarioCambiar.value);
    userSB = store.getItem("user");
    ventanaUser.classList.add("down");
    Datos();
}

let getEliminarCuentaSB=()=>{
    eliminarCuentaSB(codigoCuenta);
    eliminarCliente(codigoCuenta);
    localStorage.clear();
    setTimeout(() => {
        location.href = "../index.html";
    }, 3000);
}