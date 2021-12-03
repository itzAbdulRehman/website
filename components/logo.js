import Link from 'next/link'
import { Text, useColorModeValue, Icon } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { MdOutlineAlternateEmail } from 'react-icons/md'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 20px;
    line-height: 20px;
    padding: 10px;
`

const Logo = () => {
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Text 
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeight="bold"
                    ml={3}
                    >
                        <Icon as={MdOutlineAlternateEmail}/>itexpert120
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo