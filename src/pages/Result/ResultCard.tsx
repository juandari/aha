import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Skeleton,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { Item } from 'pages/api/result'

interface Props {
  item?: Item
}

const StyledCard = styled(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    paddingBottom: '0',
  },
}))

export default function ResultCard({ item }: Props) {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <StyledCard
      sx={{
        maxWidth: isLargeScreen ? 219 : 335,
        border: 'none',
        bgcolor: 'primary.main',
      }}
    >
      {item ? (
        <CardMedia
          component="img"
          height={isLargeScreen ? '146' : '222'}
          image={item.imageUrl}
          sx={{ mt: '20px' }}
        />
      ) : (
        <Skeleton
          sx={{ bgcolor: 'grey.200' }}
          variant="rectangular"
          width={isLargeScreen ? 219 : 335}
          height={isLargeScreen ? 146 : 222}
        />
      )}
      <CardContent sx={{ bgcolor: 'primary.main', p: 0, pt: '20px' }}>
        {item ? (
          <Typography sx={{ fontSize: '15px' }} color="primary.light">
            {item.title}
          </Typography>
        ) : (
          <Skeleton sx={{ bgcolor: 'grey.200' }} variant="text" />
        )}
        {item ? (
          <Typography sx={{ fontSize: '11px', color: '#B2B2B2' }}>
            by {item.username}
          </Typography>
        ) : (
          <Skeleton sx={{ bgcolor: 'grey.200' }} variant="text" />
        )}
      </CardContent>
    </StyledCard>
  )
}
