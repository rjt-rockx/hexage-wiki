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
      accent: 'var(--vp-c-brand-1)',
      border: 'var(--vp-c-border)',
      divider: 'var(--vp-c-divider)',
      gutter: 'var(--vp-c-gutter)',
      surface: 'var(--vp-c-bg)',
      'surface-alt': 'var(--vp-c-bg-alt)',
      'surface-elv': 'var(--vp-c-bg-elv)',
      'surface-soft': 'var(--vp-c-bg-soft)',
      default: {
        1: 'var(--vp-c-default-1)',
        2: 'var(--vp-c-default-2)',
        3: 'var(--vp-c-default-3)',
        soft: 'var(--vp-c-default-soft)'
      },
      brand: {
        1: 'var(--vp-c-brand-1)',
        2: 'var(--vp-c-brand-2)',
        3: 'var(--vp-c-brand-3)',
        soft: 'var(--vp-c-brand-soft)'
      }
    }
  }
})
