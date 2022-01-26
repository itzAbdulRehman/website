import Logo from "./logo"
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
import ThemeToggleButton from "./theme-toggle-button"
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, _target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    const activeBGColor = '#88CCCA'
    return (
      <NextLink href={href} passHref>
        <Link
          p={2}
          bg={active ? activeBGColor : undefined}
          color={active ? '#202023' : inactiveColor}
          _target={_target}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    )
  }
  

  const NavBar = props => {
    const { path } = props
  
    return (
      <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#00000040')}
        style={{ backdropFilter: 'blur(15px)' }}
        zIndex={1}
        {...props}
      >
            <Container
            display="flex" 
            p={2} maxW="container.md" 
            wrap="wrap" align="center" 
            justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lgx" letterSpacing={'tight'}>
                        <Logo/>
                    </Heading>
                </Flex>

                <Stack
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{base: 4, nmd: 0}}
                >
                    
                    <LinkItem href="/projects" path={path}>
                    Projects
                    </LinkItem>
                    <LinkItem
                        _target="_blank"
                        href="https://github.com/ItzAbdulRehman"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                    <IoLogoGithub />
                    Github
                    </LinkItem>
                    
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton/>
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant="outline" aria-label="Options"/>

                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>
                                <NextLink href="https://github.com/ItzAbdulRehman" target="_blank" passHref>
                                    <MenuItem as={Link}>Github</MenuItem>
                                </NextLink>

                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar