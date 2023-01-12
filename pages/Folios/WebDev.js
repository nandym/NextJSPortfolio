import { Box, Container, Heading } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Image,OrderedList,ListItem } from '@chakra-ui/react';
import { Chrono } from 'react-chrono';

const Timeline = () => {
    const items = [
{
title:"circa 2008",
cardSubtitle:"Google Blogs"

},
{
title:"2012",
cardSubtitle:"HTML"

},
{
title:"2014",
cardSubtitle:"Php Games"
},
{
title:"2015",
cardSubtitle:"HighSchool WebDev Classes"

},
{
title:"2018",
cardSubtitle:"Used JS for a custom Website"    
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


<Container maxW="container.md" boxShadow={"dark-lg"} pt={5} pb={5}>
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
            Resume on my web development journey.
        </Box>

        <Box mb={20} align="center">
        <Timeline></Timeline>
        </Box>
        <Box mb={12}>
            Google Blogs was responsible for piquing my interest in web development but only really got into it during my highschool years, where I learned Javascript and SQL.
                    <br></br>
                    <br></br>
                    To explain, the Php games were made using webSockets and ranged from tic tac toe to an Orc sprite mining gold for score.
                    <br></br>
                    <br></br>
            During University I learned about Javascript frameworks, and this is where we are
        </Box>

        <Box mb={20}>
      

        <Image src="/images/Website.jpg"></Image>
        

        </Box>
        <Box mb={20}>
        

            <Image src="/images/AngularInterface.png"></Image>
          
        </Box>
        <Box mb={20}>
     
            <Image src="/images/WorkBoxesHtml.png"></Image>
           
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