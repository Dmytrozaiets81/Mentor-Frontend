import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"

import "@/assets/styles/main.scss"

const app = createApp(App)

app.use(createPinia())

app.mount("#app")
