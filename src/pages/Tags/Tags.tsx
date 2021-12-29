import { HomeNavMobile } from '@components'
import { Box, Grid, Typography } from '@mui/material'
import useTags from '@hooks/useTags'
import TagsCard from './TagsCard'
import { Tag } from 'pages/api/tags'

export default function Tags() {
  const { tags, isError, isLoading } = useTags()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching data</div>

  return (
    <Box sx={{ pb: '24px' }}>
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
            zIndex: 100,
          }}
        >
          <HomeNavMobile />
        </Grid>
        <Grid item xs={12} sx={{ mt: '80px', px: '25px' }}>
          <Typography
            sx={{ fontSize: '24px', mb: '24px' }}
            color="primary.light"
          >
            Tags
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ px: '25px' }}>
          <Grid container spacing={3}>
            {tags.map((tag: Tag) => (
              <Grid item xs={6} key={tag.id}>
                <TagsCard
                  title={tag.title}
                  subtitle={tag.subtitle}
                  noOfQuestions={tag.noOfQuestions}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
