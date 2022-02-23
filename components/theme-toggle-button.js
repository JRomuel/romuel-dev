import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaSun,FaMoon } from "react-icons/fa";


const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (

        <IconButton
          ml={1}
          aria-label="Toggle theme"
          bg="transparent"
          icon={useColorModeValue(<FaMoon />, <FaSun />)}
          w={5}
          onClick={toggleColorMode}
        ></IconButton>
  )
}

export default ThemeToggleButton
