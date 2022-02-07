cliente = "https://61e1dafc3050a10017682028.mockapi.io/cliente";
cuentaSecurityBox = "https://61e1dafc3050a10017682028.mockapi.io/cuentaSB";

//CRUD para realizar un registro
guardarCuentaSB = async (cuentaSB) => {
    try { 
        const respuesta = await fetch(this.cuentaSecurityBox, { 
            method: "POST", body: JSON.stringify(cuentaSB), 
            headers: {"Content-type": "application/json; charset=UTF-8"} 
        }); 
        const data = await respuesta.json(); 
        if (respuesta.status == 201) { 
            console.log("Registro creado.") 
            return data; } 
        } catch (error) { 
            console.log("ERROR: "+error)
        }
}

guardarCliente = async (clienteSB) => {
    try { 
        const respuesta = await fetch(this.cliente, { 
            method: "POST", body: JSON.stringify(clienteSB), 
            headers: {"Content-type": "application/json; charset=UTF-8"} 
        }); 
        const data = await respuesta.json(); 
        if (respuesta.status == 201) { 
            console.log("Registro creado.") 
            return data; } 
        } catch (error) { 
            console.log("ERROR: "+error)
        }
}

getCuentasSB = async (correo) => {
    try {
        const respuesta = await fetch(this.cuentaSecurityBox+"?correo="+correo);

        if(respuesta.status == 200){
            let json = await respuesta.json();
            return json;
        }
    } catch (error) {
        alert(error);
    }
}

getUsuarioSB = async (user) => {
    try {
        const respuesta = await fetch(this.cuentaSecurityBox+"?usuario="+user);
        if(respuesta.status == 200){
            let json = await respuesta.json();
            return json;
        }
    } catch (error) {
        alert(error);
    }
}

let seccionPersona = document.getElementById("datosPersona");
let seccionCorreo =  document.getElementById("datosCorreo");
let siguiente = document.getElementById("siguiente");
let volver = document.getElementById("volver");
let contRegistro = 0;

siguiente.addEventListener("click", (e) => {
    e.preventDefault();
    seccionPersona.className = ("formularioRegistro ocultar");
    seccionCorreo.classList.remove("ocultar");
    seccionCorreo.className = ("formularioEmail mostrar");
});

volver.addEventListener("click", (e) => {
    e.preventDefault();
    seccionCorreo.classList.remove("mostrar");
    seccionCorreo.className = ("formularioRegistro ocultar");
    seccionPersona.classList.remove("ocultar");
    seccionPersona.className = ("formularioEmail mostrar");
});

let btnGuardar = document.getElementById("terminar");


let inputNombre = document.getElementById("nombre");
let inputApellido = document.getElementById("apellido");
let inputTipoDocumento = document.getElementById("documentos");
let inputDocumento = document.getElementById("nDocumento");
let inputFechaNa = document.getElementById("fecha");
let inputGenero = document.getElementsByName("genero");
let inputUsuario = document.getElementById("usuario");
let inputCorreo = document.getElementById("correo");
let inputContraseña = document.getElementById("contraseña");
let inputContraseñaConfir = document.getElementById("contraseñaconfi");

let ventanaConfirm = document.getElementById("ventanaConfirm");

btnGuardar.addEventListener("click", (e) =>{
    e.preventDefault();
    let msgEstado = document.getElementById("msgEstado");
    
    if(inputNombre.value != "" && inputCorreo.value != '' && inputContraseña!="" && inputDocumento!=''){
        getCuentasSB(inputCorreo.value.replace("@","-")).then(dato=>{
            let codigo = 0;
            let seleccionado = 0;
            dato.forEach(element => {
                codigo = Number(element.idSB);
            });

            for (let i=0;i<inputGenero.length;i++){
                if(inputGenero[i].checked){
                    seleccionado=i;
                }
            }
            if(inputContraseñaConfir.value===inputContraseña.value){
                if(dato.length==0){
                    getUsuarioSB(inputUsuario.value).then(result =>{
                        if(result.length==0){
                            cuentaSB = {
                            usuario: inputUsuario.value,
                            correo: inputCorreo.value.replace("@","-"),
                            contrasena: inputContraseña.value
                            }

                            guardarCuentaSB(cuentaSB).then(response=>{
                                console.log(response);
                                return response;
                            }).then(dato=>{
                                console.log(dato);
                                console.log("Correo registrado.");
                            });

                            clienteSB = {
                                idSB: codigo+1,
                                nombre: inputNombre.value,
                                apellido: inputApellido.value,
                                tipoDocumento: inputTipoDocumento.value,
                                nDocumento: inputDocumento.value,
                                fechaNa: inputFechaNa.value,
                                genero: inputGenero[seleccionado].value
                            }
                            guardarCliente(clienteSB).then(response=>{
                                console.log(response);
                                return response;
                            }).then(dato=>{
                                console.log(dato);
                                console.log("Registro con exito.");
                            });

                            ventanaConfirm.classList.remove("down");
                        } else {
                            inputUsuario.style = (`
                                outline: 1px solid red;
                            `);
                            msgEstado.innerHTML = "El usuario ya existe."
                            msgEstado.classList.remove('down');
                        }
                    });
                } else {
                    inputCorreo.style = (`
                        outline: 1px solid red;
                    `);
                    msgEstado.innerHTML = "El correo ya está registrado."
                    msgEstado.classList.remove('down');
                }
            } else {
                msgEstado.innerHTML = "Las contraseñas no concuerdan."
                msgEstado.classList.remove('down');
            }
            
        });
    } else {
        msgEstado.innerHTML = "Llene los campos necesarios.";
        inputNombre.style = "outline: 1.5px solid #ba0606";
        inputCorreo.style = "outline: 1.5px solid #ba0606";
        inputDocumento.style = "outline: 1.5px solid #ba0606";
        inputContraseña.style = "outline: 1.5px solid #ba0606";
        msgEstado.classList.remove('down');
    }
    setTimeout(() => {
        msgEstado.classList.add('down'); 
    }, 4000);
});

let tieneMayuscula = (mensaje) => {
    let upperLower = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

  for(let i=0;i<upperLower.length;i++){
    if (mensaje.indexOf(upperLower.charAt(i))!=-1) {
        return true;
    }
  }
  return false;
}

let tieneNumero = (mensaje) =>{
    let number = "1234567890";
    for(let i=0;i<number.length;i++){
    if (mensaje.indexOf(number.charAt(i))!=-1) {
        return true;
    }
  }
  return false;
}

let tieneCaracter = (mensaje) =>{
    let especiales = String(".-,_<>#$%&/@=+*?¡¿?!");
    for(let i=0;i<especiales.length;i++){
    if (mensaje.indexOf(especiales.charAt(i))!=-1) {
        return true;
    }
  }
  return false;
}




let info1 = document.getElementById("info1");
let info2 = document.getElementById("info2");
let info3 = document.getElementById("info3");
let info4 = document.getElementById("info4");
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");

let mensajeContraseña = ()=>{
    let pass = inputContraseña.value;
    if(pass.length>=8){
        info1.style = "color: #0cba06";
        inputContraseña.style = "outline: 1.5px solid #0cba06";
        icon1.classList.remove("bi-x-circle");
        icon1.classList.add("bi-check-circle");
    } else {
        info1.style = "color: #ba0606";
        icon1.classList.remove("bi-check-circle");
        icon1.classList.add("bi-x-circle");
    }
    if(tieneMayuscula(pass)){
        info2.style = "color: #0cba06";
        icon2.classList.remove("bi-x-circle");
        icon2.classList.add("bi-check-circle");
    } else {
        info2.style = "color: #ba0606";
        icon2.classList.remove("bi-check-circle");
        icon2.classList.add("bi-x-circle");
    }

    if(tieneNumero(pass)){
        info3.style = "color: #0cba06";
        icon3.classList.remove("bi-x-circle");
        icon3.classList.add("bi-check-circle");
    } else {
        info3.style = "color: #ba0606";
        icon3.classList.remove("bi-check-circle");
        icon3.classList.add("bi-x-circle");
    }

    if(tieneCaracter(pass)){
        info4.style = "color: #0cba06";
        icon4.classList.remove("bi-x-circle");
        icon4.classList.add("bi-check-circle");
    } else {
        info4.style = "color: #ba0606";
        icon4.classList.remove("bi-check-circle");
        icon4.classList.add("bi-x-circle");
    }

    if(pass===""){
        info1.style = "color: #ba0606";
        info2.style = "color: #ba0606";
        info3.style = "color: #ba0606";
        info4.style = "color: #ba0606";
        inputContraseña.style = "outline: 1.5px solid #ba0606";
        icon1.classList.remove("bi-check-circle");
        icon1.classList.add("bi-x-circle");
        icon2.classList.remove("bi-check-circle");
        icon2.classList.add("bi-x-circle");
        icon3.classList.remove("bi-check-circle");
        icon3.classList.add("bi-x-circle");
        icon4.classList.remove("bi-check-circle");
        icon4.classList.add("bi-x-circle");
    }
};

let verificarContra = () =>{
    if(inputContraseña.value === inputContraseñaConfir.value){
        inputContraseñaConfir.style = "outline: 1.5px solid #0cba06";
    } else {
        inputContraseñaConfir.style = "outline: 1.5px solid #ba0606";
    }
}

let verificarCorreo = () =>{
    if(inputCorreo.value != "" && inputCorreo.value.includes('@') && inputCorreo.value.includes('.')){
        inputCorreo.style = "outline: 1.5px solid #0cba06";
    } else {
        inputCorreo.style = "outline: 1.5px solid #ba0606";
    }
}
