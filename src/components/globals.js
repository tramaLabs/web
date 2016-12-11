import { keyframes } from 'styled-components'

export const colors = {
  primary: ['#d06e04', '#fe8604', '#feb25f', '#fec88c', '#fedeba'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  grayscale: ['#212121', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff'],
  alpha: [0.9, 0.6, 0.3, 0.1, 0].map((alpha) => `rgba(0, 0, 0, ${alpha})`)
}

export const reverseColors = {}

Object.keys(colors).forEach((key) => {
  reverseColors[key] = [ ...colors[key] ].reverse()
})

reverseColors.alpha = [1, 0.8, 0.6, 0.4, 0.2, 0].map((alpha) => `rgba(255, 255, 255, ${alpha})`)

export const fonts = {
  primary: 'Lato, Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
}

export const animations = {
  rotate360: keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `,
  fadeIn: keyframes`
    0% { display: none; opacity: 0; }
    1% { display: block: opacity: 0; }
    100% { display: block; opacity: 1; }
  `,
  fadeOut: keyframes`
    0% { display: block; opacity: 1; }
    1% { display: none: opacity: 1; }
    100% { display: none; opacity: 0; }
  `
}
