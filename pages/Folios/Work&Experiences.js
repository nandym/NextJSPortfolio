import { Box, Container, Heading,Center,Text, Grid, SimpleGrid } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Image,OrderedList,ListItem,useColorModeValue } from '@chakra-ui/react';



const MotionBox = motion(Box)
const Workexp = () =>{

return(


<Container maxW="container.lg" pt={5} pb={5}>
    <MotionBox
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{duration:0.3}}>


    <Box>

            <Box align="center" mb={12}>
            
            
            
            <Heading as="h2" mb={12}>
            Work&Experiences
            </Heading>

            <Heading size={"md"} mb={12}>
                Worked at a large retail store
                    </Heading>
                    <Text>
                        During this time I filled the position of stock manager, this involed communication and team work.
                        <br></br>
                        Both a physical and mental job, I organized and moved stock both in the stock room and the shop floor while moving it from one another.
                        <br></br>
                        While striving to always help the team I was till trained to fill in as needed, and sticking around in the shop floor to help customers.
                        <br>
                        </br>
                        During my time here I improved my soft-skills of communication and being flexible.
                    </Text>
                    
            <Heading size={"md"} mb={12}mt={12}>
                Took part in teaching at two local events
                    </Heading>
                    <Text>
                        The first event was a 12 hour game jam, with 8 teams of 3-5 students they were challenged to develop a game surrounding a theme(specific local-culture), they were then scored by outside industry related judges to win a money prize.
                        <br></br>

                        <Image m={12} h={600} src="/images/Work&Exp/b.png" ></Image>
                        My role was to help the less experienced teams who weren't game development student to be able to make a game in these 12 hours. So a bug-catcher.
                        <Image m={12} h={600} src="/images/Work&Exp/b2.png" ></Image>
                        <Image m={12} h={600} src="/images/Work&Exp/b3.png" ></Image>
                        <br></br>
                        <br></br>
                        The second event was a mechatronics workshop that blended a game engine (unity) into it, during this week the students learned how to make the circuts to do anything they could think of and then implement unity to give better control.
                        <br></br>
                        <Image m={12} h={600} src="/images/Work&Exp/a.png" ></Image>
                        Last 3 days they were tasked with developing a projected, they decided on a robot arm and a miniature automated home.
                        <br></br>

                        <Image m={12} h={600} src="/images/Work&Exp/a3.png" ></Image>
                        The home was fully controlable by using unity with a 3D model for visual representation, lights, motors for the doors so on.
                        <br></br>

                        <Image m={12} h={600} src="/images/Work&Exp/a2.png" ></Image>
                        My personal favourite, the robot arm, using stepper motors we could gather the angle of the arm this allowed to display the 3D modeled and 3D printed arm in unity the same as real life, also using Inverse Kinematics we could simply move the end of the arm in unity and send the rest of the calculated angles to the real life arm. It was able to grab paper which was pretty impressive given the time.
                    
                        <Image m={12} h={600} src="/images/Work&Exp/a4.png" ></Image>
                    </Text>

           


    </Box>
                    

    </Box>
    </MotionBox>

</Container>

)

}


export default Workexp