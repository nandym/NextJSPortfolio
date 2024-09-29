import {Container , Box, Heading, useColorModeValue, Image, SimpleGrid} from "@chakra-ui/react" 
import WorkBox from './../components/Layouts/WorkBox';
import NextLink from 'next/link'

const Page = () => {
return (
        
        <Container maxW="container.lg">
            

        <Box alignSelf="center" m={12} p={10} display={"flex"} flexDirection={"row"}>
          <Image
            
            borderColor={useColorModeValue('#fe640b', '#fab387')}
            borderWidth={2}
            borderStyle="solid"
            maxWidth="154px"
            display="inline-block"
            borderRadius="full"
            src="/images/PhotoZ.jpg"
            alt="Profile image"
          />
        <Box align="right" ml={32} textAlign={"center"} alignSelf={"center"} mb={12} mt={1}>
                <Heading as="h2" fontSize={52} fontWeight={"extrabold"}>
                    
                    Wijnand Merkens

                </Heading>
            </Box>
        </Box>
        <Box borderRadius="full" textAlign={"center"} rounded={"lg"} boxShadow={"lg"} border={"0px"} borderColor={useColorModeValue('#fe640b', '#fab387')} p={5} mb={20} >

                        GameDev graduate on the adventure of Programming, 3D, Art and Web-Development

        </Box>

        <Box>
            {/* <Box align="center" mb={10}>
                <Heading as="h3" size="md" textDecoration={"underline"} textUnderlineOffset="5px">
                Projects
                </Heading>
            </Box> */}

            <Box position={"relative"}  maxWidth="100%">

                <SimpleGrid  columns={{ sm:1, xl:2 }}  spacing={10}  p={1}>        
                <WorkBox imgSrc="/images/UnityMP.png" name="UnityRPG"></WorkBox>
                {/* <WorkBox imgSrc="/images/UnityMP.png" name="Donkeys"></WorkBox> */}
                <WorkBox imgSrc="/images/HorrorGame.png" name="Horror"></WorkBox>
                <WorkBox imgSrc="/images/Website.jpg" name="WebDev"></WorkBox>        
                {/* <WorkBox imgSrc="/images/UnrealGame.png" name="Unreal"></WorkBox> */}
                <WorkBox imgSrc="/images/3Dworks/2.jpg" name="3DWorks"></WorkBox>
                <WorkBox imgSrc="/images/BingerWinner.png" name="BingerNinja"></WorkBox>
{/*                 
                <WorkBox imgSrc="/images/UnrealGame.png" name="UnrealGame"></WorkBox> */}
{/*
                <WorkBox imgSrc="/images/UnrealGame.png" name="HeadBang"></WorkBox> */}
                </SimpleGrid>
            </Box>
        </Box>

        </Container>
    )
}


export default Page