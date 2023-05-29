import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import logo from '../assets/logo.svg'

import instagramLogo from '../assets/instagram.svg'
import whatsappLogo from '../assets/footer/whatsapp.svg'
import youtubeLogo from '../assets/footer/youtube.svg'
import tiktokLogo from '../assets/footer/tiktok.svg'
import facebookLogo from '../assets/footer/facebook.svg'

import emailLogo from '../assets/footer/email.svg'
import locationLogo from '../assets/footer/location.svg'
import telephoneLogo from '../assets/footer/telephone.svg'

const menus = ['Beranda', 'Tentang', 'Kontak', 'Struktur Organisasi'];

const Footer = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingY: 5
        }}>
            <Box
                component='img'
                src={logo}
                sx={{
                    // width: '10%'
                }}
                width={{ xs: '30%', sm: '20%', md: '10%' }}
                my={2}
            />
            <Typography
                sx={{
                    // width: '50%',
                    fontSize: '12px',
                    textAlign: 'center',
                    color: 'grey'
                }}
                width={{ xs: '80%', md: '50%' }}
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nesciunt molestias fugit odio doloremque, distinctio fuga esse sunt commodi amet.
            </Typography>
            <Stack direction='row' gap={3} py={3} alignItems='center' justifyContent='center'>
                <a href="https://www.facebook.com/HMJTIUINAM" target="_blank" rel="noopener noreferrer">
                    <Box
                        component='img'
                        src={facebookLogo}
                        width='20px'
                        color='red'
                    />
                </a>
                <a href="https://www.facebook.com/HMJTIUINAM" target="_blank" rel="noopener noreferrer">
                    <Box
                        component='img'
                        src={instagramLogo}
                        width='20px'
                        color='red'
                    />
                </a>
                <a href="https://www.tiktok.com/@hmjti_uinam" target="_blank" rel="noopener noreferrer">
                    <Box
                        component='img'
                        src={tiktokLogo}
                        width='16px'
                        color='red'
                    />
                </a>
                <a href="https://youtube.com/@hmjtiuinam" target="_blank" rel="noopener noreferrer">
                    <Box
                        component='img'
                        src={youtubeLogo}
                        width='20px'
                        color='red'
                    />
                </a>
                <a href="https://youtube.com/@hmjtiuinam" target="_blank" rel="noopener noreferrer">
                    <Box
                        component='img'
                        src={whatsappLogo}
                        width='20px'
                        color='red'
                    />
                </a>
            </Stack>
            <Stack>
                <Stack direction={{ xs: 'column', md: 'row' }} gap={10} pt={2} pb={8} justifyContent='center'>
                    <Stack direction='row' gap={2} justifyContent='center'>
                        <Box
                            component='img'
                            src={telephoneLogo}
                            width='24px'
                            color='red'
                        />
                        <Box>
                            <Typography fontWeight={400} color='#9A9EA6' fontSize={12}>Telepon</Typography>
                            <Typography fontWeight={700} color='primary.main' fontSize={14}>hmjti.uinam@gmail.com</Typography>
                        </Box>
                    </Stack>
                    <Stack direction='row' gap={2} justifyContent='center'>
                        <Box
                            component='img'
                            src={emailLogo}
                            width='24px'
                            color='red'
                        />
                        <Box>
                            <Typography fontWeight={400} color='#9A9EA6' fontSize={12}>Email</Typography>
                            <Typography fontWeight={700} color='primary.main' fontSize={14}>hmjti.uinam@gmail.com</Typography>
                        </Box>
                    </Stack>
                    <Stack direction='row' gap={2} justifyContent='center'>
                        <Box
                            component='img'
                            src={locationLogo}
                            width='24px'
                            color='red'
                        />
                        <Box>
                            <Typography fontWeight={400} color='#9A9EA6' fontSize={12}>Alamat</Typography>
                            <Typography fontWeight={700} color='primary.main' fontSize={14}>Samata, Romangpolong</Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
            <Divider variant='middle' sx={{ width: '95%', borderWidth: 1.3 }} />
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                sx={{
                    alignItems: 'center',
                    width: '100%',
                    pt: 2,
                    gap: { xs: 0, md: 70 },
                    justifyContent: 'space-evenly',
                }}>
                <Stack direction='row' sx={{ alignItems: 'center' }}>
                    {menus.map((menu) => (
                        <Button
                            key={menu}
                            variant='text'
                            sx={{
                                color: 'black',
                                fontSize: 12,
                                fontWeight: '400',
                                textTransform: 'capitalize',
                                ":hover": {
                                    bgcolor: 'white',
                                    color: '#B20600'
                                }
                            }}>
                            {menu}
                        </Button>
                    ))}
                </Stack>
                <Typography
                    sx={{ display: 'flex' }}
                    variant='caption'
                >
                    &#169;2023, Develop by&nbsp;<span style={{ color: '#B20600', fontWeight: 600 }}>HMJ-TI</span> 🫶
                </Typography>
            </Stack>
        </Box >
    );
}

export default Footer;