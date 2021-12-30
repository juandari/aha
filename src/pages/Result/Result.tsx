import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import useSWRInfinite from 'swr/infinite'
import { useRouter } from 'next/router'
import { Box, Grid, Typography } from '@mui/material'

import ResultCard from './ResultCard'
import { Button, HomeNavMobile } from '@components'
import Navbar from 'src/components/Navbar'
import Friends from '@pages/Home/friends/Friends'
import IconLeft from '@icons/IconLeft'

export default function Result() {
  const router = useRouter()
  const { keyword, pageSize } = router.query

  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl'))

  const { data, size, setSize, error } = useSWRInfinite(
    (index) => `/api/result?page=${index}&limit=${pageSize}`
  )
  const results = data
    ? []
        .concat(...data)
        .filter((item: any) => item.title.toLowerCase().includes(keyword))
    : []
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < Number(pageSize))
  const isLoading = !data && !error

  if (error) return <Typography>Error fetching data</Typography>

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        xl={8}
        sx={{
          py: isLargeScreen ? '54px' : '0',
          pr: isLargeScreen ? '45px' : '0',
          pl: isLargeScreen ? '210px' : '0',
        }}
      >
        <Grid container>
          {!isLargeScreen && (
            <Grid
              item
              xs={12}
              sx={{
                position: 'fixed',
                bgcolor: 'primary.main',
                height: '70px',
                width: '375px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <HomeNavMobile />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sx={{
              mt: isLargeScreen ? '45px' : '80px',
              px: '25px',
              position: 'relative',
            }}
          >
            <Typography
              sx={{ fontSize: isLargeScreen ? '30px' : '24px' }}
              color="primary.light"
            >
              Results
            </Typography>
            <Box
              onClick={() => router.push('/')}
              sx={{ position: 'absolute', top: 12, left: '-15px' }}
            >
              <IconLeft />
            </Box>
          </Grid>
          <Grid
            container
            spacing={4}
            sx={{
              px: '25px',
            }}
          >
            {(isLoading ? Array.from(new Array(pageSize)) : results).map(
              (item: any, index: number) => (
                <Grid key={index} item xs={12} xl={4}>
                  <Box>
                    <ResultCard item={item} />
                  </Box>
                </Grid>
              )
            )}
          </Grid>
          {!isReachingEnd && results.length !== 0 && (
            <Grid
              item
              xs={12}
              sx={{ px: '20px', mb: '25px', mt: isLargeScreen ? '40px' : '' }}
            >
              <Button
                variant="normal"
                width={isLargeScreen ? '343px' : '335px'}
                onClick={() => setSize(size + 1)}
              >
                More
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>

      {/* FOLLOWERS/FOLLOWING */}
      {isLargeScreen && (
        <Grid item xl={4} sx={{ pl: '85px' }}>
          <Friends />
        </Grid>
      )}

      {/* NAVBAR */}
      {isLargeScreen && (
        <Grid item xs={12} xl={2}>
          <Navbar />
        </Grid>
      )}
    </Grid>
  )
}
