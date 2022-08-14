import { Box, Container, Heading } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Image,OrderedList,ListItem } from '@chakra-ui/react';



const MotionBox = motion(Box)
const DWorks = () =>{

return(


<Container maxW="container.md" boxShadow={"dark-lg"} pt={5} pb={5}>
<MotionBox
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{duration:0.3}}>


    <Box>
        <Box align="center" mb={12}>
            <Heading as="h2">
                3D Works
            </Heading>
        </Box>

        <Box textAlign="center" backgroundColor="red.400" mb={20}>
            A look into how I have improved my Web-development skills over the years, on and off.
        </Box>

        <Box mb={20} align="center">
       
        </Box>
        <Box mb={12}>
            I've done Web-Dev since I was about 8, mostly because I was curious, but only really got into in during my Highschool years, where I learned Javascript, PhP and SQL.
            <br></br>
            It wasn't until my University years that I learned about Javascript frameworks... Could've made great use of them for my highschool last year project (The project was a Game in UE4) website, as I had to code animations with JS and mess way too much with old good raw CSS.
        </Box>

        <Box mb={20}>
        <MotionBox
        whileHover={{scale:1.4}}
        transition={{duration:.7}}
        >

        <Image src="/images/Website.jpg"></Image>
        </MotionBox>

        </Box>

        <Box mb={20}>
        2021 I began making a website and decided to learn Angular, but then Next.js kidnapped me and I've switched to making the Portfolio using it instead.
        <br></br>
        <br></br>
        I brought the boxes with my works to this website, and have images of the code used. Also Angular was better for handling data.
        </Box>
        <Box mb={20}>
        <MotionBox
        whileHover={{scale:1.4}}
        transition={{duration:.7}}
        >

            <Image src="/images/AngularInterface.png"></Image>
            </MotionBox>
        </Box>
        <Box mb={20}>
        <MotionBox
        whileHover={{scale:1.4}}
        transition={{duration:.7}}
        >

            <Image src="/images/WorkBoxesHtml.png"></Image>
            </MotionBox>
        </Box>
        <Box mb={20} align="center">
            <a href=".."><u> An example of my current skill level ;)</u></a>
        </Box>

    </Box>
    </MotionBox>
</Container>






)

}


export default DWorks