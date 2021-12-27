import { styled } from '@mui/material/styles'
import Slider from '@mui/material/Slider'

const marks = [
  {
    value: 0,
    label: '3',
  },
  {
    value: 20,
    label: '6',
  },
  {
    value: 40,
    label: '9',
  },
  {
    value: 60,
    label: '12',
  },
  {
    value: 80,
    label: '15',
  },
  {
    value: 100,
    label: '50',
  },
]

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    backgroundImage: `linear-gradient(.25turn, ${theme.palette.secondary.dark}, ${theme.palette.secondary.light})`,
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#5d5d5d',
  },
  '& .MuiSlider-mark': {
    display: 'none',
  },
  '& .MuiSlider-markLabel': {
    color: '#757575',
    '&[data-index="0"]': {
      left: '0.5% !important',
    },
    '&[data-index="5"]': {
      left: '99% !important',
    },
  },
  '& .MuiSlider-marked': {
    '&:last-child': {
      left: '97%',
    },
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: theme.palette.primary.main,
    border: `6px solid ${theme.palette.secondary.light}`,
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
}))

const CustomizedSlider = () => {
  return (
    <StyledSlider
      valueLabelDisplay="off"
      aria-label="slider"
      defaultValue={3}
      marks={marks}
    />
  )
}

export default CustomizedSlider
