import {Box, Image,useColorModeValue} from "@chakra-ui/react"
import { motion } from "framer-motion"
import NextLink from 'next/link'
import { AspectRatio } from '@chakra-ui/react'

const MotionBox = motion(Box)

const WorkBox = ({imgSrc,name}) =>{
    
    return (
       
      
        <MotionBox
                whileHover={{scale:1.06}}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration:0.3}}
                whileTap={{scale:0.95}}
                >
            
            
                <NextLink href={`/Folios/${name}`}>
            <Box  minWidth="150px" height={"auto"} border={"0px"} rounded="5px" boxShadow="md" cursor="pointer" position="relative"  display={{ md: 'flex' }} flexDirection={"column"}>
            
                    <Box h={"30px"} w={"100%"} border={"1px"} textAlign={"center"} fontFamily={"monospace"} fontSize={18} bg={"black"}>{ name }</Box>

            <Image alt="" width={"100%"} Height={"100%"}  src={imgSrc} p={"1px"} roundedBottom={"xl"} position="relative"></Image>

           
            

            <Box opacity="0" background="black" position="absolute" w="100%" h="100%" rounded="5px" top="0" left="0"></Box>
            <MotionBox
            
            whileHover={{opacity:1}}
            >
            {/* <Box align="center" opacity="1" fontSize={40} textShadow={"1px 2px black"} verticalAlign="middle" pb={1} position="absolute" top="70%" bottom="0" left="0" right="0" m="auto" color="white" pointerEvents={"none"}>
                <b>
            {name} 
                </b> 
            </Box> */}
                </MotionBox>

            {/* top="42.5%" left="42.5%" */}

            </Box>
            
                
            </NextLink>
            </MotionBox>
            
    )
}

export default WorkBox