import {Container , Box, Heading, useColorModeValue, Image, SimpleGrid} from "@chakra-ui/react" 
import WorkBox from './../components/Layouts/WorkBox';
import NextLink from 'next/link'

const Page = () => {
return (
        
        <Container maxW="container.md">
            
        <Box align="center" mb={12} mt={8}>
                <Heading as="h2">
                    Wijnand Merkens

                </Heading>
            </Box>

        <Box borderRadius="lg" border={"2px"} borderColor={useColorModeValue('orange.400', 'orange.200')} p={5} align="center" mb={10}>

                        GameDev graduate on the adventure of Programming, 3D, Art and Web-Development

        </Box>





        <Box align="center" mb={12} boxShadow={"dark-lg"} p={5}>
          <Image
            borderColor="blackAlpha.700"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="154px"
            display="inline-block"
            borderRadius="full"
            src="/images/PhotoZ.jpg"
            alt="Profile image"
          />
        </Box>





        <Box>
            <Box align="center" mb={10}>
                <Heading as="h3" size="md" textDecoration={"underline"} textUnderlineOffset="5px">
                Works
                </Heading>
            </Box>

           

      
            <Box position={"absolute"} left="50%" transform={"translateX(-50%)"} maxWidth="100%">

                <SimpleGrid  columns={{ sm:1, xl:2 }}  spacing={6} boxShadow={"dark-lg"} p={5} rounded={"lg"}>
                 
                <WorkBox imgSrc="/images/BingerWinner.png" name="BingerNinja"></WorkBox>
             
                {/* <WorkBox imgSrc="/images/UnrealGame.png" name="Unreal"></WorkBox> */}
            
                <WorkBox imgSrc="/images/UnityMP.png" name="UnityRPG"></WorkBox>
               
                <WorkBox imgSrc="/images/HorrorGame.png" name="Horror"></WorkBox>
                
                <WorkBox imgSrc="/images/3Dworks/2.jpg" name="3DWorks"></WorkBox>

                <WorkBox imgSrc="/images/Website.jpg" name="WebDev"></WorkBox>
                
                <WorkBox imgSrc="/images/UnrealGame.png" name="UnrealGame"></WorkBox>

                <WorkBox imgSrc="/images/UnrealGame.png" name="HeadBang"></WorkBox>

                </SimpleGrid>
            </Box>
        </Box>
        <Box mb={1200}></Box>


        </Container>
    )
}





export default Page