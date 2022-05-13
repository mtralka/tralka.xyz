import { setupLayouts } from 'virtual:generated-layouts'
import 'virtual:windi.css'
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from '~pages'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)
// https://github.com/antfu/vite-ssg
// export const createApp = ViteSSG(
//   App,
//   { routes, base: import.meta.env.BASE_URL },
//   (ctx) => {
//     // install all modules under `modules/`
//     Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
//   },
// )

export const createApp = ViteSSG(
    // the root component
    App,
    // vue-router options
    { routes },
    // function to have custom setups
    ({ app, router, routes, isClient, initialState }) => {
    },
  )

// import { setupLayouts } from 'virtual:generated-layouts'
// import generatedRoutes from 'virtual:generated-pages'
// import 'virtual:windi.css'
// import { ViteSSG } from 'vite-ssg'
// import App from './App.vue'
// const routes = setupLayouts(generatedRoutes)

// const router = createRouter({
// history: createWebHistory(),
//   routes,
// });

// createApp(App).mount('#app')

// export const createApp = ViteSSG(
//     // the root component
//     App,
//     // vue-router options
//     { routes },
//     // function to have custom setups
//     ({ app, router, routes, isClient, initialState }) => {
//       // install plugins etc.
//     },
//   )


// const routes = setupLayouts(generatedRoutes)

// // https://github.com/antfu/vite-ssg
// export const createApp = ViteSSG(
//   App,
//   { routes, base: import.meta.env.BASE_URL },
//   (ctx) => {
//     // install all modules under `modules/`
//     Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
//   },
// )