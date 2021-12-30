import { HomeNavMobile } from '@components'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import useTags from '@hooks/useTags'
import TagsCard from './TagsCard'
import { Tag } from 'pages/api/tags'
import Navbar from 'src/components/Navbar'

export default function Tags() {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl'))
  const { tags, isError, isLoading } = useTags()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching data</div>

  return (
    <Box sx={{ pb: '24px' }}>
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
              zIndex: 100,
            }}
          >
            <HomeNavMobile />
          </Grid>
        )}

        {/* CONTENT */}
        <Grid
          item
          xs={12}
          sx={{
            mt: '80px',
            px: '25px',
            pl: isLargeScreen ? '337px' : '25px',
          }}
        >
          <Typography
            sx={{ fontSize: '24px', mb: '24px' }}
            color="primary.light"
          >
            Tags
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            pl: isLargeScreen ? '337px' : '25px',
            pr: isLargeScreen ? '257px' : '25px',
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{ rowGap: isLargeScreen ? '12px' : null }}
          >
            {tags.map((tag: Tag) => (
              <Grid item xs={6} xl={2.4} key={tag.id}>
                <TagsCard
                  title={tag.title}
                  subtitle={tag.subtitle}
                  noOfQuestions={tag.noOfQuestions}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* NAVBAR */}
        {isLargeScreen && (
          <Grid item xs={12} xl={2}>
            <Navbar />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}
