import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';

const options = {
  baseFontSize: '14px',
  baseLineHeight: 1.45,
  scaleRatio: 2.25,
  googleFonts: [ name: 'Lato' ], 
  headerFontFamily: ['Lato', 'serif'],
  bodyFontFamily: ['Lato', 'serif'],
  plugins: [new CodePlugin()],
  overrideStyles: () => ({
    [MOBILE_MEDIA_QUERY]: {
      // Make baseFontSize on mobile 16px.
      html: {
        fontSize: `${14 / 14 * 100}%`
      }
    }
  })
};

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
