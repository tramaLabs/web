import { coolors, reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#d06e04', '#fe8604', '#feb25f', '#fec88c', '#fedeba'],
  secondary: coolors('https://coolors.co/c2185b-e91e63-f06292-f48caf-f8bbd0'),
  danger: coolors('https://coolors.co/d32f2f-f44336-f8877f-f9a7a1-ffcdd2'),
  alert: coolors('https://coolors.co/ffa000-ffc107-ffd761-ffecb3-fff2ce'),
  success: coolors('https://coolors.co/388e3c-4caf50-7cc47f-9fd4a1-c8e6c9'),
  grayscale: ['#212121', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff'],
  black: ['#333', '#212121', '#212121', '#fff', '#fff', '#eee'],
  alpha: [0.9, 0.6, 0.3, 0.1, 0].map((alpha) => `rgba(0, 0, 0, ${alpha})`)
}

theme.reversePalette = reversePalette(theme.palette)
theme.reversePalette.alpha = [1, 0.8, 0.6, 0.4, 0.2, 0]
  .map((alpha) => `rgba(255, 255, 255, ${alpha})`)

theme.fonts = {
  primary: 'Lato, Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
}

theme.sizes = {
  maxWidth: '1100px',
  headerHeight: '4.6875rem'
}

export default theme
