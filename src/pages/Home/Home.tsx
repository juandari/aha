import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'

import { Button, Input, Slider } from '@components'
import { Box, Divider, Grid, Typography } from '@mui/material'
import IconLogo from '@icons/IconLogo'
import IconNavi from '@icons/IconNavi'

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
    <form>
      <Box sx={{ px: '20px', py: '24px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <IconLogo />
          </Grid>
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
          <Grid item xs={12} sx={{}}>
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
            />
            <Divider
              sx={{
                backgroundColor: 'rgba(225, 225, 225, 0.1)',
                mt: '190px',
                mb: '64px',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="normal" width="335px" onClick={handleClickSearch}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          gap: '52px',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#2a2a2a',
          width: '100vw',
          height: '66px',
          mt: '15px',
        }}
      >
        <IconNavi color="white" />
        <Box onClick={() => router.push('/tags')}>
          <IconNavi />
        </Box>
      </Box>
    </form>
  )
}

export default Home
