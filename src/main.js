import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';


createApp(App)
    .use(router)
    .mount('#app');

AOS.init({
    once: true,
});
