import {Container , Box, Heading, useColorModeValue, Image, SimpleGrid} from "@chakra-ui/react" 
import WorkBox from './../components/Layouts/WorkBox';
import NextLink from 'next/link'

const Page = () => {
return (
        
        <Container maxW="container.md">
            
        <Box align="center" mb={12}>
                <Heading as="h2">
                    Wijnand Merkens

                </Heading>
            </Box>


        <Box borderRadius="lg" bg={useColorModeValue('orange.300', "rgba(237,137,54,.25)")} p={1} align="center" mb={10}>

                        GameDev graduate who loves Programming, 3D, Art and Web-Development

        </Box>





        <Box align="center" mb={12}>
          <Image
            borderColor="blackAlpha.700"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="150px"
            display="inline-block"
            borderRadius="full"
            src="/images/circle.png"
            alt="Profile image"
            
          />
        </Box>





        <Box>
            <Box align="center" mb={20}>
                <Heading as="h3" size="md" variant="section-title">
                Works
                </Heading>
            </Box>



      

                <SimpleGrid  columns={{ sm: 1, md: 2 }} spacing={6}>
                 
                <WorkBox imgSrc="/images/Website.jpg" name="WebDev"></WorkBox>
             
                {/* <WorkBox imgSrc="/images/UnrealGame.png" name="Unreal"></WorkBox> */}
            
                <WorkBox imgSrc="/images/UnityMP.png" name="UnityRPG"></WorkBox>
               
                <WorkBox imgSrc="/images/HorrorGame.png" name="Horror"></WorkBox>
               

                </SimpleGrid>
        </Box>



        </Container>
    )
}





export default Page