import {Container , Box, Heading, useColorModeValue, Image, SimpleGrid, Flex,Text} from "@chakra-ui/react" 
import WorkBox from './../components/Layouts/WorkBox';
import NextLink from 'next/link'
import '@fontsource-variable/jetbrains-mono'

const Page = () => {
return (
        
        <Container maxW="container.lg" > 
            

        <Container filter={"auto"} backdropFilter={"blur(5px)"}  alignSelf="center"   m={12}display={"flex"}  borderColor={"black"}>
          {/* <Image
            
            borderColor={useColorModeValue('#fe640b', '#fab387')}
            borderWidth={2}
            borderStyle="solid"
            maxWidth="154px"
            display="inline-block"
            borderRadius="full"
            src="/images/PhotoZ.jpg"
            alt="Profile image"
          /> */}
            <Flex direction={"column"}>

            <Flex direction={"row"}>

        <Box align="center" p={10} pl={20} opacity={1} mr={20} textAlign={"center"} alignSelf={"center"} mb={11} mt={1}>
                <Heading letterSpacing={"widest"} as="h2" fontSize={59} fontWeight={"extrabold"} fontFamily={"JetBrains Mono Variable, monospace"}  color={"#d66853"}>
                    
                            Wijnand
                            Merkens

                </Heading>
            </Box>

            <Text userSelect={"none"} bgGradient={"linear(to-t,green.400,white)"} bgClip={"text"}  p={5} fontSize={"4.3"} opacity={1} whiteSpace={"pre-line"} letterSpacing={0.6} fontFamily={"JetBrains Mono Variable, monospace"} overflow={"hidden"}>
,,,:,::::,,,,,::cclllccccccclllllllcccclllllclkkllkkklccccllclkkkkkklllllcccccccccllllccllc:ccllllccccccccccc:
:::::::::,,,::::cccllcccccclllllllklcckllckkklllkklllklklclllcllkkkkklllcccllcclllclcccccccccccllcclllccccccc:
::cc:::::,,,:cc::clcccccccllllkklllllcllllllkkklklllllllkklkkkkkkkkkkkkkkllllclcccllclllklcclllcccllllccccccc:
:ccccc:::::::lcccllllccccllccllllkkllclcllllkkllkklllllkllllkkkkkkkllkkkkkkkkkkkklllllllklcclllclllccccccccccc
::cccc:::::::llcclllllllccclklklkkkkklkkllkllkkOOkOkkklkkkkllkkkkOkkkkkkkkkkkkklkkllklllllcclccllllllcllccccc:
::::cc:::::::llcclllllclclklllkkkkkklckklllkkkkkkkkkOOkkkkkklkkkkkkOkkOOOkOkkkklllklllkkklcclllllllllclccccccc
cccc:cc:::::clccccllcclklllllclkklkklckllkklkkkkkkkkkkkkkkOO0OkOOkOkkkkkOOOOOOOOkkllclkllkcclkkllllllllllccccc
ccccccc:::::cclccccccllllllllllcccllccllclllllkllkkkkkkkkkkkkkkkkklkkkk00OOO00OOOOkkklllllcckkklllllllllcccccc
::ccclc:::::cclcccclcllkklkllllllcclcclklkklkklllllkkkkkkkkkkkkkkklllklO000000OOOOOOkklkllcclklkklllllllllcccc
c:ccccc:::::cclllcllclklllllllkklkllcckkkkkkkkkOkllklkkkkkkOkkkkkkOOkkk000000000OOOOOOllklllkklllllllccllccccc
ccclclc:::::cclkclkklllllkkkkllkkkkklckkkkkklkOOOOllkkkkkkkkkOOkkkkkOkkkkkkkk000000OOOOlklllkkkkkkklllllllllll
llclllc:::::ccllclklkkkkkkkkkkkkkkkklclkkkkklkOOkkkllkklkkkkkkkkkkkkkkklkkOklkk0000OkO0kkkllOOkkkkkkllllllllll
lllcclc:::::cclccckllkkkkkkkkkkOkkkklckkkkkkkkklccccccccccllllllkkOkkkkkOkkkkklO0000kO00kllkOOkkkkkkllllllllcc
llcllcc:::::ccccccklllkkOkkkkkkkllkklckkkkOklccccccccccccccccccllkkkkOkkkkklkkkkO0OOOkO0kllllkkklkkllllllccccl
ccllllc:::::cccccclllllkkOkkkllkkkkOlckOklcccc::::ccccccc::::::cccllkkkkkkkkkkkllllkkkkklccclllclllllllllcccll
llllllc:::::clccclklccckkkkkkkkkOkkOlckklcc::::::::::cccc::::::::::cclkklkklkkklllllllklcclklllllllclllllcllcc
llllllc:::::clcclllccllkkkOOkkOkkkOOlclcccccc:cc::cclkkkkllllccccc:::clkkkkkllllllllklkklclkllllllllllcllllccc
ccllllc::::::lcccckllllkOOOkklklkkkllccccccccccccllkOOOOOOkkkkkkkklc:::clkkkllllllllllllkllkkllllclllllllccccc
lcllllc::::::lcccckllllkkkkkOklllclllcccllllllcclkkOO00OOOOOOOkkkOkkc:::lkklllllllklkkklllllllllllkkllclllclll
lcccclc::::::klccckllllkOOOkOllklclklccclllkklcckkO00000OOOOOOOOOkkkl:::clkkklllclllklllllkklllllllkkllllllcll
llllllc::::::llccllklllkkOllklkkc:lklc:cllkOklclkO00000000000OOOOkkkl:,:lllklllcllllkkkkclkkkllllllkllllllclll
llllllc::::::lkkklkkllkkklcllkOkc:lkc::clkOOklckkOO0000000OOkkkkkkkkl:,cllllkklllllkkkkkllkkklllklkkllllllllll
llllllc::::::kkkOlkklllllllclkkklcllc::clklccc::cclllkkkklccccc:::cclc,ckkkllkkllkkkklklkkOkllllllkkkkllklkkkk
llcllcc::::::klkOlkOlllllkllkkkklcccc::clccccc::::cccckkl:cc:ccccccccc::cllkllllllOkklkkkk0kllllllkkkkkkkllllk
lclllc:::::::ccckllkllllkkkkkkkklcc::::lOlcc:::::c:cccO0kccccc::::ccll:::ckklclklckklkkkkkOkkkclclOOkkkkkkkkll
clllc:c::::::klkOclkllkkkkkkkklllcllcc:l0kklllcccllllk0P0lcllllllllllkc:::cllllkkllllkkllkkkkkkkkkkkkkllllkkkk
ccc:::c::::::kkkOllkklkkkkkOkklllcklcl:lO0OOkllllkkkk00P0klllkkklllllk::ccllllOP000Ok0Okllkkklllllllklllllllkk
c:ccccc::::::lkkOlclllkkkkllkkkkl:lkllcckOOOOkkkkOOkkOPPPOklkkkkkkllllccclcclcllllllllllllkkkkkkkOkkkllllcccll
cccccc:::::::c:clcclllllllllllllc:lklllllkkkOOkOOOOkklkkllclkkkkkllllllllOkllkkkllclccclllkllkkklkllllllcclcll
cccc::c,:,,,:c:::ccccclllccccccc::clclkOkkkkOOOkkkOOkllcccclkkkkkklllllkkOOOOO00OkkkkklkO00OOOOOO0OOOOOOOOOkkk
::ccccc,,,:,:::::cccc:lccccc:ccc::lcccllckOkOOOkkkkOOkkkkkkkkkkkkklllkkOOOOOOOOOOO00OkkOO00OO00OOOOOOkkkkkkkkk
:ccccc:,,,:,,:::::c:ccclcccc:ccc::cccccccckkOOkklcllllllcccccclllllllllllllllllklkklllkk0Pkkkkklllllcccccccccc
::cccc:,,,,,,:::::ccccccclccc::c,::ccccc::ckkOklllklllllcccclllcllllclcllllllllllllllllkPklc::::::::::::::::::
::::cc:,,,,,,c:::::::ccccccccc:c,:cc:ccc:ccckkklllkklllllllllllccccllllllllllllllcllllkPOlc::::::::::cccc:::::
:::::c:,,,,,,:::::cccccccccc:cc:,,ccccccccccOOklllkkOOOkkkkllccccclklckkkkkkkkkkklllllk0klccc:ccc:cccccccccccc
:::::c:,,,,,,c:::::cccccccccc::c,,c:c:cc::,:lOkkllcccllllccc::ccllkkl::clkkkk00Ollllll0kkcc::::::::::::cccccc:
:::::c:,,,,,,c:::::ccccc:ccc::::,,c:ccc:,,,,lkkkkkllcc::::::ccclllkkk:,,:::::cklccccckkklc:::::::::::::cccc:::
:::::c:,,,,,,c::::::c:cccccc:::c,,:c::::,,,,ckkkkkkklllcccccclllllkkkl:,,,,,,:::::cckkkklc::::::::::::::::::::
::::,::,,,,:,:::::::c:ccccccc:::,,:::,::,,,,:lkkkkkklllllccclllllllkkkklc:::::,,,,:lklkkkllllcccccccccc:::::::
::::,::,,,,,,:c::::::c:cccccc:::,,cc::::,,,,:clkkkkkklllcclllllllllllkkkOkc::::::,,,:cllllllccccccccccc:::::::
:::::::,,,,,,::::::::cc:c:cccc::,,:c:,,,,,,,:cllkkkkllllllllllllllllkkkkkkkl:::::::::,,::c::::::::::::::::::::
:::::::,,,,,,::::::c::::ccccc:::,::::,,,,,,::cclllkklllllccllllllkkkkkkkkkkkl,:::::::::::llllcccccc:cc::::::::
:::::::,,,,,,:::::::::::cc:cc::::,:,::,,,,,:cllllllkkllllllllkkkkkkkkkkkkkkkk:,:::::,,,,::::::::::cccc:,::::::
,:::,,:,,,,,,:c:::::::c:cc::::::,,,,,:,,,,cccclllkkkkkkkllllkkkkkkkkkkkkkkkkkc,:::::::::,,,,,:::::cclc::cccccc
:::::::,,,,,,:::::::::cc:::,,::,,,,,,,,,,:lllllllllllllllllkkkkkkkkkkkkkkkkkkc,,::::::::::,,,,,,,,:cccc:cccccc
:::::::,,,,,,::::::::::::,,,,:,,,,,,,,,,,:lllllkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkl:::::::::::,,,::::::::clcccccccc
,,::,::,,,,,,::::::::::,,,,,,,,,,,,,,,,,,:llllllkkkkkkkkkkkkkkkkkkkkkkkkkkkkkl::::::::::::::,,,,,,,,,ccccccccc
,,:,,::,,,,,,::::::,,,,,,,,,,,,,,,,,,,,,,clllllllkkkkkkkkkkkkkkkklkkkkkkkkkkkc,,::::,,,,,,,,,,,,,,,,::::::::::
:,:::::,,,,,,:::,,,,,,,,,,,,,,,,,,,,,,,,,clllllllkkkkkkkkkkkkkkkllkkkkkkkkkkkc,::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
:,,,,::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,cllllllllkkkkkkkkkkkkllllkkkkklkkkklc,::,,,,,,,,,,,,,,,,,,,,,,:::::::
,,,,,,,,,,:::,,,,,,,,,,,,,,,,,,,,,,,,,,,:ccllllllllllkkkkkkkklllllkklllllllllc,:,,,,,,,,,,,,,,,,,,,,,,,:::::::
,,,,,,,,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:clllllllllllllllllllllllllllllllllllc,,,,,,,,,,,,,,,,,,,,,,,,,,::::,,
,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:clllllllllllllllllllclllllllllllllll:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:cllllllllllllllllllcllllllllllllllll:,,,,,,,,,,,,,,,,,,,,,,,,,,,,:,,,
,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:llllllllllllllllllcclllllllllllllllc,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

                    </Text>
                    
            </Flex>
        <Heading  textAlign={"center"}  p={5} fontFamily={"monospace"} size="sm" color={"#D66853"}>

                        GameDev graduate on the adventure of Programming, 3D, Art and Web-Development

        </Heading>
            </Flex>
        </Container>

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
                <WorkBox imgSrc="/images/godot.png" name="Godot"></WorkBox>
                <WorkBox imgSrc="/images/workexp.png" name="Work&Experiences"></WorkBox>
                <WorkBox imgSrc="/images/donkeys.png" name="Donkeys"></WorkBox>
                <WorkBox imgSrc="/images/Website.jpg" name="WebDev"></WorkBox>        
                {/* <WorkBox imgSrc="/images/UnrealGame.png" name="Unreal"></WorkBox> */}
                <WorkBox imgSrc="/images/3Dworks/2.jpg" name="3DWorks"></WorkBox>
                <WorkBox imgSrc="/images/BingerWinner.png" name="BingerNinja"></WorkBox>
                    

                {/* <WorkBox imgSrc="/images/UnrealGame.png" name="HeadBang"></WorkBox>  */}
                </SimpleGrid>
            </Box>
        </Box>

        </Container>
    )
}


export default Page