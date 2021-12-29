import useSWRInfinite from 'swr/infinite'
import { useRouter } from 'next/router'
import { Box, Grid, Typography } from '@mui/material'

import ResultCard from './ResultCard'
import { Button, HomeNavMobile } from '@components'
import { Item } from 'pages/api/result'

export default function Result() {
  const router = useRouter()
  const { keyword, pageSize } = router.query
  console.log(pageSize)

  const { data, size, setSize, error } = useSWRInfinite(
    (index) => `/api/result?page=${index}&limit=${pageSize}`
  )
  const results = data ? [].concat(...data) : []
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < Number(pageSize))
  const isLoading = !data && !error

  if (error) return <Typography>Error fetching data</Typography>

  return (
    <Box>
      <Grid container>
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
        <Grid item xs={12} sx={{ mt: '80px', px: '25px' }}>
          <Typography
            sx={{ fontSize: '24px', mb: '24px' }}
            color="primary.light"
          >
            Results
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ px: '25px' }}>
          {(isLoading ? Array.from(new Array(pageSize)) : results).map(
            (item: any, index: number) => (
              <Box key={index}>
                <ResultCard item={item} />
              </Box>
            )
          )}
        </Grid>
        {!isReachingEnd && (
          <Grid item xs={12} sx={{ px: '20px', mb: '25px' }}>
            <Button
              variant="normal"
              width="335px"
              onClick={() => setSize(size + 1)}
            >
              More
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}
