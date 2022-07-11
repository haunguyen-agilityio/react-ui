// Libraries
import { styled } from '@mui/system'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import { MenuItem, MenuList, Link } from '@mui/material'

// Themes
import theme from '@themes'

export const DropdownStyles = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export const StyledAccordion = styled(Accordion)({
  width: theme.spacing(26.8),
  padding: theme.spacing(1.6),
  fontSize: theme.spacing(1.6),
})

export const StyledAccordionSummary = styled(AccordionSummary)({
  border: `${theme.spacing(0.1)} solid ${theme.palette.grey[300]}`,
})

export const StyledMenuItem = styled(MenuItem)({
  borderTop: `${theme.spacing(0.1)} solid ${theme.palette.grey[300]}`,
  padding: theme.spacing(1.6),
})

export const StyledMenuList = styled(MenuList)({
  width: theme.spacing(30),
  padding: theme.spacing(0),
})

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontSize: theme.spacing(1.6),
})
