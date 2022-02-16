import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { MotionConfig } from 'framer-motion'
const ThemeToggle = () => {
    const{toggleColorMode}=useColorMode()
    return(
        <IconButton aria-label="Toggle"

             borderColor={useColorModeValue("light","dark")} borderWidth={2} borderRadius="xl"
             colorScheme={useColorModeValue("light","dark")}
             icon={useColorModeValue(<MoonIcon color="Blue"/>,<SunIcon color="red"/>)} 
             onClick={toggleColorMode}
          ></IconButton>

    )

}

export default ThemeToggle