import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/aura-light-green/theme.css';

createApp(App).use(PrimeVue).mount('#app');
