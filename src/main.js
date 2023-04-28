import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faFlag,
  faUser,
  faHouse,
  faUsers,
  faCoins,
  faBook,
  faGlobe
} from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faUser, faFlag, faUsers, faCoins, faGithub, faBook, faGlobe)
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia()).component('fas', FontAwesomeIcon)
app.use(router)

app.mount('#app')
