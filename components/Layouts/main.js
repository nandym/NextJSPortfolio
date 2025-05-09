import Head from "next/head"
import {Box, Container,useColorMode} from "@chakra-ui/react"
import {ThemeToggle,Return} from "./topBar"
import {Contacts} from "./Contacts"

const Main= ({children, router}) => {
    return (
        <Box as="main" pb={3} bgGradient='linear(to-br, #7d4e57,rgb(20, 40, 71), #7d4e57 )'  >
            
            {/* <Box align="right"  pt={2} pr={3} right="0" >
            <Return/>
            <ThemeToggle/>
            </Box> */}
            <Head>
                <link rel = "icon" href ="/public/images/Logo_inv.png" type = "image/x-icon"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Wijnand Merkens</title>
            </Head>
            <Box h={12}></Box>
            <Container  pt={17} mb={20} maxW="container.xl" bgGradient='linear(173deg,#364156 8%,rgba(0, 0, 0, 0.21) 20% )' border={"8px"} borderColor={"rgba(0, 0, 0, 0.11)"} boxShadow={"dark-lg"} > 
                {children}
            <Contacts/>
            </Container>


        </Box>
    )
}
export default Main