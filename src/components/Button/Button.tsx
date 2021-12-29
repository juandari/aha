import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'
import { HTMLAttributes } from 'react'

const NormalButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'uppercase',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  backgroundColor: theme.palette.primary.light,
  padding: '8px 10px',
  border: '1px solid transparent',
  '&:hover': {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.light}`,
  },
}))

const OutlinedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'capitalize',
  color: theme.palette.primary.light,
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: '20px',
  padding: '8px 10px',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
  },
}))

const ContainedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'capitalize',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.light,
  border: '1px solid transparent',
  borderRadius: '20px',
  padding: '8px 10px',
  '&:hover': {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.light}`,
  },
}))

interface CustomizedButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: 'normal' | 'outlined' | 'contained'
  children: React.ReactNode
  width: string
}

export default function CustomizedButton({
  variant,
  children,
  onClick,
  width,
}: CustomizedButtonProps) {
  if (variant === 'contained') {
    return (
      <ContainedButton
        onClick={onClick}
        sx={{ fontFamily: 'Open Sans', width }}
      >
        {children}
      </ContainedButton>
    )
  }

  if (variant === 'outlined') {
    return (
      <OutlinedButton onClick={onClick} sx={{ fontFamily: 'Open Sans', width }}>
        {children}
      </OutlinedButton>
    )
  }

  return (
    <NormalButton onClick={onClick} sx={{ fontFamily: 'Ubuntu', width }}>
      {children}
    </NormalButton>
  )
}
