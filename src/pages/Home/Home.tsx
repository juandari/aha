import { Button, Input, Slider } from '@components'

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Button variant="outlined">Button</Button>
      <Button variant="contained">Button</Button>
      <Button variant="normal">Button</Button>
      <Input placeholder="Keyword" />
      <Slider />
    </div>
  )
}

export default Home
