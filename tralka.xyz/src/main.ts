import { setupLayouts } from 'virtual:generated-layouts'
import 'virtual:windi.css'
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from '~pages'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
    App,
    { routes },
    ({ app, router, routes, isClient, initialState }) => {
    },
  )