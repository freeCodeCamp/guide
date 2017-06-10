import Typography from "typography"
import CodePlugin from "typography-plugin-code"
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from "typography-breakpoint-constants"

const options = {
  headerFontFamily: [`Lato`, `sans-serif`],
  bodyFontFamily: [`Lato`, `serif`],
  baseFontSize: `18px`,
  baseLineHeight: 1.4,
  headerColor: `#44421f`,
  bodyColor: `#44421f`,
  blockMarginBottom: 0.65,
  scaleRatio: 2.15,
  plugins: [new CodePlugin()],
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      body: {
        background: `white`,
      },
      "h1,h2,h4,h5,h6": {
        lineHeight: 1.075,
        marginTop: rhythm(1.5),
        marginBottom: rhythm(3 / 4),
      },
      ul: {
        marginTop: rhythm(1 / 2),
      },
      h3: {
        ...scale(2 / 5),
        fontStyle: `italic`,
        lineHeight: 1,
        marginTop: rhythm(1),
        marginBottom: rhythm(1 / 2),
      },
      h4: {
        ...scale(1 / 5),
      },
      h5: {
        ...scale(0),
      },
      "tt,code": {
        background: `#f9f2f4`,
        color: `#c7254e`,
        fontFamily: `"Lato",Consolas,"Roboto Mono","Droid Sans Mono","Liberation Mono",Menlo,Courier,monospace`,
        fontSize: `80%`,
        // Disable ligatures as they look funny w/ Space Mono as code.
        fontVariant: `none`,
        WebkitFontFeatureSettings: `"clig" 0, "calt" 0`,
        fontFeatureSettings: `"clig" 0, "calt" 0`,
        padding: `0.1em 0.5em`
      },
      pre: {
        background: `hsla(23, 60%, 97%, 1)`,
        border: `1px solid #eddad4`,
        lineHeight: 1,
        minWidth: `100%`,
      },
      "pre code": {
        display: `block`,
        fontSize: `90%`,
        lineHeight: 1.32,
      },
      "pre code span.highlight-code-line": {
        background: `pink`,
        marginLeft: rhythm(-options.blockMarginBottom),
        paddingRight: rhythm(options.blockMarginBottom),
        borderLeft: `${rhythm(
          options.blockMarginBottom / 2
        )} solid darkslategray`,
        paddingLeft: rhythm(options.blockMarginBottom / 2),
        float: `left`,
        minWidth: `100%`,
      },
      ".navbar": {
        color: `white`
      },
      ".main-body a": {
        color: `darkgreen`,
        textDecoration: `none`,
        fontWeight: `bold`
      },
      ".main-body a:hover": {
        textDecoration: `underline`,
      },
      ".main-body a.anchor": {
        color: `inherit`,
        textDecoration: `none`,
        borderBottom: `none`,
        boxShadow: `none`,
      },
      ".main-body a.anchor:hover": {
        background: `none`,
      },
      ".main-body a.gatsby-resp-image-link": {
        boxShadow: `none`,
        borderBottom: `transparent`,
      },
      ".main-body a.gatsby-resp-image-link:hover": {
        background: `none`,
        boxShadow: `none`,
      },
      "div + em": {
        ...scale(-1 / 5),
        lineHeight: 1.4,
        display: `block`,
        textAlign: `center`,
      },
      ".gatsby-resp-image-link": {
        marginLeft: rhythm(-3 / 4), // 3/4 rhythm is amount of padding on mobile.
        marginRight: rhythm(-3 / 4),
      },
      video: {
        width: `100%`,
        marginBottom: rhythm(options.blockMarginBottom),
      },
      [TABLET_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 17px.
        html: {
          fontSize: `${17 / 16 * 100}%`,
        },
      },
      [MOBILE_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 16px.
        html: {
          fontSize: `${16 / 16 * 100}%`,
        },
      },
    }
  },
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
