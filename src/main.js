import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Aura from '@primeuix/themes/aura';


import PrimeVue from 'primevue/config';

import Message from 'primevue/message';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import App from './App.vue'
import router from './router'



const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(createPinia())
app.use(router)
app.use(PrimeVue); // 플러그인 등록
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Message', Message);


app.mount('#app')
