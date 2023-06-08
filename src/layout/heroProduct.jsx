import { Box, Grid, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../styles/heroProduct.css';
import arrow from '../assets/arrow.svg';
import produk1 from '../assets/produk/produk1.webp';
import produk2 from '../assets/produk/produk2.webp';
// import { useEffect, useState } from 'react';

const HeroProduct = () => {
    // const [productHighlight, setProductHighlight] = useState([])

    // const getProductHighlight = async () => {
    //     try {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=2');
    //         const data = await res.json();
    //         setProductHighlight(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getProductHighlight();
    // }, [])

    return (
        <Box
            position='relative'
            bgcolor='#BA1F1A'
            py={8}
            mb={{ xs: -1 }}
            color='#fff'
            overflow='hidden'
        >
            <Grid container>
                <Grid item xs={12} md={4} px={{ xs: 4, md: 12 }}>
                    <Typography fontSize={21} fontWeight={300}>Ekonomi Kreatif</Typography>
                    <Typography
                        fontWeight={800}
                        fontSize={36.3}
                        pb={{ xs: 2, md: 3 }}
                        sx={{ wordSpacing: 10 }}
                    >
                        Produk Kami
                    </Typography>
                    <Typography
                        fontSize={13}
                        pb={{ xs: 0, md: 9 }}
                        fontWeight={300}
                        textAlign='justify'
                        sx={{ textIndent: '24px' }}
                    >
                        Lorem ipsum dolor sit amet consectetur. Semper id faucibus ut hendrerit nullam tortor fermentum porttitor dignissim.
                    </Typography>
                    <NavLink to='/ekonomi-kreatif' className='link'>
                        <Stack direction='row' alignItems='center' gap={1}>
                            <Typography fontSize={13}>Lihat lebih banyak</Typography>
                            <Box pt={0.1} component='img' src={arrow} height='10px' />
                        </Stack>
                    </NavLink>
                </Grid>
                <Grid pb={{ xs: 8, md: 0 }} item xs={12} md={8} display='flex' flexDirection='column' alignItems={{ xs: 'center', md: 'start' }}>
                    <Box
                        className='container'
                        marginTop={{ xs: 12, md: 4 }}
                        // marginLeft={{ xs: 0, md: 5.75 }}
                        borderRadius={1}
                        height={{ xs: '100%', md: '100%' }}
                        zIndex={0}
                        // position='relative'
                        display='flex'
                        width={{ xs: '75%', sm: '50%', md: '100%', lg: '77.5%' }}
                        bgcolor='#AA1712'
                        justifyContent='center'
                    >
                        <Grid container px={2} display='flex' justifyContent='center' position='relative' zIndex={2}>
                            <Grid borderRadius={1} item xs={12} md={6} display='flex' justifyContent={{ xs: 'center', md: 'start' }} alignItems='center'>
                                <Box
                                    className='product'
                                    borderRadius={1}
                                    mb={8} bgcolor='#fff'
                                    width='95%'
                                    height='95%'
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='center'
                                    sx={{ objectFit: 'contain' }}
                                >
                                    <Box
                                        className='product'
                                        width='85%'
                                        height='85%'
                                        component='img'
                                        sx={{ aspectRatio: 1 / 1 }}
                                        src={produk1}
                                    ></Box>
                                </Box>
                            </Grid>
                            <Grid borderRadius={1} item xs={12} md={6} display='flex' justifyContent={{ xs: 'center', md: 'end' }} alignItems='center'>
                                <Box className='product' borderRadius={1} mb={8} bgcolor='#fff' width='95%' height='95%' display='flex' justifyContent='center' alignItems='center'>
                                    <Box
                                        className='product'
                                        width='85%'
                                        height='85%'
                                        component='img'
                                        sx={{ aspectRatio: 1 / 1 }}
                                        src={produk2}
                                    ></Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <NavLink to='/ekonomi-kreatif' className='link-mobile'>
                        <Stack direction='row' alignItems='center' gap={1} pt='24px'>
                            <Typography fontSize={13} color='#fff'>Lihat lebih banyak</Typography>
                            <Box pt={0.1} component='img' src={arrow} height='10px' />
                        </Stack>
                    </NavLink>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HeroProduct;