import { Box, Icon } from '@chakra-ui/react'
import { IoCodeSlash, IoHeart } from 'react-icons/io5'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} AbdulRehman<br/>
      <Icon as={IoCodeSlash}/> with <Icon as={IoHeart}/>
    </Box>
  )
}

export default Footer