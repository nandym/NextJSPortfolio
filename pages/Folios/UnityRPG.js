import { Box, Container, Heading } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Image,OrderedList,ListItem } from '@chakra-ui/react';



const MotionBox = motion(Box)
const Unity = () =>{

return(


<Container maxW="container.md">
<MotionBox
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{duration:0.3}}>
    <Box>

        <Box align="center" mb={12}>
            <Heading as="h2">
                Unity game using Proton
            </Heading>
        </Box>



        <Box textAlign="center" backgroundColor="red.400" mb={20}>
        A 4 player game developed for the Final Major Project of my Indie Game Development Bachelors Course.
        </Box>


        <Box mb={12}>
            <Image src="/images/FMPF.png" alt="First Successful multiplayer test"></Image>
        </Box>

        <Box mb={12}>
            The Imagine above show the first happy moment of this development, where after a few days of bug and problem solving I managed to have 4 players fully synced and interacting.
        </Box>

        <Box mb={12}>
            <Image src="/images/CreateMatch.gif" alt="Create a Match"></Image>
        </Box>

        <Box mb={12}>
            The first time me and a friend tested Steam Integration!
        </Box>

        <Box mb={12}>
            <Image src="/images/UnityGame/TalentTree.jpg" alt="Talent Tree"></Image>
        </Box>

        <Box mb={12}>
            A basic talent tree inspired in WoW (World of Warcraft) where you start from the top and build downwards like tree roots, these grant skills and upgrade them.
        </Box>

        <Box mb={12}>
            <Image src="/images/UnityGame/Skills.jpg" alt="Skills"></Image>
        </Box>

        <Box mb={12}>
            Skills, they are draggable to the skills bar bellow!
        </Box>

        <Box mb={12}>
            <Image src="/images/UnityGame/Shop.jpg" alt="Shop"></Image>
        </Box>

        <Box mb={12}>
            A shop, you are able to carry 6 items, some even usable restoring health/mana by regen or instantly, all synced.
        </Box>

        <Box mb={12}>
            <Image src="/images/UnityGame/Boss.jpg" alt="Boss"></Image>
        </Box>

        <Box mb={12}>
            A Boss with a few mechanics, was a great challenge for multiplayer as he affected even the environment!
        </Box>

        <Box mb={12}>
            <Image src="/images/UnityGame/Environment.jpg" alt="Environment"></Image>
        </Box>

        <Box mb={12}>
            An environment shot.
        </Box>

        <Box mb={12}>
            Leaving a small comment. During this project I learned a ton about multiplayer development, wasn't my first time, but there were great difficulties.
            I mean I can't compare this project with websites(little php games) I've made.
            <br></br>
            If I was to make a new multiplayer game I'd have gone differently with the logic and made more/better use of RPCs, would calculate the data structures needed for my game, the MMO challenge. 
        </Box>

    </Box>
    </MotionBox>
</Container>






)

}


export default Unity