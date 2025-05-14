import { Box, Container, Heading,Center,Text, Grid, SimpleGrid } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Image,OrderedList,ListItem,useColorModeValue } from '@chakra-ui/react';



const MotionBox = motion(Box)
const Donkeys = () =>{

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
            <ListItem>It implements authentication <em>(Not secure sutch as using OAuth)</em></ListItem>
            </OrderedList>

            <Box>
                        
                <Image src="/images/donkeys/page.png" ></Image>
                <Text mt={12}>On the main page, we can see the donkeys and the amount they gathered from donations so far, bellow them the comments made by staff about the activities of the donkeys.</Text>

                <Text mt={6}>All the boxes are dynamic, by that I mean they are gathered from a database on GCloud and then server side rendered to be displayed on the client, the values and the comments are also on the database.</Text>
                        
                <Image mt={12} src="/images/donkeys/profile.png"></Image>

                <Text mt={12}>The profile which aside from the data gathered from the database, it contains a box which is used by registered users to make comments on the donkeys using a POST method on the API.</Text>        
                
                <SimpleGrid columns={{sm:2,sm:2}} spacing={20}>  
                            
                <Image mt={12} src="/images/donkeys/register.png"></Image>
            
                <Image mt={12} src="/images/donkeys/login.png"></Image>
                
                </SimpleGrid>

                        
                    </Box>
                    
                    <Text mt={12}>This was a small project for learning GCloud where I decided to make it more visual, I found it to be simple to use in this usecase and I would be up for a bigger challenge with the use of different data formats and more complex architectures.

                    </Text>
            

    </Box>
                    

    </Box>
    </MotionBox>

</Container>

)

}


export default Donkeys