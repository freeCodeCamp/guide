import colorPairsPicker from 'color-pairs-picker'
import chroma from 'chroma-js'

import { config } from 'config'

export const colors = colorPairsPicker(config.baseColor, {
  contrast: 5.5,
})

const darker = chroma(config.baseColor).darken(10).hex()
export const activeColors = colorPairsPicker(darker, {
  contrast: 7,
})
