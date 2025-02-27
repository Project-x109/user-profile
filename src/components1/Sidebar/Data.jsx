import { Box, Text, VStack } from '@chakra-ui/react'

const list = [
  {
    id: 1,
    name: 'Loans Requested',
    value: 32,
    color: 'yellow',
  },
  {
    id: 2,
    name: 'Credit Score',
    value: 26,
    color: 'green',
  },
  {
    id: 3,
    name: 'Approved Loans',
    value: 6,
    color: 'cadet',
  }
]

function Data() {
  return (
    <VStack as="ul" spacing={0} listStyleType="none">
      {list.map(item => (
        <Box
          key={item.id}
          as="li"
          w="full"
          py={3}
          px={5}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor="brand.dark"
        >
          <Text color="brand.white">{item.name}</Text>
          <Text color={`brand.${item.color}`} fontWeight="bold">
            {item.value}
          </Text>
        </Box>
      ))}
    </VStack>
  )
}

export default Data
