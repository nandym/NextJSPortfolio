import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/Layouts/main"
import theme from "../components/Layouts/theme"
import "@fontsource/m-plus-rounded-1c"
import "@fontsource/source-code-pro"

const Website = ({Component, pageProps, router}) => {
    return(
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}
export default Website