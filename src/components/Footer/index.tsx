// Libraries
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// Styles
import { StyledListItemButton, StyledFooter } from './styles'

interface IFooter {
  isDisabled?: boolean
  isSelected?: boolean
}

const Footer = ({ isDisabled = false, isSelected = false }: IFooter) => {
  return (
    <StyledFooter>
      <Container maxWidth={false} disableGutters={true}>
        <List disablePadding={true}>
          <Stack direction='row' alignItems='center'>
            <Box flex={3}>
              <ListItem disablePadding={true}>
                <Typography>&copy; 2020 New York Digital Investment Group LLC</Typography>
              </ListItem>
            </Box>
            <Box flex={1} alignItems='center'>
              <ListItem disablePadding={true}>
                <StyledListItemButton
                  data-testid='supportButton'
                  disabled={isDisabled}
                  selected={isSelected}
                >
                  {/* TODO: Update Link for Support */}
                  <ListItemText primary='Support' />
                </StyledListItemButton>
                <StyledListItemButton
                  data-testid='privacyButton'
                  disabled={isDisabled}
                  selected={isSelected}
                >
                  {/* TODO: Update Link for Privacy Policy */}
                  <ListItemText primary='Privacy Policy' />
                </StyledListItemButton>
                <StyledListItemButton
                  data-testid='termsButton'
                  disabled={isDisabled}
                  selected={isSelected}
                >
                  {/* TODO: Update Link for Terms of Service */}
                  <ListItemText primary='Terms of Service' />
                </StyledListItemButton>
              </ListItem>
            </Box>
          </Stack>
        </List>
      </Container>
    </StyledFooter>
  )
}

export default Footer
