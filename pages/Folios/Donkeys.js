import { Box, Container, Heading,Center } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Image,OrderedList,ListItem,useColorModeValue } from '@chakra-ui/react';



const MotionBox = motion(Box)
const Horror = () =>{

return(


<Container maxW="container.lg" pt={5} pb={5}>
    <MotionBox
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{duration:0.3}}>


    <Box>

            <Box align="center" mb={12}>
            
            
            
            <Heading as="h2" mb={12}>
                Donkeys
            </Heading>

            <Heading size={"md"} mb={12}>
                GCloud assignment of a donation website to support donkeys
            </Heading>

            
            <Box mb={20}> 
                Excuse the lack of images on the website I could not afford to keep the cloud storage up for the images;
                <br></br>
                <br></br>
                This fun project had with main objective the use of GCloud, I'd chosen to make a website and make use of NextJS with the gcloud library.
            </Box>

            <OrderedList listStyleType="square" spacing={3} mb={20} >
            <ListItem>The project had a self implemented REST API to communicate with gcloud</ListItem>
            <ListItem>The images, comments and everything related to the donkeys is fetched from gcloud</ListItem>
            <ListItem>It implements authentication <em>(Not secure sutch as OAuth)</em></ListItem>
            </OrderedList>


            

    </Box>
                    

    </Box>
    </MotionBox>

</Container>

)

}


export default Horror