import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  scaleRatio: 1.618,
  plugins: [
    new CodePlugin(),
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Lato', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Lato','sans-serif'],
  bodyWeight: 400,
  headerWeight: 700,
  boldWeight: 700,
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
