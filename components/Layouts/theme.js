
import { extendTheme } from "@chakra-ui/react"
import {mode} from '@chakra-ui/theme-tools'


const styles = {

  global: props => ({

    body: {
      bg: mode('yellow.50','gray.900')(props)
    }



  })



}


const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
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
  heading: "'M PLUS Rounded 1c'",
  body: "Source Code Pro",
}





const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}






const theme = extendTheme({ config,components,styles,fonts })

export default theme