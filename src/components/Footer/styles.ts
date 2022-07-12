// Libraries
import { styled } from '@mui/system'
import ListItemButton from '@mui/material/ListItemButton'

// Themes
import theme from '../../themes'

export const StyledListItemButton = styled(ListItemButton)({
  textAlign: 'center',
  color: theme.palette.common.white,
  marginRight: theme.spacing(0.5),
  padding: theme.spacing(1.5, 0),
  '&:hover': {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.common.black,
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.common.black,
  },
})

export const StyledFooter = styled('footer')({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[500],
  padding: theme.spacing(0, 4.2),
})
