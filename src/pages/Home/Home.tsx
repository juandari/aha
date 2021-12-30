import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'

import { Button, Input, Slider } from '@components'
import { Divider, Grid, Typography } from '@mui/material'
import IconLogo from '@icons/IconLogo'
import Friends from './friends/Friends'
import Navbar from 'src/components/Navbar'

/**
 * * the slider label 3 correspond to value 6 (3 * 2), 6 -> 12, and so on.
 * * This behavious is based on the design on figma
 */
const sliderValueMapping: { [key: number]: number } = {
  0: 3,
  20: 12,
  40: 18,
  60: 24,
  80: 30,
  100: 100,
}

const Home = () => {
  const router = useRouter()
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl'))

  const [pageSize, setPageSize] = useState(30)
  const [sliderValue, setSliderValue] = useState(80)
  const [keyword, setKeyword] = useState('')

  const handleChangeSlider = (_: Event, value: number) => {
    setSliderValue(value)
    setPageSize(sliderValueMapping[value as number])
  }

  const handleClickSearch = () => {
    router.push({
      pathname: '/result',
      query: {
        keyword,
        pageSize,
      },
    })
  }

  return (
    <Grid container>
      {/* CONTENT */}
      <Grid
        item
        xs={12}
        xl={8}
        sx={{
          px: '20px',
          py: isLargeScreen ? '54px' : '24px',
          pr: isLargeScreen ? '45px' : '20px',
          pl: isLargeScreen ? '210px' : '20px',
        }}
      >
        <Grid container spacing={2}>
          {!isLargeScreen && (
            <Grid item xs={12}>
              <IconLogo />
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography sx={{ fontSize: '24px' }} color="primary.light">
              Search
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Input
              sx={{ width: '335px' }}
              placeholder="Keyword"
              value={keyword}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setKeyword(e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: '24px' }} color="primary.light">
              # Of Results Per Page
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="span"
              sx={{ fontSize: '48px' }}
              color="primary.light"
            >
              {pageSize}{' '}
            </Typography>
            <Typography component="span" color="primary.light">
              result
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: '-15px' }}>
            <Slider
              onChange={handleChangeSlider}
              value={sliderValue}
              min={0}
              max={100}
              step={20}
              sx={{ fontSize: isLargeScreen ? '16px' : '14px' }}
            />
            <Divider
              sx={{
                backgroundColor: 'rgba(225, 225, 225, 0.1)',
                mt: isLargeScreen ? '20px' : '190px',
                mb: isLargeScreen ? '355px' : '64px',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="normal"
              width={isLargeScreen ? '343px' : '335px'}
              onClick={handleClickSearch}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* FOLLOWERS/FOLLOWING */}
      {isLargeScreen && (
        <Grid item xl={4} sx={{ pl: '85px' }}>
          <Friends />
        </Grid>
      )}

      {/* NAVBAR */}
      <Grid item xs={12} xl={2}>
        <Navbar />
      </Grid>
    </Grid>
  )
}

export default Home
