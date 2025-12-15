import type { Config } from 'tailwindcss'

/**
 * Tailwind CSS v4 Configuration
 * 
 * Defines custom breakpoints and container max-widths:
 * - sm: 576px
 * - md: 720px
 * - lg: 960px
 * - xl: 1128px
 * - 2xl: 2225px
 * 
 * Container max-widths match their respective breakpoints.
 * These values replace the default Tailwind breakpoints.
 * 
 * Note: Tailwind v4 also supports CSS-based configuration via @theme in index.css
 */
const config: Config = {
  theme: {
    // Override default breakpoints with custom values
    screens: {
      'sm': '576px',
      'md': '720px',
      'lg': '960px',
      'xl': '1128px',
      '2xl': '2225px',
    },
    // Container max-widths for each breakpoint
    // The container class will use these max-width values at each breakpoint
    container: {
      center: true,
      padding: '1rem',
      screens: {
        'sm': '576px',
        'md': '720px',
        'lg': '960px',
        'xl': '1128px',
        '2xl': '2225px',
      },
    },
  },
}

export default config

