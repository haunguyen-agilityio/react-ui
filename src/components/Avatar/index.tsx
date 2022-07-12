import { memo } from 'react'

// lib MUI
import { Badge } from '@mui/material'

// styles
import { StyledAvatar, SmallAvatar } from './styles'

// icon
import EditIcon from '@mui/icons-material/Edit'

export type AvatarProp = {
  image: string
  firstName: string
  onClick?: () => void
  sizeAvatar: number
  variant: 'circular' | 'rounded' | 'square'
  isEdit: boolean
}

const Avatar = ({
  image = './src/image.jpg',
  firstName = 'Jame',
  onClick = () => {},
  sizeAvatar = 50,
  variant = 'circular',
  isEdit = false,
}: AvatarProp) => {
  return (
    <div onClick={onClick}>
      {isEdit && (
        <Badge
          sx={{ position: 'relative', top: sizeAvatar * 0.25, left: sizeAvatar * 0.86 }}
          overlap='circular'
          badgeContent={
            <SmallAvatar sx={{ width: sizeAvatar / 2.2, height: sizeAvatar / 2.2 }} alt='Edit'>
              <EditIcon sx={{ fontSize: sizeAvatar * 0.3, color: '#fff' }} />
            </SmallAvatar>
          }
        ></Badge>
      )}
      <StyledAvatar
        variant={variant}
        sx={{ width: sizeAvatar, height: sizeAvatar, fontSize: sizeAvatar * 0.62 }}
        alt={firstName}
        src={image}
      />
    </div>
  )
}

export default memo(Avatar)
