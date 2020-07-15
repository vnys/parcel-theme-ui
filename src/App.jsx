/** @jsx jsx */
import React from 'react'
import { render } from 'react-dom'
import { Helmet } from 'react-helmet'
import { ThemeProvider, jsx, Box, Heading, useColorMode } from 'theme-ui'
import { theme } from './theme'

const Component = () => {
  const [colorMode, setColorMode] = useColorMode()

  function toggleColorMode() {
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
  }

  const getOtherColor = () => (colorMode === 'default' ? 'dark' : 'default')

  return (
    <Box p={4}>
      <Helmet>
        <title>My app</title>
        <meta property="eds:theme" content={colorMode} />
        <meta
          name="theme-color"
          content={
            colorMode === 'default'
              ? theme.colors.primary
              : theme.colors.modes.dark.primary
          }
        />
      </Helmet>
      <Heading as="h1">Heading</Heading>
      <p>Some paragraph text</p>
      <button onClick={toggleColorMode}>
        Change to {getOtherColor()} mode
      </button>
    </Box>
  )
}

const App = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

render(
  <App>
    <Component />
  </App>,
  document.getElementById('app'),
)
