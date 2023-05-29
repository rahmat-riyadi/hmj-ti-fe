import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import './hero.css'
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, Parallax } from "swiper";
import { useState } from 'react';
import hero from '../assets/hero.png';     

const data = [
    {
        id: 1,
        title: 'Himpunan Mahasiswa Jurusan Teknik Informatika',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam a necessitatibus modi reiciendis eaque! Non qui hic facere voluptates velit!',
        // image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW4lMjBhdCUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
    {
        id: 2,
        title: 'Himpunan Mahasiswa Jurusan Teknik Informatika',
        description: 'Lorem ipsum dolor sit amet consectetur. Velit sagittis quisque suspendisse leo ut metus quis. Risus neque nascetur id in tempus phasellus pretium facilisi in. A metus consequat adipiscing quis vel ipsum. Libero sit vitae habitant auctor. Elit proin lectus arcu eget suspendisse mollis',
        // image: 'https://asset.kompas.com/crop/0x0:777x518/750x500/data/photo/2019/10/17/5da85a643fafc.jpg'
    },
    {
        id: 3,
        title: 'Himpunan Mahasiswa Jurusan Teknik Keilmuan',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam a necessitatibus modi reiciendis eaque! Non qui hic facere voluptates velit!',
        // image: 'https://cdn-2.tstatic.net/makassar/foto/bank/images/kampus-uin-alauddin-makassar-8122021.jpg'
    },
    {
        id: 4,
        title: 'Himpunan Mahasiswa Jurusan Teknik PWK',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam a necessitatibus modi reiciendis eaque! Non qui hic facere voluptates velit!',
        // image: 'https://cdn-2.tstatic.net/makassar/foto/bank/images/kampus-uin-alauddin-makassar-8122021.jpg'
    },
]

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    // const [highlights, setHighlight] = useState([]);

    // const getHighlight = async () => {
    //     try {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=5');
    //         const data = await res.json();
    //         setHighlight(data);
    //         setActiveIndex(0)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getHighlight();
    // }, [])

    return (
        <Box height={{ xs: '91.5vh', md: '87vh' }} width='100%' position='relative'>
            <Box
                className='pagination'
                sx={{ position: 'absolute' }}
                paddingBottom={{ xs: 1, md: 9.8 }}
                paddingLeft={{ md: 17.7 }}
                right={0}
                left={0}
                marginLeft={{ xs: 'auto', md: 0 }}
                marginRight='auto'
                zIndex={999}
                color='primary.main'
            />
            <Swiper
                // onSlideChange={(swiper) =>
                //     setActiveIndex(swiper.realIndex)
                // }
                onSlideChangeTransitionStart={(swiper) =>
                    setActiveIndex(swiper.realIndex)
                }
                position='relative'
                speed={720}
                effect='fade'
                // spaceBetween={30}
                centeredSlides={true}
                loop={true}
                parallax={true}
                // autoplay={{
                //     delay: 500,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                    el: '.pagination',
                }}
                navigation={true}
                modules={[Parallax, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data?.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Box
                            component='img'
                            // src={slide?.image}
                            src={hero}
                            width='100%'
                        />
                    </SwiperSlide>
                ))}
                {<>
                    <Box
                        position='absolute'
                        top={0}
                        marginX={{ xs: 'auto', md: 0 }}
                        pt={16.1}
                        color='#ffffff'
                        zIndex={100}
                        left={{ xs: 0 }}
                        right={{ xs: 0 }}
                        width={{ xs: '85%', md: '35.8%' }}
                        pl={{ xs: 0, md: 17.5 }}
                        sx={{ pointerEvents: 'none' }}
                    >
                        {/* <Slide direction='right'> */}
                        <Typography
                            // fontSize={31.9}
                            fontSize={{ xs: '8vw', md: '2.5vw' }}
                            lineHeight={1.4}
                            fontWeight={{ xs: 700, md: 600 }}
                            textAlign='start'
                            className='text'
                        >
                            {/* {highlights[activeIndex]?.title} */}
                            {data[activeIndex].title}
                        </Typography>
                        {/* </Slide> */}
                        <Typography
                            pt={{ xs: 3, md: 5 }}
                            // fontSize={13.3}
                            fontSize={{ xs: '3.5vw', md: '1vw' }}
                            fontWeight={300}
                            pl={{ xs: 0, md: 0.5 }}
                            textAlign='justify'
                        >
                            {/* {highlights[activeIndex]?.description} */}
                            {data[activeIndex].description}
                        </Typography>
                    </Box>
                </>}
                <Box
                    className='slideContainer'
                    sx={{
                        opacity: '80%',
                        "::before": {
                            display: 'block',
                            position: 'absolute',
                            content: '""',
                            left: '90%',
                            opacity: '0.35',
                            height: '100%',
                            width: '101px',
                            bgcolor: '#BA1F1A',
                            zIndex: '0',
                        },
                        pointerEvents: 'none'
                    }}
                    zIndex={5}
                    left={0}
                    top={0}
                    position='absolute'
                    bgcolor={{ xs: '#BA1F1A', md: '#BA1F1A' }}
                    height={{ xs: '91.5vh', md: '87vh' }}
                    width={{ xs: '100%', md: '50.5%' }}
                />
            </Swiper>
        </Box >
    );
}

export default Hero;