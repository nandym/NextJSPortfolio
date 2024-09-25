import { Box, Center, Container, Grid, GridItem, Heading, SimpleGrid } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Image,OrderedList,ListItem,useColorModeValue } from '@chakra-ui/react';


const MotionBox = motion(Box)
const BingerNinja = () =>{

return(


<Container maxW="container.lg" boxShadow={"dark-lg"} pt={5} pb={5}>
<MotionBox
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{duration:0.3}}>
<Box align="center" mb={12}>
<Heading as="h2" mb={12}>
    Binger Ninja
</Heading>
</Box>
    <Box textAlign="center" backgroundColor="#fef8e0" textColor={'black'} mb={20}>
    Developed as a university project by a team of students Q4 2021
    </Box>



    <Box mb={20}>

    <Image src="/images/BingerNinja/SC1.png" alt="Start Level"></Image>

    </Box>
    <Box mb={20}>
        <Box as="h2">
    Main Objectives :
        </Box>
    <Box mt={4} backgroundColor="#6f5e43" textColor={'white'} pl={2} pr={2}>
        <br></br>
        <OrderedList listStyleType="square" spacing={3} >
            <ListItem>My role was environment artist, went on to help with character art</ListItem>
            <ListItem>Keep the whole game bellow 1MB</ListItem>
            <ListItem>Communicate with a team, completing tasks following agile methodology </ListItem>
        </OrderedList>
        <br></br>
    </Box>
</Box>

<Box align="center" mb={14}>
<Heading as="h3" variant="section-title" fontStyle="italic">
Environment
</Heading>
</Box>

            
                <SimpleGrid columns={{ sm:1, xl:1 }}  spacing={2} mb={10}>
                    <Image src="/images/BingerNinja/01.png"></Image>
                    <Image src="/images/BingerNinja/02.png"></Image>
                    <Image src="/images/BingerNinja/03.png"></Image>
                    <Image src="/images/BingerNinja/04.png"></Image>
                    <Image src="/images/BingerNinja/05.png"></Image>
                    <Image src="/images/BingerNinja/06.png"></Image>
                    <Image src="/images/BingerNinja/07.png"></Image>
                    <Image src="/images/BingerNinja/08.png"></Image>
                </SimpleGrid>

            <Center mb={10}>
                <Image src="/images/BingerNinja/sp.png"></Image>
            </Center>

            <Box mb={20}>
                Grayscale was used to allow more options for each tile and also reducing the game size by not having to store different colors.
                <br></br>
                There were 3 tones Border, Mid tones, Highlights.
            </Box>












</MotionBox>
</Container>
)

}


export default BingerNinja