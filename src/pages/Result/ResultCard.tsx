import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Skeleton,
} from '@mui/material'
import { Item } from 'pages/api/result'

interface Props {
  item?: Item
}

export default function ResultCard({ item }: Props) {
  return (
    <Card sx={{ maxWidth: 335, border: 'none', bgcolor: 'primary.main' }}>
      {item ? (
        <CardMedia
          component="img"
          height="222"
          image={item.imageUrl}
          sx={{ mt: '20px' }}
        />
      ) : (
        <Skeleton
          sx={{ bgcolor: 'grey.200' }}
          variant="rectangular"
          width={335}
          height={222}
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
    </Card>
  )
}
