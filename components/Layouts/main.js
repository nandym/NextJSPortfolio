import Head from "next/head"
import {Box, Container} from "@chakra-ui/react"
import ThemeToggle from "./topBar"
const Main= ({children, router}) => {
    return (
        <Box as="main" pb={3}>
            <Box align="right"  pt={2} pr={3} right="0" position="absolute">
            <ThemeToggle/>

            </Box>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Wijnand Merkens</title>
            </Head>

            <Container  pt={17} maxW="container.xl" >
                {children}
            </Container>

        </Box>
    )
}
export default Main