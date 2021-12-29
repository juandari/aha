import { useRouter } from 'next/router'

import { Box, Typography } from '@mui/material'
import IconLeft from '@icons/IconLeft'

export default function HomeNavMobile() {
  const router = useRouter()

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        px: '25px',
        py: '20px',
      }}
    >
      <Box onClick={() => router.push('/')}>
        <IconLeft />
      </Box>
      <Typography sx={{ fontSize: '24px' }} color="primary.light">
        Home Page
      </Typography>
    </Box>
  )
}
