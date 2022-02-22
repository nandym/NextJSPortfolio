import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon,ChevronLeftIcon } from '@chakra-ui/icons'
import { MotionConfig } from 'framer-motion'
import NextLink from 'next/link'
const ThemeToggle = () => {
    const{toggleColorMode}=useColorMode()
    return(
       

        <IconButton aria-label="Toggle"
             position={'relative'}
             m="15px auto"
             borderColor={useColorModeValue("light","dark")} borderWidth={2} borderRadius="xl"
             colorScheme={useColorModeValue("light","dark")}
             icon={useColorModeValue(<MoonIcon color="Blue"/>,<SunIcon color="red"/>)} 
             onClick={toggleColorMode}
          />

          

    )

}

const Return = () =>{
    return(
        <NextLink href={"/.."}>

            <IconButton aria-label='Return'
            position={'relative'}
            m="5px auto"
            borderColor={useColorModeValue("light","dark")} borderWidth={2} borderRadius="xl"
            colorScheme={useColorModeValue("light","dark")}
            icon={useColorModeValue(<ChevronLeftIcon color="Blue"/>,<ChevronLeftIcon color="red"/>)} 

            mr={3}
            />
    </NextLink> 
    )
}

export {ThemeToggle,Return}
