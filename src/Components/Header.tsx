import { Box, Container, HStack, IconButton, Link, Text } from '@chakra-ui/react'
import { LuX } from 'react-icons/lu'

export const Header = () => {
  return (
    <Box borderBottomWidth="1px" bg="bg.panel">
      <Container py="3">
        <HStack gap={{ base: '3', md: '4' }} justify={{ base: 'start', md: 'space-between' }}>
          <Box boxSize="8" display={{ base: 'none', md: 'block' }} />
          <Text fontWeight="medium">
            🎉 Hooray, your are in the Home page. Check out <Link href="#">what's new.</Link>
          </Text>
          <IconButton variant="ghost" aria-label="Close banner" colorPalette="gray">
            <LuX />
          </IconButton>
        </HStack>
      </Container>
    </Box>
  )
}
