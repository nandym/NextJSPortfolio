import { Box, Container, Heading,Center,Text, Grid, SimpleGrid } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Image,OrderedList,ListItem,useColorModeValue } from '@chakra-ui/react';



const MotionBox = motion(Box)
const Godot = () =>{

return(


<Container maxW="container.lg" pt={5} pb={5}>
    <MotionBox
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{duration:0.3}}>


    <Box>

            <Box align="center" mb={12}>
            
            
            
            <Heading as="h2" mb={12}>
                Godot projects
            </Heading>

            <Heading size={"md"} mb={12}>
                Assignment, similar to a gamejam, we were assigned a theme and we had to do our best to follow it having one week to develop a game for five weeks while also attending university.
                    </Heading>
                    
                    <Box mt={12} mb={12}>
                        Some games had more time to be developed, other games were done close to other assignments, and one game from Godot 3.x version was fully deprecated when imported to version 4.x so only 4 games are displayed.
            </Box>

            <iframe src="/games/mapgen/Mapgen.html"  width={"100%"} height={"500px"} ></iframe>            
            <Box mt={20} mb={12}>Done on a previous version of Godot 3.x , the Web export doesn't seem to work as it has problems accessing the generated map to spawn the village, it is an CIV like game with turns and grid movement.</Box>
                    <iframe src="/games/horror/HorrorGAme.html" width={"100%"} height={"500px"} ></iframe>  
                    <Box mt={20} mb={12}>A horror game, where you can only see the outline of objects when you press space, altough it is not always a good idea to press space...</Box>
                    <iframe src="/games/rts/RTS.html" width={"100%"} height={"500px"} ></iframe> 
                    <Box mt={20} mb={12}>A real time strategy game, you have the MAP monitor where you can see blue squares which is your base on the left most and your units, and the red squares, the goal is to infiltrate the base square, you can buy units on the board, you can control them by typing their id and then target coordinates, altough the display shaders dont work on the web version, you also recieve orders from your commander altough some times he tries to trick you...</Box>
                    <iframe src="/games/free/Freedoom.html" width={"60%"} height={"900px"} ></iframe> 
                    <Box mt={20}>The theme was freedoom "free doom", there was only an hour left as I had other assignments, as you can probably tell.</Box>
   </Box>
                    

    </Box>
    </MotionBox>

</Container>

)

}


export default Godot