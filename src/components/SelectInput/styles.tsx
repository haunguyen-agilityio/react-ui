// Libraries
import { styled } from '@mui/material/styles'
import { FormHelperText, FormLabel, Select, SelectProps } from '@mui/material'

// Themes
import theme from '../../themes'

interface IStyledSelect extends SelectProps {
  selectVariant: 'normal' | 'asset'
}

const StyledSelect = styled(
  (props: IStyledSelect) => (
    <Select
      {...props}
      MenuProps={{
        sx: {
          '& .MuiList-root': {
            padding: 0,
          },
          '& .MuiMenuItem-root': {
            borderBottom: `1px solid ${theme.palette.grey[300]}`,
            columnGap: theme.spacing(1.5),
            paddingTop: theme.spacing(1.2),
            paddingBottom: theme.spacing(1.2),
            '> .asset-icon': {
              display: 'flex',
              alignItems: 'center',
            },
            '&, > .asset-name': {
              fontSize: theme.typography.h4.fontSize,
            },
          },
        },
      }}
    />
  ),
  {
    shouldForwardProp: (prop) => prop !== 'selectVariant',
  },
)(({ theme, size, value, error, selectVariant }) => ({
  verticalAlign: 'middle',
  fontSize: theme.typography.h4.fontSize,
  borderRadius: 0,
  color: error
    ? theme.palette.error.main
    : size === 'small' || value !== ''
    ? theme.palette.common.black
    : theme.palette.grey[400],
  '& .MuiSvgIcon-root': {
    color: theme.palette.common.black,
  },
  '& fieldset': {
    borderColor: theme.palette.grey[400],
  },
  '&.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.error.main,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: error ? theme.palette.error.main : theme.palette.grey[400],
  },
  '&.MuiOutlinedInput-root:hover fieldset': {
    borderColor: error ? theme.palette.error.main : theme.palette.grey[400],
  },
  '& .MuiSelect-select': {
    ...(selectVariant === 'asset' &&
      value !== '' && {
        display: 'flex',
        columnGap: theme.spacing(1),
        alignItems: 'center',
        paddingTop: theme.spacing(size === 'small' ? 0.75 : 1.3),
        paddingBottom: theme.spacing(size === 'small' ? 0.75 : 1.3),
        '> .asset-icon': {
          height: '20px',
          width: '20px',
        },
        '> .asset-name': {
          fontSize: theme.typography.h4.fontSize,
        },
      }),
  },
}))

const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  marginTop: theme.spacing(0.3),
  marginLeft: 0,
  fontSize: theme.typography.body1.fontSize,
}))

const StyledFormLabel = styled(FormLabel)(({ theme, error }) => ({
  color: theme.palette.common.black,
  fontSize: theme.typography.h5.fontSize,
  '&.Mui-focused': {
    color: error ? theme.palette.error.main : theme.palette.common.black,
  },
}))

export { StyledSelect, StyledFormLabel, StyledFormHelperText }
