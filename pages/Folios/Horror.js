import { Box, Container, Heading } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Image,OrderedList,ListItem } from '@chakra-ui/react';



const MotionBox = motion(Box)
const Horror = () =>{

return(


<Container maxW="container.md">
    <MotionBox
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{duration:0.3}}>


    <Box>

                        <Box align="center" mb={12}>
                            <Heading as="h2" >
                                Horror

                            </Heading>
                        </Box>

                        <Box textAlign="center" backgroundColor="red.400" mb={20}>
                        A horror game prototype developed during Q2 of 2020
                        </Box>


                        <MotionBox
                        whileHover={{scale:1.4}}
                        transition={{duration:.7}}
                        >
                        <Box mb={20}>

                        <Image src="/images/HorrorGame/Menu.gif" alt="Game Menu"></Image>

                        </Box>
                        </MotionBox>


                        <Box mb={20}>
                            <Box as="h2">
                        The main objectives were :
                            </Box>
                        <Box mt={4} backgroundColor="yellow.600" pl={2} pr={2}>
                            <br></br>
                            <OrderedList listStyleType="square" spacing={3} >
                                <ListItem>Develop a Character Controller</ListItem>
                                <ListItem>Create an environment to fit the mood</ListItem>
                                <ListItem>The creation of a "monster"</ListItem>
                                <ListItem>Design and implementation of a User interface</ListItem>
                            </OrderedList>
                            <br></br>
                        </Box>

                        </Box>


                        <Box align="center" mb={14}>
                            <Heading as="h3" variant="section-title">
                                Environment
                            </Heading>
                        </Box>



                        <MotionBox
                        whileHover={{scale:1.4}}
                        transition={{duration:.7}}
                        >
                        <Box mb={20}>
                            <Image src="/images/HorrorGame/Lightray.png"></Image>
                        </Box>
                        </MotionBox>


                        <Box align="center" mb={20}>
                        During the development of the environment I decided to give HDRP(High Definition Rendering Pipeline), a Rendering Pipeline for Unity a go, it allowed me to make use of volumetric lighting which was great fun.
                        </Box>


                        <MotionBox
                        whileHover={{scale:1.4}}
                        transition={{duration:.7}}
                        >
                        <Box mb={20}>

                        <Image src="/images/HorrorGame/inside2.png"></Image>

                        </Box>
                        </MotionBox>



                        <Box align="center" mb={14}>
                            <Heading as="h3" variant="section-title" fontStyle="italic">
                                Monster
                            </Heading>
                        </Box>


                        <MotionBox
                        whileHover={{scale:1.4}}
                        transition={{duration:.7}}
                        >
                        <Box mb={20}>
                            <Image src="/images/HorrorGame/monster.gif"></Image>
                        </Box>
                        </MotionBox>


                        <Box pb={50} align="center">
                            I swear he is actually scary
                        </Box>
                    

    </Box>
    </MotionBox>

</Container>

)

}


export default Horror