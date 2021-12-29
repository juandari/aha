import { Button } from '@components'
import { Box, Typography } from '@mui/material'

interface User {
  id: string
  username: string
  name: string
  avatar: string
  isFollowing: boolean
}

interface Props {
  data: any[]
  isError: boolean
  isLoading: boolean
}

export default function Users({ data, isError, isLoading }: Props) {
  if (isError) return <Typography>Error fetching data</Typography>
  if (isLoading) return <div>Loading...</div>

  return (
    <Box
      sx={{
        overflow: 'scroll',
        height: '100%',
        px: '20px',
        py: '35px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {data.map((user: User) => (
        <Box
          key={user.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '21px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <Box
              sx={{
                width: '40px',
                height: '40px',
                border: '1px solid white',
                borderRadius: '5px',
                backgroundImage: `url(${user.avatar})`,
              }}
            ></Box>
            <Box>
              <Typography color="white">{user.name}</Typography>
              <Typography color="gray" sx={{ fontSize: '14px' }}>
                @{user.username}
              </Typography>
            </Box>
          </Box>
          {user.isFollowing ? (
            <Button variant="contained" width="76px">
              Following
            </Button>
          ) : (
            <Button variant="outlined" width="60px">
              Follow
            </Button>
          )}
        </Box>
      ))}
    </Box>
  )
}
