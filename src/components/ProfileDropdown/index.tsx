// Libraries
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Paper } from '@mui/material'
import Typography from '@mui/material/Typography'

// Styles
import {
  DropdownStyles,
  StyledAccordion,
  StyledAccordionSummary,
  StyledMenuItem,
  StyledMenuList,
  StyledLink,
} from '../ProfileDropdown/styles'

// Themes
import theme from '../../themes'

interface IProfileDropdownProps {
  isDisableGutters: boolean
  isDisabled: boolean
}

const ProfileDropdown = ({
  isDisableGutters = false,
  isDisabled = false,
}: IProfileDropdownProps) => {
  return (
    <DropdownStyles>
      <StyledAccordion disableGutters={isDisableGutters} disabled={isDisabled}>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography fontSize={theme.spacing(1.6)} align={'inherit'} variant={'h4'}>
            Food Bar Inc
          </Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Typography fontSize={theme.spacing(1.6)} align={'inherit'} variant={'h4'}>
            Hello, world
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <Paper>
        <StyledMenuList>
          <StyledMenuItem>
            {/*TODO: Add Link from next/Link*/}
            <StyledLink variant={'h4'}>Address</StyledLink>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledLink variant={'h4'}>Documents</StyledLink>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledLink variant={'h4'}>Profile Settings</StyledLink>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledLink variant={'h4'}>Log out</StyledLink>
          </StyledMenuItem>
        </StyledMenuList>
      </Paper>
    </DropdownStyles>
  )
}

export default ProfileDropdown
