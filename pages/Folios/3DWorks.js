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

        <Box align="center" mb={12}>
            <Heading as="h2">
                3D Works
            </Heading>
        </Box>

        <Box>

            <Image
            src="/images/3Dworks/1.jpg"
            alt={"Lantern"}
            mb={12}
            >

            </Image>


            <Box>
                Project done at a school presentation to show career paths to the youth finishing middle grade
            </Box>


            <Box textAlign={'right'} fontSize={'xs'} mb={12}>
                Software : Substance Painter , 3ds Max
            </Box>



            <Image
            src="/images/3Dworks/2.jpg"
            alt={"Archviz"}
            mb={12}
            >

            </Image>


            <Box >
                Archviz image, created during my first intership
            </Box>
            <Box textAlign={'right'} fontSize={'xs'} mb={12}>
                Software : 3ds Max , Vray , Photoshop
            </Box>


            <Image
            src="/images/3Dworks/4.jpg"
            alt={"3DPrintchar"}
            mb={12}
            >
            </Image>
            <Box>
                A Portuguese caricature made for a client with the purpose of 3D printing
            </Box>
            <Box textAlign={'right'} fontSize={'xs'} mb={12}>
                Software : ZBrush
            </Box>
        </Box>



    </MotionBox>
</Container>






)

}


export default DWorks