// libraries
import { styled } from '@mui/system'

// components
import { Button } from '@mui/material'

// theme
import typography from '../../themes/typography'

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(),
  padding: `${theme.spacing(1.7)} ${theme.spacing(3)}`,
  height: '38px',
  borderRadius: 0,
  boxShadow: 'none',
  textTransform: 'capitalize',
  fontSize: typography.h4.fontSize,
  color: theme.palette.common.white,
  '&:hover': {
    boxShadow: 'none',
  },
  '&.Mui-disabled': {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.primary.main,
    opacity: 0.5,
  },
  '&.MuiButton-containedSecondary': {
    color: theme.palette.common.black,
    backgroundColor: '#eaeaea',
    border: '1px solid #cbcbcb',
    '&:hover': {
      backgroundColor: '#d0d0d0',
    },
    '&.Mui-disabled': {
      backgroundColor: '#eaeaea',
    },
  },
  '.MuiSvgIcon-root': {
    width: '12px',
    height: '12px',
  },
}))

export default StyledButton
