import Head from "next/head"
import {Box, Container,useColorMode} from "@chakra-ui/react"
import {ThemeToggle,Return} from "./topBar"
import {Contacts} from "./Contacts"

const Main= ({children, router}) => {
    return (
        <Box as="main" pb={3} bgGradient='linear(to-b, #000000, #000000,#0B192C,#1E3E62)' content={""} >
            
            {/* <Box align="right"  pt={2} pr={3} right="0" >
            <Return/>
            <ThemeToggle/>
            </Box> */}
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