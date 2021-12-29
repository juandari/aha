import { Box, Typography } from '@mui/material'
import { Tag } from 'pages/api/tags'

export default function TagsCard({
  title,
  subtitle,
  noOfQuestions,
}: Omit<Tag, 'id'>) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Box
        sx={{
          borderRadius: '10px',
          height: '150px',
          width: '150px',
          bgcolor: '#262626',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            border: '4px solid white',
            borderRadius: '8px',
            p: '7px 14px',
            position: 'absolute',
            bottom: '14px',
            left: '10px',
            maxWidth: '129px',
          }}
        >
          <Typography
            color="white"
            sx={{
              fontWeight: 'bold',
              fontSize: '24px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontSize: '14.9px' }} color="white">
          {subtitle}
        </Typography>
        <Typography
          sx={{ fontSize: '11.17px', color: '#B2B2B2', whiteSpace: 'nowrap' }}
          color="white"
        >
          {noOfQuestions} Questions
        </Typography>
      </Box>
    </Box>
  )
}
