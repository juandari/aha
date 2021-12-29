import { styled } from '@mui/material/styles'
import InputBase, { InputBaseProps } from '@mui/material/InputBase'
import { FormControl } from '@mui/material'

const Input = styled(InputBase)<InputBaseProps>(({ theme }) => ({
  fontFamily: 'Ubuntu',
  height: '60px',
  color: theme.palette.primary.light,
  border: '3px solid rgba(255, 255, 255, 0.5)',
  borderRadius: '6px',
  padding: '20px 18px 19px',
  '&.Mui-focused': {
    borderColor: theme.palette.secondary.main,
  },
  '&.MuiInputBase-root': {
    fontSize: '14px',
  },
}))

export default function CustomizedInput({ ...props }) {
  return (
    <FormControl variant="standard">
      <Input {...props} />
    </FormControl>
  )
}
