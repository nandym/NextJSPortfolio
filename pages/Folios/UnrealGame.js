import { Box, Container, Heading } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Image,OrderedList,ListItem } from '@chakra-ui/react';



const MotionBox = motion(Box)
const UnrealGame = () =>{

return(


<Container maxW="container.lg" boxShadow={"dark-lg"} pt={5} pb={5}>
<MotionBox
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{duration:0.3}}>

<Box align="center" mb={12}>
<Heading as="h2" >
    Unreal Game
</Heading>
</Box>

<Box>

    
</Box>
















</MotionBox>
</Container>
)

}


export default UnrealGame