
import { extendTheme } from "@chakra-ui/react"
import {mode} from '@chakra-ui/theme-tools'


const styles = {

  global: props => ({

    body: {
      // bgGradient:'linear(to-br, #7d4e57,#212d40,#7d4e57 )'
    }



  })



}


const components = {
  Heading:  {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'h3': {
        textDecoration: '',
        fontSize: 14,
        textDecorationColor: '#525252',
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}



const fonts = {
  heading: "JetBrains Mono Variable, monospace",
  body: "JetBrains Mono Variable, monospace",
  Box: "JetBrains Mono Variable, monospace",
}





const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,

}






const theme = extendTheme({ config,components,styles,fonts })

export default theme