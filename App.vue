<template>
  <div id="nav">
    <header id="hInicio">
        <section class="container">
            <section class="texto">
            <h1>Bienvenido a Security<span class="naranja">Box</span></h1>
            <h2>Manten seguras tus contraseñas y recuerdalas</h2>
            <nav>
                <router-link to="/registro"><a v-on:click="mover()" class="btn">Registrarse</a></router-link>
                <router-link to="/inicio-sesion"><a class="btn" v-on:click="mostrar()">Iniciar Sesión</a></router-link>
            </nav>
            </section>
        <img src="img/inicio.png" alt="SecurityBox">
        </section>
    </header>
    <section class="ola">
            <div style="height: 150px; overflow: hidden;" >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill:#11366d;">
                    </path>
                </svg>
            </div>
    </section>
    <a id="muestra"></a>
    <router-view></router-view>
    <Informacion />
    <EstiloFooter />
  </div>
</template>

<script>
import Informacion from "@/components/Información.vue"
import EstiloFooter from "@/components/EstiloFooter.vue"
export default {
  name: 'App',
  components: {Informacion, EstiloFooter},
  methods: {
    mover(){
      location.href = '#muestra';
    },
    mostrar(){
      let ventana = document.getElementById("ventanaInicio");
      ventana.classList.remove("uno");
      ventana.className = "dos inicioSesion";
    }
  }
}
</script>


<style></style>
