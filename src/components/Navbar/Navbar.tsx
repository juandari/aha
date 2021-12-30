import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Box, Typography } from '@mui/material'
import IconLogo from '@icons/IconLogo'
import IconNavi from '@icons/IconNavi'
import IconCircle from '@icons/IconCircle'

export default function Navbar() {
  const router = useRouter()
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isLargeScreen ? 'column' : 'row',
        position: 'fixed',
        bottom: 0,
        gap: isLargeScreen ? '24px' : '52px',
        alignItems: 'center',
        justifyContent: isLargeScreen ? 'flex-start' : 'center',
        py: isLargeScreen ? '37px' : 0,
        bgcolor: isLargeScreen ? '#1B1B1B' : '#2a2a2a',
        width: isLargeScreen ? '80px' : '100vw',
        height: isLargeScreen ? '100vh' : '66px',
        mt: '15px',
      }}
    >
      {isLargeScreen && (
        <Box sx={{ mb: '21px' }}>
          <IconLogo />
        </Box>
      )}
      <Box
        onClick={() => router.push('/')}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <IconNavi
          color={
            ['/result', '/'].includes(router.pathname) ? 'white' : undefined
          }
        />
        {isLargeScreen && (
          <Typography
            sx={{
              fontSize: '12px',
              visibility: ['/result', '/'].includes(router.pathname)
                ? 'visible'
                : 'hidden',
            }}
            color="white"
          >
            Home
          </Typography>
        )}
      </Box>
      <Box
        onClick={() => router.push('/tags')}
        sx={{
          position: 'relative',
        }}
      >
        <IconNavi color={router.pathname === '/tags' ? 'white' : undefined} />
        {isLargeScreen && router.pathname !== '/tags' && (
          <Box sx={{ position: 'absolute', top: '-18px', right: '-6px' }}>
            <IconCircle />
          </Box>
        )}
        {isLargeScreen && router.pathname === '/tags' && (
          <Typography sx={{ fontSize: '12px' }} color="white">
            Tags
          </Typography>
        )}
      </Box>
    </Box>
  )
}
