/** @type {import('tailwindcss').Config} */ 
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
theme: {
  extend: {
    fontFamily: {
      pixelify: [
        'Pixelify Sans"',
        'sans-serif'
      ],
      silkscreen: [
        'Silkscreen"',
        'cursive'
      ],
      work: [
        'Work Sans"',
        'sans-serif'
      ],
      roadRage: [
        'Road Rage"',
        'cursive'
      
      ]
    },
    boxShadow: {
      'top-only': '0 -4px 6px -1px rgba(100, 100, 100, 0.5)'
    },
    animation: {
      'infinite-scroll': 'scroll 6s linear infinite',
      "infinite-scroll-news": 'infinite-scroll 60s linear infinite',
      'background-position-spin': 'background-position-spin 3000ms infinite alternate',
      mesh: 'mesh 10s infinite ease-in-out',
      rainbow: 'rainbow var(--speed, 2s) infinite linear',
      pulse: 'pulse var(--duration) ease-out infinite'
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' }, // Move left by half to loop smoothly
      },
      'infinite-scroll': {
        from: {
          transform: 'translateX(0%)'
        },
        to: {
          transform: 'translateX(-100%)'
        }
      },
      'background-position-spin': {
        '0%': {
          backgroundPosition: 'top center'
        },
        '100%': {
          backgroundPosition: 'bottom center'
        }
      },
      mesh: {
        '0%': {
          backgroundPosition: '0% 50%',
          transform: 'scale(1)'
        },
        '25%': {
          backgroundPosition: '50% 0%',
          transform: 'scale(1.1)'
        },
        '50%': {
          backgroundPosition: '100% 50%',
          transform: 'scale(1)'
        },
        '75%': {
          backgroundPosition: '50% 100%',
          transform: 'scale(1.1)'
        },
        '100%': {
          backgroundPosition: '0% 50%',
          transform: 'scale(1)'
        }
      },
      rainbow: {
        '0%': {
          'background-position': '0%'
        },
        '100%': {
          'background-position': '200%'
        }
      },
      pulse: {
        '0%, 100%': {
          boxShadow: '0 0 0 0 var(--pulse-color)'
        },
        '50%': {
          boxShadow: '0 0 0 8px var(--pulse-color)'
        }
      }
    },
    scrollbar: {
      thin: '2px'
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))'
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))'
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))'
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))'
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))'
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      chart: {
        '1': 'hsl(var(--chart-1))',
        '2': 'hsl(var(--chart-2))',
        '3': 'hsl(var(--chart-3))',
        '4': 'hsl(var(--chart-4))',
        '5': 'hsl(var(--chart-5))'
      },
      'color-1': 'hsl(var(--color-1))',
      'color-2': 'hsl(var(--color-2))',
      'color-3': 'hsl(var(--color-3))',
      'color-4': 'hsl(var(--color-4))',
      'color-5': 'hsl(var(--color-5))'
    }
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px'
  }
},
plugins: [
],
}