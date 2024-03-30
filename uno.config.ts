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
    presetIcons({
      autoInstall: true
    }),
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
      surface: {
        DEFAULT: 'var(--vp-c-bg)',
        alt: 'var(--vp-c-bg-alt)',
        elv: 'var(--vp-c-bg-elv)',
        soft: 'var(--vp-c-bg-soft)'
      },
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
      },
      button: {
        brand: {
          border: 'var(--vp-button-brand-border)',
          text: 'var(--vp-button-brand-text)',
          bg: 'var(--vp-button-brand-bg)',
          hover: {
            border: 'var(--vp-button-brand-hover-border)',
            text: 'var(--vp-button-brand-hover-text)',
            bg: 'var(--vp-button-brand-hover-bg)'
          },
          active: {
            border: 'var(--vp-button-brand-active-border)',
            text: 'var(--vp-button-brand-active-text)',
            bg: 'var(--vp-button-brand-active-bg)'
          }
        },
        alt: {
          border: 'var(--vp-button-alt-border)',
          text: 'var(--vp-button-alt-text)',
          bg: 'var(--vp-button-alt-bg)',
          hover: {
            border: 'var(--vp-button-alt-hover-border)',
            text: 'var(--vp-button-alt-hover-text)',
            bg: 'var(--vp-button-alt-hover-bg)'
          },
          active: {
            border: 'var(--vp-button-alt-active-border)',
            text: 'var(--vp-button-alt-active-text)',
            bg: 'var(--vp-button-alt-active-bg)'
          }
        },
        sponsor: {
          border: 'var(--vp-button-sponsor-border)',
          text: 'var(--vp-button-sponsor-text)',
          bg: 'var(--vp-button-sponsor-bg)',
          hover: {
            border: 'var(--vp-button-sponsor-hover-border)',
            text: 'var(--vp-button-sponsor-hover-text)',
            bg: 'var(--vp-button-sponsor-hover-bg)'
          },
          active: {
            border: 'var(--vp-button-sponsor-active-border)',
            text: 'var(--vp-button-sponsor-active-text)',
            bg: 'var(--vp-button-sponsor-active-bg)'
          }
        }
      }
    }
  }
})
