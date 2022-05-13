export { }

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    footer?: boolean
    header?: boolean
  }
}