import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import Followers from './Followers'
import Following from './Following'

type ActiveTab = 'following' | 'followers'

export default function Friends() {
  const [isFollowers, setIsFollowers] = useState(true)

  return (
    <Box sx={{ height: '90vh' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            borderBottom: isFollowers ? '2px solid white' : 'none',
            px: '53px',
            pb: '13px',
            pt: '32px',
            cursor: 'pointer',
            width: '100%',
          }}
          onClick={() => setIsFollowers(!isFollowers)}
        >
          <Typography
            color={isFollowers ? 'white' : 'grey.500'}
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            Followers
          </Typography>
        </Box>
        <Box
          sx={{
            borderBottom: !isFollowers ? '2px solid white' : 'none',
            px: '53px',
            pb: '13px',
            pt: '32px',
            cursor: 'pointer',
            width: '100%',
          }}
          onClick={() => setIsFollowers(!isFollowers)}
        >
          <Typography
            color={!isFollowers ? 'white' : 'grey.500'}
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            Following
          </Typography>
        </Box>
      </Box>
      {isFollowers ? <Followers /> : <Following />}
    </Box>
  )
}
