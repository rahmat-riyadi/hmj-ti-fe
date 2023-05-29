import { Typography, Box, Grid, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import Cards from '../components/card';
import { motion } from 'framer-motion';

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
            bgcolor='#F9FAFB'
        >
            <Container maxWidth='lg'>
                <Typography
                    fontWeight={700}
                    fontSize={30}
                    color='primary.main'
                    className='heading'
                >
                    Berita & Informasi
                </Typography>
                <Grid container py={5} px={{ xs: 2, sm: 10, md: 14, lg: 18 }} rowSpacing={4} columnSpacing={4} >
                    {articles?.map((items,i) => {
                        return (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                display='flex'
                                justifyContent='center'
                                key={items.id}
                            >
                                <motion.div
                                    initial={{ y: 80, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i*0.2, duration: 1 }}
                                >
                                    <Cards.ArticleCard data={items} />
                                </motion.div>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container >
        </Box>
    );
}

export default HeroArticle;