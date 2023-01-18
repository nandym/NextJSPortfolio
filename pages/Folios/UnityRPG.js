import { Box, Container, Heading } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Image,OrderedList,ListItem,useColorModeValue } from '@chakra-ui/react';



const MotionBox = motion(Box)
const Unity = () =>{

return(


<Container maxW="container.md" boxShadow={"dark-lg"} pt={5} pb={5}>
<MotionBox
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{duration:0.3}}>
    <Box>

        <Box align="center" mb={12}>
            <Heading as="h2">
                Unity game using PUN2
            </Heading>
        </Box>



        <Box textAlign="center" backgroundColor={useColorModeValue('gray.200', 'gray.400')} mb={20}>
        A 4 player game developed for the Final Major Project of my Indie Game Development Bachelors Course.
        </Box>

        <Box mb={20}>
                            <Box as="h2">
                        Main Objectives :
                            </Box>
                        <Box mt={4} backgroundColor={useColorModeValue('gray.200', 'gray.600')} pl={2} pr={2}>
                            <br></br>
                            <OrderedList listStyleType="square" spacing={3} >
                                <ListItem>Unity Multiplayer Solution Research</ListItem>
                                <ListItem>RPG game development</ListItem>
                                <ListItem>Steam Integration</ListItem>
                                <ListItem>Development of AI</ListItem>
                            </OrderedList>
                            <br></br>
                        </Box>
        </Box>
  
        <Box mb={12}>
            <Image src="/images/FMPF.png" alt="First Successful multiplayer test"></Image>
        </Box>

        <Box mb={12}>
            Image of the first time I managed to have 4 players.
        </Box>


        {/* <MotionBox
        whileHover={{scale:1.4}}transition={{duration:.7}}
        >
        <Box mb={12}>
            <Image src="/images/CreateMatch.gif" alt="Create a Match" playbackRate="2"></Image>
        </Box>
        </MotionBox>
        <Box mb={12}>
            The first time me and a friend tested Steam Integration!
        </Box> */}

       
        <Box mb={12}>
            <Image src="/images/UnityGame/TalentTree.jpg" alt="Talent Tree"></Image>
        </Box>
      
        <Box mb={12}>
            A basic talent tree inspired in WoW (World of Warcraft) where you start from the top and build downwards like tree roots, these grant skills and upgrades them.
        </Box>

   
        <Box mb={12}>
            <Image src="/images/UnityGame/Skills.jpg" alt="Skills"></Image>
        </Box>
 


        <Box mb={12}>
            Skills, they are draggable to the skills bar bellow!
        </Box>
        
        <Box mb={12}>
            <Image src="/images/UnityGame/AI.png" alt="AI" ></Image>
        </Box>
        <Box mb={12}>
            Modular AI script, being able to change the AI and its parameters on the fly.
        </Box>

        <Box mb={12}>
            <Image src="/images/UnityGame/Range.png" alt="Range"></Image>
        </Box>
        <Box mb={12}>
            The red line is the monster range. Its only visible on the editor for quick editing.
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
            A Boss with a few mechanics, was a great challenge for multiplayer as he also affected the environment!
        </Box>


 
        <Box mb={12}>
            <Image src="/images/UnityGame/BossDecisionTree.png" alt="Boss"></Image>
        </Box>


        <Box mb={12}>
            The Decision tree of the boss seen above.
        </Box>


        <Box mb={12}>
            <Image src="/images/UnityGame/Environment.jpg" alt="Environment"></Image>
        </Box>
 

        <Box mb={12}>
            Leaving a small comment.
            <br></br>
             During this project I learned a ton about multiplayer development, wasn't my first time, but there were great difficulties.
            I can't compare this project with websites(little php games) I've made.
            <br></br>
            If I was to make a new multiplayer game I'd have gone differently with the logic and made more/better use of RPCs, would also calculate the data structures needed for my game, the MMO challenge... 
        </Box>

            </Box>
            <Box mb={20} textColor={'blue'}>
            <a href="/public/documents/Merkens_Wijnand_FMP_Project_Report_AE2.pdf" target={'_self'} download='Report'>Project Report if you are curious</a>
            </Box>
    </MotionBox>
</Container>






)

}


export default Unity