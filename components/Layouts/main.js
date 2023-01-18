import Head from "next/head"
import {Box, Container} from "@chakra-ui/react"
import {ThemeToggle,Return} from "./topBar"
import {Contacts} from "./Contacts"

const Main= ({children, router}) => {
    return (
        <Box as="main" pb={3}>
            <Box align="right"  pt={2} pr={3} right="0" position="fixed">
            <Return/>
            <ThemeToggle/>
            </Box>
            <Head>
                <link rel = "icon" href ="/public/images/Logo_inv.png" type = "image/x-icon"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Wijnand Merkens</title>
            </Head>
            <Container  pt={17} maxW="container.xl" >
                {children}
            </Container>

            <Contacts/>

        </Box>
    )
}
export default Main