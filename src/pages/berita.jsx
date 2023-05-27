import { useEffect, useState } from "react";
import { Box, Typography, Grid } from '@mui/material';
import Cards from '../components/card';
import patternTop from '../assets/patternTop.png';
import patternBottom from '../assets/patternBottom.png';

const Berita = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=4');
            const data = await res.json();
            setArticles(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getArticles();
    }, [])

    return (
        <>
            <Box
                bgcolor='primary.main'
                height={375}
                width='100%'
                display='flex'
                justifyContent='center'
                alignItems='center'
                textAlign='center'
                position='relative'
            >
                <Box component='img' src={patternTop} position='absolute' left={0} height='100%' />
                <Box component='img' src={patternBottom} position='absolute' right={0} height='100%' />
                <Typography
                    position='absolute'
                    color='#fff'
                    fontWeight={600}
                    fontSize='3rem'
                >
                    Berita & Kegiatan
                </Typography>
            </Box>
            <Box bgcolor='#F9FAFB'>
                <Grid
                    height='fit-content'
                    container
                    py={9}
                    px={12}
                    alignItems='center'
                    spacing={3}
                    justifyContent='center'
                >
                    {articles?.map(items => {
                        return (
                            <Grid
                                item
                                // xs={16}
                                // sm={6}
                                // md={4}
                                // display='flex'
                                // justifyContent='center'
                                key={items.id}
                            >
                                <Cards.ArticleCard data={items} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </>
    );
}

export default Berita;