export const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Helvetica Neue", sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#333',
    background: 'cornsilk',
    primary: 'maroon',
    modes: {
      dark: {
        text: '#fff',
        background: 'teal',
        primary: 'turquoise',
      },
    },
  },
  // gotcha: how to apply body styles to root element
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
}
