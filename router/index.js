import { createRouter, createWebHistory } from 'vue-router'
import Registro from '../views/Registro.vue'
import Sesion from '../views/InicioSesion.vue'
import SecurityBox from '../views/SecurityBox.vue'

const routes = [
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/inicio-sesion',
    name: 'Sesion',
    component: Sesion
  },
  {
    path: '/securitybox/:username',
    name: 'SecurityBox',
    component: SecurityBox
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
