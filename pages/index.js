import {Container , Box, Heading, useColorModeValue, Image, SimpleGrid, Flex,Text} from "@chakra-ui/react" 
import WorkBox from './../components/Layouts/WorkBox';
import NextLink from 'next/link'

const Page = () => {
return (
        
        <Container maxW="container.lg" > 
            

        <Container filter={"auto"} backdropFilter={"blur(5px)"} background={"blackAlpha.500"} boxShadow={"lg"} alignSelf="center"   m={12}display={"flex"}  borderColor={"black"}>
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

        <Box align="center" p={10} pl={28} opacity={1} mr={20} textAlign={"center"} alignSelf={"center"} mb={11} mt={1}>
                <Heading as="h2" fontSize={59} fontWeight={"extrabold"} fontFamily={"monospace"}>
                    
                    Wijnand Merkens

                </Heading>
            </Box>

            <Text bgGradient={"linear(to-l,green.300,white)"} bgClip={"text"} mixBlendMode={"luminosity"} p={5} fontSize={"5"} opacity={1} whiteSpace={"pre-line"} letterSpacing={0.6} fontFamily={"monospace"} overflow={"hidden"}>
;;::::;:;;;;:cccdddoolloodxdxddddolodddxodkkxkxOklllldooxkkkkkxxddolollooloxxdoodoccoddddolooolllllc
ccccc:::;;;ccccoooddollodkdxxxxkdlxxxoxkkxdxOkddkxxxoxxddxkkkkkxxdooddooxdddoooooollooodooddoooolllc
cclllc:::;;colloddloooloxdxxxddxxoodxxoxkkxxxdxxxddkxxOOkkkOkkkOOkkxdxdddoodooxxkdooxxdoooodddolollc
clllol:::::ldoloxdxdolldodddkkkkkoxxdxxxkkkkOOkxxxkkxxxxkkkkkkkkkOO0Okkkkkxxxxxxkdodxdoxdddodooollll
:ccllcc::::cdoloxxkdddlddkkxxkOOOdxkxxxxkOO0OkOO0kkkOkxkkkOOOOO00OOOOOOkxkOxdxkkxooodoxxxdddooooooll
lllcllcc:::ldolodxdodkdxxookOkkOkoxkdkkxOOO0kkO00OOOOOOOkOOOOOOOOO0000OOkxxxoxkkkdoodxxxxxxxddooolll
oooollcc:::ldolloolxxxdddxdoodddxodxddxxxkOxkOOkkkkk00000kOOkkkkO00000000OOkkdddxdodkkkxxxxdxxdooloo
lloodocc:::lodooldodxxkxxdddddoddldkdxkxkkxxxxkkkkOkOOOOOOkkxxxxOKKKKKK00000Okxkxoodkxkkxxddddddoooo
lclloocc:::ooxdooxoxkxxddddxkxkddoxkkOOkkkOOkxkxkOkOO00OOOOkO0kkOKKKKKKKKK0000xxxdddkkdddooooooooolo
ooooodcccc:olkdoxkxdxxxkOOkxkOOkklxkkkkOxk000kxkOkkkkOOOOOOOOOOxk0OOOOKKKKK0000xkddxkkOkkkxxdddxdddd
ddoddoccc::olxdokkkkOOOOOOOOOOOOOoxxkkOkdO0OkkxxxkxkkkOOOOOkOOkkxkO0OxOOKKKKO0K0kkxk0OOOOOkxxxdxxddd
dddodoccc::looooxxxkOkOOOOOO0OkOOokO0OkkOOxdoolllollddddxxxO0OOOkOOOkkkkKKKK0O0KkxxO0OOkOOkxxxxdddoo
ddddoocc:::ooooodxddkkOOOOOkOkkOOokOOOOxdollllllllollclllodxOOOOOOkkxk0kOO0OOkO0Odooxkkxxxxxdxddooox
ooddddccc::oooolddddxOOOOkxkkkOO0okOOxlllcccclcccllcccccccclodxOkkkkkkOkkxxxkkkkdooxxdddoddddddoodoo
xxxxddcc:::ldoodxdoddkkkOOOOO0OO0okxolccccccc:cloxxdollccccc:clxOOkOxdxxxxkdxxkkooxOkxddddododdddddo
dxxdddcc:::ldolodxdddO0000kOkkO0kodocllllloccoxkO00OOkkkxxxdocccoxOOkxddddxdkddxxoxOkxdddxdddoddlool
odddddccc::cdoooxkddxOOOOkkxxxxxxdlloddodolldkO0KK000000OOOOkxc::okkxxddxdxddxxdxodkxxxxdxxdddxdoodd
doooddcc:::lxoloxxdxxk00O0kxxdlkxoloodxOkdldkO0KKK000000000OOkd::lxkkxdxxdxxkxxdxxOxdddxdxkkdddddodd
xdxdddcc:::cxoodxxxxxk0OxkxkOockOolcodk0kdokO0KKKKKKKKK0000OOkd::ldxkkxdoxxdkkkkodkkkddxxxkxddddodxd
xxdddocc:::lkOkdkOxxkkOdddx0Oockxoccox00kdokO0KKKKKKK00OkkkOOkd::dxxxkkxxxdkkkOkdx0kxddkxkkxdxxxdxxx
ddxkxoccc::lOOOxk0xxxdxdddkOOdlxdl:cdkxollccloddkOOkdlllllccloxc:d0kxxkxxdOOOxkxkO0kdddxdOOOkkkxkOOk
doodolc::::lxxkkxOkdxdxkdkkOkxoooc:cxdoollcccclookOoclccclllllol;coxOkddxdk0OkkkOOKkxdxdxOOOOOOkxxxx
xdxxllc::::coooxdkkdxkOOOOkOkxollccl0Odlllccllodo0Xkcllollllodxd:cldkxoxkdxOxxOkkk0OOxdox0O0OkkOOOkx
odolclc::::lOOOkoxOdOOkOkkkxxddOoooo00OkxxodxkxxOKX0xoxxxxxxxxkx:cclxddkOkkkxOOkkxOkkkOOOkxkxdddxkOO
olllloc::::lOOOOoxOdOOkOOOkkxdlkddocO0000kxxkOOO0KXKOxxkkkxxkxxd:loooddO0000kO0kddOOOxxxkkxkddddodkx
llololc::::cdoxkoddokxxkxxkxkdlxkxdodO0000O0O0OO0KK0kxkOOOOkxdxdodkxddxxxxdooolddxkxkOOOOkkxdxxooodd
oollcl:::;;:cccllooodddodooooccddxkOOOOO000OO00kodolclxkOOOxddxdxkOOkkOOOxxxxdddkO0OOOOOOOOOOOOkkkkk
:lllll:;;:;:cc:clloldoooollloccooodkkxOO000OkO000OxkxkkkkkkkxdxkOK0KKKKKKKKKK0O0KXKKKKKK000000OOOOOO
cllllc;;;:;:c:::clloooolllclo:cooooollOO00OkxdddddxoodoodxxxxxxdxxxddddxxxkkxxkkKXOkkkkxxxxdddoooool
ccllll;;;;,:c:c:llllooodllccl::lllllccokO0kxdkxddddooodxdddxxddddxdddxxxdxddxxxkXOdlcccccccccc::::::
c:ccll;;;;,:lc::cccloooolllll::olllollloOkxxxkkkxxxxddxddooooxddddddddddddodxxxKOxlcccccclccllllcccl
c:ccll;;;;,:cccclllollloocclc;;lllclclloO0kxxxkO0OkkkxxollloxOodOOOOOOOO0xxxxxOKkdlllcllcllloooooool
cc:cll;,;;;:lcccclllolloloccc:;lclllc:;;x0OkxdoooooolccclodxkOd::cdxxk0KkdddddKOklcccccccccccloolllc
cc::cl;,,;,;l:::ccllloclllccc;;lcllc;;;;oOOOkkkdolcccclooddxkkk:;;;:::lddlcoo0kOxccc::ccccccccoollc:
:cl::l;,,,,;lccc:clcllllolccl;;cl:::;;;;ckOOOOkxxddooooddxxxkkkxc:;:::;;:::oOOOOxollccccc:::::::::::
c::::c;,,;:;ccc:::lllllollccc;:lc:::;,;;:dkOOOkxxddoooddxxxxxxkkOOx:::::;;;:loOkxxxxxxddddooooolllll
cccc:c;,,,,;cccc::cllllololcc;;cc:;:;;;;:odkOOkkxxxdddddxxxxxxxOOOOOd:::::::;;:ccllccc:::::::::;;;;;
;::cc:;,,,,;cccc:lccclllllccc;:cc:;;;;;:codxxkkkxdddoddxxxxxkkkkOOOOOd;:::::::::cddddlllllcccc::::::
:::::c;,,;,;cc:::c::ccolllccc:::;::;;;;codddxxkkxxdddddxkkkkkkOOOOOOOk::::::;;;;::::cc::clooo;;c:cc:
;:::;:;,,;,;cc:c:c:cclllcc:::;;;;;:;;;cooodxxkkOkkxxxxxkkkOOkOOOOOOOOOc;:::::::;;;;;:::ccoodl:collll
c:::c:;,,;;;lc:ccccclcc::;::;;;;;;;;;;oddxxdddxxxxxxxkkkkkkOOOOOOOOOkOo;;:::::::::;;;;;;;:oooccoooll
;:::::;,,,;;cc:::ccc::;;;;;;;;;;;;;;;:ddxkxkkkkkkkkkkkkOOOOOkkkOkkkkkOo;:::::::::;:::::;;;:loollllll
;;::;:;,,,,;:c:cc:::;;;;;;;;;;;;;;;;;:dxxxxxkkkkOOkkkkkOOOkkkkkkkkkkkko;:::::::::::;;;;;;;;:llllllll
;;::::;,,,,;:c::;;;;;;;;;;;;;;;;;;;;;cdxxxxxxkkkkkkkkkkkkkxxkkkkkkkkkkl;;::;;;;;;;;;;;;;;;;;::::::;;
::;;::;,,,,;:;;;;;;;;;;;;;;;;;;;;;;;;cddxxxxxkkkkkkkkkkkkxxxkkkkkkkkkko;:;;;;;;;;;;;;;;;;;;;;::::::;
;;:;;;;;;;;:;;;;;;;;;;;;;;;;;;;;;;;;;lodxxxxxxxxkkkkkkkkxdxxkkxxxxkxxxl;:;;;;;;;;;;;;;;;;;;;;;:ccc::
;;;;;,,,;:;;;;;;;;;;;;;;;;;;;;;;;;;;;loddxxxxxxxxxkkkkxxddxxxxxxxxxxxxl;;;;;;;;;;;;;;;;;;;;;;;;:::::
;;:;,,,,;;;;,;;;,;;;;;;;;;;;;;;;;;;;:oddddxxxxxxxxxxxxdddxxxxxxxxxxxxdc;;;;;;;;;;;;;;;;;;;;;;,;;;;;;
;;;;,,,,,;;;,,,,,,,;;;;;;;;;;;;;;;;;:oddddddxxxxxxxxxddodxxxxxxxxxdddd:;;;;;;;;;;;;;;,;;;;;,,,,;:;;;
,;;:,,,,;;;;,,,,,,,;;;;;;;;;;;;;;;;;:ddddddddxxxxxxxddodddxxdddddddddo;;;;;;;;;;;;;;;,,;;,,,,,,;;;;;

                    </Text>
                    
            </Flex>
        <Box  textAlign={"center"}  p={5} fontFamily={"monospace"} fontSize={16} >

                        GameDev graduate on the adventure of Programming, 3D, Art and Web-Development

        </Box>
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