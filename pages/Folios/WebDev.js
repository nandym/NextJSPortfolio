import { Box, Container, Heading } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Image,OrderedList,ListItem,useColorModeValue } from '@chakra-ui/react';
import { Chrono } from 'react-chrono';

const Timeline = () => {
    const items = [
{
title:"circa 2010",
cardSubtitle: "Google Blogs",
cardDetailedText:"I started to play with blogs and copy pasting random html I found online, I was 10"

},
{
title:"2012",
cardSubtitle: "HTML",
cardDetailedText:"In 2012 Minecraft happened, I had to somehow promote my local host hamachi server, right?"

},
{
title:"2014",
cardSubtitle: "Php Games",
cardDetailedText:"I started using a website called 'heroku' to host Php games that I made with a friend"
},
{
title:"2015",
cardSubtitle: "HighSchool WebDev Classes",
cardDetailedText:"During highschool we were taught what used to be called adobe muse, although I chose to not use it for my assignments and instead type in raw Html and CSS, then afterwards learned JavaScript and made a non intended computer benchmark website"

},
{
title:"2018",
cardSubtitle: "Used JS for a custom Website",
cardDetailedText:"The Benchmark website was developed for my final project, a UE4 video game, it had fancy animations and required a gaming computer to run"
},
{
title:"2021",
cardSubtitle:"Learned Angular,React and Next.js",
cardDetailedText:"By self research and youtube recommendations I found myself trying multiple js frameworks, this was during university"
}
];


return (
    <div style={{ width: "350px", height: "auto" }}>
    <Chrono
    items={items}
    slideShow={true}
    slideItemDuration={4000}
    scrollable={{ scrollbar: true }}
    useReadMore={false}
    disableClickOnCircle={false}
    disableNavOnKey={false}
    disableAutoScrollOnClick={false}
    hideControls={true}
    mode="VERTICAL_ALTERNATING"
    theme={{
        primary: "red",
        secondary: useColorModeValue('gray', 'black'),
        cardBgColor: "transparent",
        cardForeColor: useColorModeValue('black', 'white'),
        titleColor: "default"
    }}
    />
</div>
)

}

const MotionBox = motion(Box)
const WebDev = () =>{

return(


<Container maxW="container.lg"  pt={5} pb={5}>
<MotionBox
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{duration:0.3}}>


    <Box>
        <Box align="center" mb={12}>
            <Heading as="h2">
                Web-Development Journey
            </Heading>
        </Box>

        <Box textAlign="center" backgroundColor="red.400" opacity={0.8} mb={20}>
            Timeline
        </Box>

        <Box mb={20} align="center">
        <Timeline></Timeline>
        </Box>
        <Box mb={12}>
            Google Blogs was responsible for piquing my interest in web development but only really got into it during my highschool years, where I learned Javascript and SQL.
                    <br></br>
                    <br></br>
                    My Php games were made using webSockets and ranged from tic tac toe to an Orc sprite mining gold for score, nothing too complex but it was a fun mix of my favorite things.
        </Box>

                <Heading mb={12} size="md" textAlign={"center"}>
                Little resume of my last experience with Angular    
                </Heading>
        <Box mb={20}>
      

        <Image src="/images/Website.jpg"></Image>
        

        </Box>
        <Box mb={20}>
        

            <Image src="/images/AngularInterface.png"></Image>
          
                </Box>
                <Box mb={20}>
                    This was the first version of my portfolio website, using Angular, it was similar and taught me that I know nothing about design so I should use something like ChakraUI (Im better now, I think)

                    
                </Box>
        <Box mb={20}>
     
            <Image src="/images/WorkBoxesHtml.png"></Image>
           
        </Box>
                <Box mb={20}>
                    Angular was very impressive, it provides great tools which make the code more compact, readable while also functional.
                    <br></br>
                    Provides great extensions to ease development, the components were a treat to use.
                    <br></br>
                    My favourite feature that I found from my limited usage was NgFor which allows to dynamically render components! Very simple, readable and fast to setup, I'd love to come back to try Angular
                    <br></br>
                    <br></br>
                    Currently for this website and more recent ones I use React, the main reason is that I had previous experience with using it and there were several Frameworks which attracted me.
                    It is mostly about being comfortable, I do see myself liking Angular more if I had more experience with it.
        </Box>
        <Box mb={20} align="center">
            <a href=".."><u> An example of my current skill level ;)</u></a>
        </Box>
                
    </Box>
    </MotionBox>
</Container>






)

}


export default WebDev