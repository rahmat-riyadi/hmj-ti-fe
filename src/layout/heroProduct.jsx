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
            height={{ xs: '100vh', md: '72.5vh' }}
            maxHeight={false}
            mb={{ xs:-1 }}
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
                        bgcolor='#AA1712'
                        width={{ xs: '80%', md: '97%' }}
                        height={{ xs: '77%', sm: '35%', md: '61%' }}
                        zIndex={0}
                        position='relative'
                        display='flex'
                    >
                        <Stack
                            direction={{ xs: 'column', sm: 'row', md: 'row' }}
                            width={{ xs: '80%', md: '96.8%' }}
                            height='100%'
                            gap={4}
                            ml={2.8}
                            position='absolute'
                            bottom={25}
                        >
                            {productHighlight?.map(product => {
                                return (
                                    <Box
                                        key={product.id}
                                        width={{ xs: '100%', sm: '15rem', md: '17rem' }}
                                        height={{ xs: '100%', sm: '15rem', md: '17rem' }}
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
    );
}

export default HeroProduct;