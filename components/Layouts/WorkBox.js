import {Box, Image,useColorModeValue} from "@chakra-ui/react"
import { motion } from "framer-motion"
import NextLink from 'next/link'
import { AspectRatio } from '@chakra-ui/react'

const MotionBox = motion(Box)

const WorkBox = ({imgSrc,name}) =>{
    
    return (
       
      
        <MotionBox
                whileHover={{scale:1.12}}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration:0.3}}
                whileTap={{scale:0.95}}
                >
            
            
                <NextLink href={`/Folios/${name}`}>
            <Box bg={useColorModeValue('orange.200', 'orange.500')} minWidth="150px" height={"106%"} rounded="5px" boxShadow="md" cursor="pointer" position="relative"  display={{ md: 'flex' }}>
            
           

            <Image alt="" width={"400px"} Height={"273px"}  src={imgSrc} p={0.5} rounded="5px" position="relative"></Image>

           
            

            <MotionBox
            
            whileHover={{opacity:0}}
            >
            <Box opacity="0.2" background="black" position="absolute" w="100%" h="100%" rounded="5px" top="0" left="0"></Box>
            </MotionBox>
            <Box align="center" verticalAlign="middle" pb={1} position="absolute" top="42%" bottom="0" left="0" right="0" m="auto" color="white" pointerEvents={"none"}>
                <b>
            {name} 
                </b> 
            </Box>

            {/* top="42.5%" left="42.5%" */}

            </Box>
            
                
            </NextLink>
            </MotionBox>
            
    )
}

export default WorkBox