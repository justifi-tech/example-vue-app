import './assets/main.css'

import { createApp } from 'vue'
import { ComponentLibrary } from '@justifi/vue-components'

import App from './App.vue'

createApp(App).use(ComponentLibrary).mount('#app')
