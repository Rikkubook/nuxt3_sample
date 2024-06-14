import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      ...colors,
      gray: {
        ...colors.gray,
        'dark': '#333333',
        'DEFAULT': '#505050',
        'light': '#F6F6F4',
        'carousel': '#707070'
      }
    },
    extend: {
      colors: {
        cream : {
          '50': '#FFFFFC', 
          '100': '#FCFCFA', 
          '200': '#FCFCF5', 
          '300': '#FAF9ED', 
          '400': '#F5F3DF', 
          '500': '#EFECD1', 
          '600': '#D9D2A9', 
          '700': '#BB9D62', 
          '800': '#8F7B4A', 
          '900': '#6B542A', 
          '950': '#452F11'
        },
        almond :{
          '100': '#F9F8EE',
          '300': '#FAF7F2', 
          '500': '#F2EBDE', 
        },
        bronze:{
          '500': '#AC754D'
        },
        lemon:{
          '500': '#ECE8BD'
        }
      },
      spacing:{
        '77px': '77px',
        '1/5': '20%',
        '1/10': '10%',
        "1290px": "1290px",
        "1920px": "1920px",
      },
      minWidth: {
        '98px': '98px',
        '135px': '135px',
        "320px":'320px'
      },
      width: {
        'mobileMenu': 'calc(100% - 30px)', 
      },
      letterSpacing: {
        '80%': '0.80em',
        '55%': '0.55em',
        '50%': '0.5em',
        '40%': '0.4em',
        '30%': '0.3em',
        '25%': '0.25em',
        '15%': '0.15em',
        '12%': '0.12em',
        '10%': '0.10em',
        '8%': '0.08em',
        '6%': '0.06em',
        '5%': '0.05em'
      },
      fontSize: {
        '45px': '45px',
        '40px': '40px',
        '32px': '32px',
        '22px': '22px',
        '17px': '17px',
        '15px': '15px',
        '13px': '13px',
      }
    }
  }
}
