import { Box, Typography } from '@mui/material';
import { Stack } from "@mui/system";
import logo from '../assets/logo.svg'

const menus = ['Beranda', 'Berita & Kegiatan', 'Ekonomi Kreatif', 'Tentang'];

export default function Navbar() {
    return (
        <Stack
            direction='columns'
            sx={{ bgcolor: '#fff' }}
            justifyContent='space-between'
            alignItems='center'
            px={5}
            height={80}
        >
            <Box
                component='img'
                src={logo}
                height={55}
            />
            <Stack direction='columns' columnGap={3.7}>
                {menus.map((menu) => (
                    <Typography>{menu}</Typography>
                ))}
            </Stack>
        </Stack>
    )
}