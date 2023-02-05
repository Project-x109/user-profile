import { FormControl, FormLabel, Switch } from '@chakra-ui/react'

function Notifications() {
  return (
    <FormControl
    
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <FormLabel
        color="brand.white"
        htmlFor="notificationEmails"
        mb={0}
        cursor="pointer"
        userSelect="none"
      >
        Receive notification emails
      </FormLabel>
      <Switch id="notificationEmails" />
    </FormControl>
  )
}

export default Notifications
