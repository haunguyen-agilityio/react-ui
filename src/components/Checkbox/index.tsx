// libraries
import SquareIcon from '@mui/icons-material/Square'
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined'
import { memo } from 'react'

// styles
import { StyledFormControlLabel, StyledCheckbox } from './styles'

interface ICheckboxProps {
  label: string
  isChecked: boolean
  onChange: () => void
  disable?: boolean
  isError?: boolean
}

const Checkbox = ({
  label = 'Label',
  disable = false,
  onChange = () => {},
  isError = false,
  isChecked = false,
}: ICheckboxProps) => {
  return (
    <StyledFormControlLabel
      control={
        <StyledCheckbox
          isError={isError}
          icon={<SquareOutlinedIcon />}
          checkedIcon={<SquareIcon />}
          checked={isChecked}
        />
      }
      label={label}
      disabled={disable}
      onChange={onChange}
    />
  )
}

export default memo(Checkbox)
