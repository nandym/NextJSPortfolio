import {Box, Image,useColorModeValue} from "@chakra-ui/react"
import { motion } from "framer-motion"
import NextLink from 'next/link'

const MotionBox = motion(Box)

const WorkBox = ({imgSrc,name}) =>{
    return (
       
      
        <MotionBox
                whileHover={{scale:1.05}}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration:0.3}}
                whileTap={{scale:0.95}}
                >
            
            
                <NextLink href={`/Folios/${name}`}>
            <Box bg={useColorModeValue('red.200', 'red.600')} rounded="lg" boxShadow="md" cursor="pointer" position="relative"  display={{ md: 'flex' }}>
            
           
       
            <Image w="400px" h="234px" src={imgSrc} p={1} position="relative"></Image>

            

            <Box align="center" verticalAlign="middle" pb={1} position="absolute" top="42%" bottom="0" left="0" right="0" m="auto" color="white">
                <b>
            {name} 
                </b> 
            </Box>
            <MotionBox
            whileHover={{opacity:.2}}
            >

            <Box opacity="0.4" background="black" position="absolute" w="100%" h="100%" rounded="lg" top="0" left="0"></Box>
            </MotionBox>
            {/* top="42.5%" left="42.5%" */}

            </Box>
            
                
            </NextLink>
            </MotionBox>
            
    )
}

export default WorkBox