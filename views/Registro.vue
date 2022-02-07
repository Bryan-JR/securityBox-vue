<template>
  <div class="about">
    <header>
        <h1 id="tituloR">Registrate en SecurityBox</h1>
    </header>
    <main>
    <section class="contenedorR">
        <div v-on:click="mover()">
            <router-link to="/" class="salirInicio" id="salirInicio">
                <i class="bi bi-x-lg"></i>
            </router-link>
        </div>
        <h4 class="titulo">Rellene los datos</h4>
        <form class="formRegistro">
            <section class="formularioRegistro" id="datosPersona">
                <div>
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" class="inputs" name="nombre">
                </div>
                <div>
                    <label for="apellido">Apellido:</label>
                    <input type="text" id="apellido" class="inputs" name="apellido">
                </div>
                <div>
                    <label for="documentos">Tipo de documento:</label>
                    <select name="documentos" id="documentos" class="inputs">
                        <option value="TI">Tarjeta de identidad</option>
                        <option value="CC">Cedula de ciudadania</option>
                        <option value="CE">Cedula Extragera</option>
                    </select>
                    <input type="number" id="nDocumento" class="inputs" name="nDocumento" placeholder="Número de documento">
                </div>
                <div>
                    <label>Fecha de Nacimiento:</label>
                    <input type="date" class="inputs" name="fecha" id="fecha" value="fecha">
                </div>
                <div class="gen">
                    <h5>Género:</h5>
                    <div>
                        <input type="radio" id="radioF" name="genero" value="F">
                        <label for="femenino">Femenino</label>
                    </div>
                    <div>
                        <input type="radio" id="radioM" name="genero" value="M">
                        <label for="masculino">Masculino</label>
                    </div>
                    <div>
                        <input type="radio" id="radioD" name="genero" value="O">
                        <label for="otro">Otro</label>
                    </div>
                </div>
            </section>
            <br>
            <hr>
            <br>
            <section class="formularioEmail" id="datosCorreo">
                <div class="mediano">
                    <label for="usuario">Crea un usuario:</label>
                    <input type="text" id="usuario" class="inputs" name="usuario">
                </div>
                <div>
                    <label for="correo">Correo:</label>
                    <input type="email" id="correo" class="inputs" name="correo" oninput="verificarCorreo();">
                </div>
                <div class="mediano">
                    <label for="contraseña">Crea una contraseña:</label>
                    <input type="password" id="contraseña" class="inputs" name="contraseña" oninput="">
                    <div id="infoContra">
                        <div id="info1"><i id="icon1" class="bi bi-x-circle"></i><p>La contraseña contiene más de 8 caracteres.</p></div>
                        <div id="info2"><i id="icon2" class="bi bi-x-circle"></i><p>La contraseña contiene mayuscula.</p></div>
                        <div id="info3"><i id="icon3" class="bi bi-x-circle"></i><p>La contraseña contiene numeros.</p></div>
                        <div id="info4"><i id="icon4" class="bi bi-x-circle"></i><p>La contraseña contiene caracteres especiales.</p></div>
                    </div>
                    <br>
                    <label for="contraseñaconfi">Confirma la contraseña:</label>
                    <input type="password" id="contraseñaconfi" class="inputs" name="contraseñaconfi" oninput="">
                </div>
                <div class="cajab">
                    <a href="#" id="terminar" class="btn">Terminar</a>
                </div>
            </section>
        </form>
    </section>
    <section class="ventanaConfirm down" id="ventanaConfirm">
        <div class="formatoConfirm">
            <h2>¡Registro Exitoso!</h2>
            <p class="msgConfirm">Es hora de guardar y recordar tus contraseñas en todo momento.</p>
            <a id="iniciarSesion" href="" class="btn">Volver al inicio</a>
        </div>
    </section>
    <section class="msgComprobar moverDer down" id="msgEstado">
        ...
    </section>
    </main>
  </div>
</template>

<script>
export default {
    name: "Registro",
    methods: {
        mover(){
        location.href = '#nav';
        }
    }
}
</script>


<style scoped>
    .formularioEmail{
        flex-direction: column;
        align-items: flex-start;
    }

    .mediano{
        width: 45%;
    }
    
    #infoContra{
        width: 100%;
    }

    @media screen and (max-width:690px){
        .mediano{
            width: 100%;
        }
    }
</style>
