import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'

function AccountSettings() {
  
  return (
    <Grid 
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel color="brand.white">First Name</FormLabel>
        <Input borderColor="brand.dark"  bg="brand.light" color="brand.white" focusBorderColor="brand.blue" type="text" placeholder="Tim" />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel color="brand.white">Last Name</FormLabel>
        <Input focusBorderColor="brand.blue" bg="brand.light" type="text" placeholder="Cook" />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel color="brand.white">Phone Number</FormLabel>
        <Input
        bg="brand.light"
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="(408) 996–1010"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel color="brand.white">Email Address</FormLabel>
        <Input
        bg="brand.light"
          focusBorderColor="brand.blue"
          type="email"
          placeholder="tcook@apple.com"
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel color="brand.white">City</FormLabel>
        <Select bg="brand.light" focusBorderColor="brand.blue" placeholder="Select city">
          <option color="brand.white" value="california">California</option>
          <option color="brand.white" value="washington">Washington</option>
          <option color="brand.white" value="toronto">Toronto</option>
          <option color="brand.white" value="newyork" selected>
            New York
          </option>
          <option color="brand.white" value="london">London</option>
          <option color="brand.white" value="netherland">Netherland</option>
          <option color="brand.white" value="poland">Poland</option>
        </Select>
      </FormControl>
      <FormControl id="country">
        <FormLabel color="brand.white">Country</FormLabel>
        <Select bg="brand.light" focusBorderColor="brand.blue" placeholder="Select country">
          <option color="brand.white" value="america" selected>
            America
          </option>
          <option color="brand.white" value="england">England</option>
          <option color="brand.white" value="poland">Poland</option>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default AccountSettings
