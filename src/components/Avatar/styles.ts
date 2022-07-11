// lib MUI
import { Avatar } from '@mui/material'
import { styled } from '@mui/system'

// theme
import theme from '@themes/index'

export const StyledAvatar = styled(Avatar)({
  backgroundColor: '#21d083',
  fontWeight: 600,
  color: theme.palette.common.white,
})

export const SmallAvatar = styled(Avatar)({
  backgroundColor: '#aaaaaa',
})
