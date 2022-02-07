<template>
        <section class="inicioSesion" id="ventanaInicio">
          <form class="formatoInicio" action="">
              <div v-on:click="quitar()">
                <router-link to="/" class="salirInicio"><i class="bi bi-x-lg"></i></router-link>
              </div>
              <h2>Inicio de sesión</h2>
              <input type="text" name="correo" id="correo" class="inputs" placeholder="Ingrese su correo">
              <input type="password" name="contraseña" id="contraseña" class="inputs" placeholder="Ingrese su contraseña">
              <p class="mensajeError down" id="msg">Correo o Contraseña incorrecta, intenta nuevamente.</p>
              <router-link to="/securitybox/bryan" id="iniciarSesion" class="btn">Iniciar</router-link>
          </form>
        </section>
</template>

<script>
export default {
  name: 'InicioSesion',
  methods: {
    quitar(){
      let ventana = document.getElementById("ventanaInicio");
      ventana.classList.remove("dos");
      ventana.className = "inicioSesion uno";
    }
  }
}
</script>

<style scoped>
</style>