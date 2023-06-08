import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardMedia, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import imageBorder from '../assets/ekrefCard.png';

import whatsappLogo from '../assets/products/whatsapp.svg';
import instagramLogo from '../assets/products/instagram.svg';
import detailPic from '../assets/article/article.webp';
import produk1 from '../assets/produk/produk1.webp';


const ArticleCard = (props) => {

    return (
        <Card
            sx={{
                height: '300px',
                position: 'relative',
                width: '250px',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)'
            }}
        >
            <CardMedia
                loading='lazy'
                component='img'
                src={detailPic}
                height='44%'
                sx={{ width: '90%', mx: 'auto', mt: '20px' }}
            />
            <CardContent sx={{ paddingTop: 0 }}>
                <Typography
                    textAlign='left'
                    whiteSpace='nowrap'
                    overflow='hidden'
                    fontWeight={700}
                    fontSize={20}
                    pt={1}
                    color='text.main'
                    textOverflow='ellipsis'
                >
                    Dirgahayu Jurusan Teknik Informatika ke 19th
                </Typography>
                <Typography
                    variant='body2'
                    color='text.secondary'
                    textAlign='justify'
                    fontSize={11}
                    pt={1}
                    sx={{
                        WebkitLineClamp: '3',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    Perayaan Milad Jurusan Teknik Informatika merupakan saat yang tepat untuk mengenang awal mula pendirian jurusan ini dan bagaimana sejak saat itu telah berkembang menjadi salah satu jurusan terkemuka dalam bidang teknologi informasi. Dalam perjalanan ini, jurusan telah berhasil menghasilkan lulusan-lulusan berkualitas yang menjadi motor penggerak industri teknologi informasi di dalam dan luar negeri. Melalui milad, penghargaan dan pengakuan diberikan kepada para dosen, staf, dan alumni yang telah memberikan kontribusi berharga dalam mengembangkan jurusan ini.
                </Typography>
            </CardContent>
            <CardActions>
                <NavLink to='/berita-&-kegiatan/1'>
                    <Typography
                        color='primary.main'
                        fontSize={11}
                        fontWeight={500}
                        pb={3}
                        pr={3}
                        right={0}
                        position='absolute'
                        bottom={0}
                    >
                        Baca Selengkapnya
                    </Typography>
                </NavLink>
            </CardActions>
        </Card >

    );
}

export const ProductCard = (props) => {
    const date = '17 November 2023';
    const newdate = date.replace(/ /g, '-');

    return (
        <Card
            sx={{
                boxShadow: '0px 4px 22px -6px rgba(0, 0, 0, 0.12)',
                position: 'relative',
                display: 'flex',
                height: { xs: 'auto', sm: '250px' },
                width: { xs: 'auto', sm: '580px' },
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
                py: 2,
                flexDirection: { xs: 'column', sm: 'row' }
            }}
        >
            <CardMedia
                loading='lazy'
                component='img'
                src={produk1}
                height={'90%'}
                sx={{ objectFit: 'contain' }}
            />
            <CardContent>

                <Typography fontWeight={600} fontSize={13} color='#ACACAC' letterSpacing={1.5}>{newdate}</Typography>
                <Typography textAlign='left' color='#BA1F1A' fontWeight={600} fontSize='1.2rem' pt={1}>
                    Jasa Pembayaran UKT
                </Typography>
                <Typography
                    variant='body2'
                    color='#454F5B'
                    textAlign='justify'
                    fontSize='0.6rem'
                    py={1}
                    width='85%'
                >
                    Lorem ipsum dolor sit amet consectetur. Tincidunt et elit enim neque scelerisque donec mauris malesuada. Potenti sagittis metus amet tincidunt proin accumsan id
                </Typography>
                <Stack flexDirection={{ xs: 'column', md: 'row' }} mt={1} gap={{ xs: 1, md: 2 }} justifyContent='start' alignItems='start'>
                    <Stack flexDirection='row' justifyContent='center' alignItems='center' gap={1}>
                        <Box
                            loading='lazy'
                            component='img'
                            src={whatsappLogo}
                            width={18}
                        />
                        <Typography fontSize={{ xs: '0.7rem', md: '0.9rem' }} fontWeight={500} color='text.secondary'>0878-1958-2058</Typography>
                    </Stack>
                    <Stack flexDirection='row' justifyContent='center' alignItems='center' gap={1}>
                        <Box
                            component='img'
                            src={instagramLogo}
                            width={18}
                        />
                        <Typography fontSize={{ xs: '0.7rem', md: '0.9rem' }} fontWeight={500} color='text.secondary'>@hmjti_uinam</Typography>
                    </Stack>
                </Stack>
                <Box
                    loading='lazy'
                    component='img'
                    position='absolute'
                    bottom={0}
                    right={{ xs: -10, md: 0 }}
                    height={{ xs: '50%', sm: '80%' }}
                    src={imageBorder}
                />
            </CardContent>
        </Card>
    );
}

const Cards = {
    ArticleCard,
    ProductCard
}

export default Cards;