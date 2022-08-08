import {Box, Center, Container, Flex, Image,useColorModeValue} from "@chakra-ui/react"
import { motion } from "framer-motion"
import NextLink from 'next/link'

const Contacts = () =>{
    return(
       <Container display={"flex"} justifyContent={"center"} alignItems={"center"} mt="100">
        <Box textAlign={"center"} >
            Contact me at
        </Box>
       </Container>
    )
}
export {Contacts}