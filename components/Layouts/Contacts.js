import {Box, Center, Container, Flex, Image,Link,useColorModeValue} from "@chakra-ui/react"
import { motion } from "framer-motion"
import NextLink from 'next/link'

const Contacts = () =>{
    return(
       <Container justifyContent={"center"} alignItems={"center"} mt="300" pb={12}>
        <Box textAlign={"center"} color={"#d66853"} fontSize={15} bg={"black"} border={"0px"} borderColor={"#d66853"} >
            Contacts
            
        </Box>
        
        <Box display={"flex"} justifyContent={"center"} pt={6} pb={2}>
            {/* <Link href='https://www.instagram.com/wijnandmk/'  userSelect={"none"} isExternal>
            <Image 
            alt="Instagram"
            w={4}
            src={"/images/Instagram.png"}
            >
            </Image>
            </Link> */}

            <Link href="https://www.linkedin.com/in/wijm/" ml={0} isExternal>
            <Image
            alt="Linkedin"
            w={6}
            src={"/images/LinkedIn.png"}
            >
            </Image>
            </Link>
            
        </Box>
       </Container>
    )
}
export {Contacts}