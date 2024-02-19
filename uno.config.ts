import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        anek: 'Anek Latin'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      primary: 'var(--vp-c-text-1)',
      muted: 'var(--vp-c-text-2)',
      subtle: 'var(--vp-c-text-3)',
      accent: 'var(--vp-c-brand-1)'
    }
  }
})
