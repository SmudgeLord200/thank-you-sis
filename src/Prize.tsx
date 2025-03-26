import { Button, Stack } from "@mui/material"
import tea from '/lipton.jpg'
import socks from '/socks.jpg'

interface PrizeProps {
    setPrize: (option: string) => void
    animate: boolean
}

const Prize = ({ setPrize, animate }: PrizeProps) => {
    return (
        <Stack direction="column" spacing={2} alignItems="center" justifyContent="center">
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <img
                    src={tea}
                    alt="lipton tea"
                    style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                        animation: animate ? 'fly-in-left 2s ease-in-out' : 'none',
                    }}
                />
                <img src={socks}
                    alt="socks"
                    style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                        animation: animate ? 'fly-in-right 2s ease-in-out' : 'none',
                    }}
                />
            </Stack>
            <Button variant="contained" onClick={() => setPrize('no')}>Go Back</Button>
        </Stack>
    )
}

export default Prize