import { Box, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../styles/heroProduct.css';
import arrow from '../assets/arrow.svg';
import { useEffect, useState } from 'react';

const HeroProduct = () => {
    const [productHighlight, setProductHighlight] = useState([])

    const getProductHighlight = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=2');
            const data = await res.json();
            setProductHighlight(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProductHighlight();
    }, [])

    return (
        <Box
            position='relative'
            width='100%'
            bgcolor='#BA1F1A'
            height={{ xs: '100vh', md: '60.5vh' }}
            maxHeight={false}
            mb={{ xs: -1 }}
            color='#fff'
            overflow='hidden'
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                className='container'
                height='100%'
                justifyContent='center'
                alignItems='center'
                gap={{ xs: 0, md: 2.4 }}
            >
                <Stack
                    width={{ xs: '90%', md: '18.3%' }}
                    height='50%'
                    zIndex={1}
                    justifyContent='center'
                >
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
                </Stack>
                <Stack
                    width={{ xs: '80%', md: '50%' }}
                    height='100%'
                    zIndex={1}
                    justifyContent='center'
                    alignItems='center'
                >
                    <Box
                        marginTop={{ xs: 0, md: 4 }}
                        marginLeft={{ xs: 0, md: 5.75 }}
                        borderRadius={1}
                        // width='100%'
                        height={{ xs: '100%', md: '60%' }}
                        zIndex={0}
                        position='relative'
                        display='flex'
                        width={{ xs: '80%', sm: '50%', md: '80%', lg: '80%' }}
                        bgcolor='#AA1712'
                        justifyContent='center'
                    >
                        <Stack
                            direction={{ xs: 'column', sm: 'column', md: 'row' }}
                            // width={{ xs: '80%', md: '96.8%' }}
                            height='100%'
                            gap={4}
                            // ml={2.8}
                            display='flex'
                            justifyContent='center'
                            margin={'0 auto'}
                            position='absolute'
                            alignItems='center'
                            bottom={48}
                        >
                            {productHighlight?.map(product => {
                                return (
                                    <Box
                                        key={product.id}
                                        width={{ xs: '12rem', sm: '15rem', md: '10rem', lg: '14em' }}
                                        height={{ xs: '12rem', sm: '15rem', md: '10rem', lg: '14em' }}
                                        bgcolor='#fff'
                                        borderRadius={1}
                                    >
                                        Box
                                    </Box>
                                )
                            })}
                        </Stack>
                    </Box>
                    <NavLink to='/ekonomi-kreatif' className='link-mobile'>
                        <Stack direction='row' alignItems='center' gap={1} pt='24px' pb='100px'>
                            <Typography fontSize={13} color='#fff'>Lihat lebih banyak</Typography>
                            <Box pt={0.1} component='img' src={arrow} height='10px' />
                        </Stack>
                    </NavLink>
                </Stack>
            </Stack>
        </Box>
        // <Box bgcolor='#BA1F1A' color='#ffffff' position='relative' height='65vh'>
        //     <Container maxWidth='lg'>
        //         <Grid container px={{ xs: 6, md: 14 }} py={10} columnSpacing={10}>
        //             <Grid item xs={12} sm={12} md={4}>
        //                 <Typography fontSize={21} fontWeight={300}>Ekonomi Kreatif</Typography>
        //                 <Typography
        //                     fontWeight={800}
        //                     fontSize={36.3}
        //                     pb={{ xs: 2, md: 3 }}
        //                     sx={{ wordSpacing: 10 }}
        //                 >
        //                     Produk Kami
        //                 </Typography>
        //                 <Typography
        //                     fontSize={13}
        //                     pb={{ xs: 0, md: 9 }}
        //                     fontWeight={300}
        //                     textAlign='justify'
        //                     sx={{ textIndent: '24px' }}
        //                 >
        //                     Lorem ipsum dolor sit amet consectetur. Semper id faucibus ut hendrerit nullam tortor fermentum porttitor dignissim.
        //                 </Typography>
        //                 <NavLink to='/ekonomi-kreatif' className='link'>
        //                     <Stack direction='row' alignItems='center' gap={1}>
        //                         <Typography fontSize={13}>Lihat lebih banyak</Typography>
        //                         <Box pt={0.1} component='img' src={arrow} height='10px' />
        //                     </Stack>
        //                 </NavLink>
        //             </Grid>
        //             <Grid className='container' item xs={12} md={8} display='flex' justifyContent='center' alignItems='center'>
        //                 <Grid
        //                     container
        //                     width='100%'
        //                     height='100%'
        //                     bgcolor='#AA1712'
        //                     zIndex={0}
        //                     columnSpacing={2}
        //                     justifyContent='center'
        //                 // position='relative'
        //                 >
        //                     <Grid item xs={12} md={6} justifyContent='center' display='flex' alignItems='center' pr={2}>
        //                         <Box position='relative' width='100%' height='100%'>
        //                             <Box top={{ xs: 0, md: -25 }} position='absolute' bgcolor='white' height='250px' width='250px'></Box>
        //                         </Box>
        //                     </Grid>
        //                     <Grid item xs={12} md={6} justifyContent='center' display='flex' alignItems='center' pr={2}>
        //                         <Box position='relative' width='100%' height='100%'>
        //                             <Box top={{ xs: 250, md: -25 }} position='absolute' bgcolor='white' height='250px' width='250px'></Box>
        //                         </Box>
        //                     </Grid>
        //                 </Grid>
        //             </Grid>
        //         </Grid >
        //     </Container >
        // </Box >
    );
}

export default HeroProduct;