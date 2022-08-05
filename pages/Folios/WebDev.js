import { Box, Container, Heading } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Image,OrderedList,ListItem } from '@chakra-ui/react';
import { Chrono } from 'react-chrono';

const Timeline = () => {
    const items = [
{
title:"circa 2008",
cardSubtitle:"Messed around with google blogs"

},
{
title:"2012",
cardSubtitle:"Finally learned about html"

},
{
title:"2015",
cardSubtitle:"Learned web-development in HighSchool"

},
{
title:"2018",
cardSubtitle:"Developed a javascript custom website for a final year project"    
},
{
title:"2021",
cardSubtitle:"Learned Angular,React and Next.js"

}
];



return (
    <div style={{ width: "350px", height: "auto" }}>
    <Chrono
      items={items}
      scrollable={false}
      useReadMore={false}
      disableClickOnCircle={true}
      disableNavOnKey={true}
      disableAutoScrollOnClick={true}
      hideControls={true}
      mode="VERTICAL_ALTERNATING"
      theme={{ 
        primary: "red",
        secondary: "transparent",
        cardBgColor: "transparent",
        cardForeColor: "violet",
        titleColor:"default"
      }}
    />
  </div>
  )

}

const MotionBox = motion(Box)
const WebDev = () =>{

return(


<Container>
<MotionBox
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{duration:0.3}}>


    <Box>
        <Box align="center" mb={12}>
            <Heading as="h2">
                Web-Development Journey
            </Heading>
        </Box>

        <Box textAlign="center" backgroundColor="red.400" mb={20}>
            A look into how I have improved my Web-development skills over the years, on and off.
        </Box>

        <Box mb={20} align="center">
        <Timeline></Timeline>
        </Box>
        <Box mb={12}>
            I've done Web-Dev since I was about 8, mostly because I was curious, but only really got into in during my Highschool years, where I learned Javascript, PhP and SQL.
            <br></br>
            It wasn't until my University years that I learned about Javascript frameworks... Could've made great use of them for my highschool last year project (The project was a Game in UE4) website, as I had to code animations with JS and mess way too much with old good raw CSS.
        </Box>

        <Box mb={20}>
        <MotionBox
        whileHover={{scale:1.2}}
        transition={{duration:.1}}
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
        whileHover={{scale:1.2}}
        transition={{duration:.1}}
        >

            <Image src="/images/AngularInterface.png"></Image>
            </MotionBox>
        </Box>
        <Box mb={20}>
        <MotionBox
        whileHover={{scale:1.2}}
        transition={{duration:.1}}
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


export default WebDev