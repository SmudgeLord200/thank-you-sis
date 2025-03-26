import { useEffect, useState } from 'react'
import './App.css'
import { Button, Container, Stack, Typography } from '@mui/material'
import Prize from './Prize'

function App() {
  const [prize, setPrize] = useState<string>('no')
  const [animate, setAnimate] = useState<boolean>(false);

  const redeemPrize = (option: string) => {
    setPrize(option)
    if (option === 'yes') {
      setAnimate(true); // Trigger animation when redeeming the prize
      if (audio) {
        audio
          .play()
          .catch((err) => {
            console.error('Failed to play audio:', err);
          });
      }
    }
  }

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize the audio object
    const bgAudio = new Audio('/thank-you-sis/bgm.mp3'); // Ensure the file is in the public folder
    bgAudio.loop = true; // Enable looping
    bgAudio.volume = 0.5; // Set volume (optional)
    setAudio(bgAudio);

    return () => {
      bgAudio.pause(); // Stop the audio when the component unmounts
    };
  }, []);


  return (
    <Container maxWidth="md">
      <Stack direction="column" spacing={2} alignItems="center" justifyContent="center">
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Caveat, cursive',
            fontSize: '3rem',
            color: '#ff69b4'
          }}
        >
          Thank You Sis
        </Typography>
        {prize === 'yes'
          ?
          <Prize setPrize={redeemPrize} animate={animate} />
          :
          <Button
            variant="contained"
            onClick={() => redeemPrize('yes')}
            sx={{
              fontFamily: 'Caveat, cursive',
            }}
          >
            Click here to redeem your prize
          </Button>
        }
      </Stack>
    </Container >
  )
}

export default App
