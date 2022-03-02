import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 25,
        marginTop: 3,
        marginBottom: 4,
        fontWeight: 500
      },
      'page-title': {
        fontSize: 60,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('purple', 'purple.300')(props),
      textUnderlineOffset: 3,
    })
  }
}

const fonts = {
  heading: "'Roboto Slab', serif",
  body: "'Open Sans', sans-serif"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
