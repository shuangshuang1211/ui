import { blue, pink } from '@material-ui/core/colors';
import createMuiTheme, { Theme } from '@material-ui/core/styles/createMuiTheme';

const escss = {
  palette: {
    darkestBg: '#1B2430',
    darkBg: '#232F3E',
    lightDarkBg: '#314156'
  },
  sideBar: {
    width: 200,
    collapsedWidth: 56,
  },
  header: {
    height: 60,
  }
};

export interface EsTheme extends Theme {
  escss: typeof escss;
}

export const defaultTheme: EsTheme = {
  ...createMuiTheme({
    palette: {
      primary: {
        light: blue[100],
        main: blue[500],
        dark: blue[900],
      },
      secondary: {
        light: pink[100],
        main: pink[500],
        dark: pink[900],
      }
    },
    overrides: {
      MuiButton: {
        containedPrimary: {
          color: 'white'
        },
        containedSecondary: {
          color: 'white'
        }
      },
      MuiBadge: {
        colorPrimary: {
          color: 'white'
        },
        colorSecondary: {
          color: 'white'
        }
      },
    },
  }),
  escss,
};
