import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'intersection-observer';
import './assets/styles/main.css'

//font awsome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee, faUser, faHome, faRocket, faCog, faUsers, faPhoneSquare, faCode, faPencilSquare, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faUser, faHome, faRocket, faCog, faUsers, faPhoneSquare, faCode, faPencilSquare, faProjectDiagram);

createApp(App)
.use(Router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')