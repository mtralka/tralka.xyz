import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
  theme: {
    extend: {
      colors: {
        accent: "#065f46",
      }
    }
  },
  plugins: [
    require('windicss/plugin/typography')
  ]
})