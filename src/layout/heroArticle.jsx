import { Typography, Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Cards from '../components/card';

const HeroArticle = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=3');
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
        <Box
            textAlign='center'
            pb={13}
            display='flex'
            flexDirection='column'
            alignItems='center'
            width='100%'
        >
            <Typography
                fontWeight={700}
                fontSize={30}
                color='primary.main'
                className='heading'
            >
                Berita & Informasi
            </Typography>
            <Grid
                // height='fit-content'
                container
                paddingTop={5.7}
                width={{ xs: '100%', md: '81.5%' }}
                px={{ xs: 0, md: 12 }}
                alignItems='center'
                spacing={3}
                justifyContent='center'
            >
                {articles?.map(items => {
                    return (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            display='flex'
                            flexWrap='wrap'
                            justifyContent='center'
                            key={items.id}
                        >
                            <Cards.ArticleCard data={items} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
}

export default HeroArticle;