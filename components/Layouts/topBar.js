/* eslint-disable react-hooks/rules-of-hooks */
import { IconButton, useColorMode, useColorModeValue,Box } from '@chakra-ui/react'
import { SunIcon, MoonIcon,ChevronLeftIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { useRouter } from 'next/router'



const MotionBox = motion(Box)

const ThemeToggle = () => {
    const{toggleColorMode}=useColorMode()
    return(
       
<MotionBox
                whileHover={{scale:.90}}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{type:'spring',bounce:0.25}}
                whileTap={{scale:1.2}}
                >

        <IconButton aria-label="Toggle"
             position={'relative'}
             m="15px auto"
             borderColor={useColorModeValue("light","dark")} borderWidth={2} borderRadius="xl"
             colorScheme={useColorModeValue("light","dark")}
             icon={useColorModeValue(<MoonIcon color="Blue"/>,<SunIcon color="red"/>)} 
             onClick={toggleColorMode}
             />

             </MotionBox>
          

    )

}


const Return = () =>{
    const router = useRouter();
    
    if(router.pathname != "/"){
        return( <NextLink href={"/.."}>

    <MotionBox
                whileHover={{scale:.90}}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{type:'spring',bounce:0.25}}
                whileTap={{scale:1.2}}
                >

        <IconButton aria-label='Return'
        position={'relative'}
        m="5px auto"
        
        borderColor={useColorModeValue("light","dark")} borderWidth={2} borderRadius="xl"
        colorScheme={useColorModeValue("light","dark")}
        icon={useColorModeValue(<ChevronLeftIcon color="Blue"/>,<ChevronLeftIcon color="red"/>)} 
        />
        </MotionBox>
    </NextLink> )
    }
    return(null)
    
}

export {ThemeToggle,Return}
