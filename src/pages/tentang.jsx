import { Box, Grid, Stack, Typography } from '@mui/material';
import patternTop from '../assets/patternTop.png';
import patternBottom from '../assets/patternBottom.png';
// import img from '../assets/about.png';
import '../styles/about.css';
import dot from '../assets/dot.svg';
// import Profile from '../components/profile';

import aca from '../assets/pengurus/aca.webp';
import aidil from '../assets/pengurus/aidil.webp';
import anca from '../assets/pengurus/anca.webp';
import anhar from '../assets/pengurus/anhar.webp';
import cimol from '../assets/pengurus/cimol.webp';
import dani from '../assets/pengurus/dani.webp';
import darma from '../assets/pengurus/darma.webp';
import daus from '../assets/pengurus/daus.webp';
import fuji from '../assets/pengurus/fuji.webp';
import gardi from '../assets/pengurus/gardi.webp';
import gilang from '../assets/pengurus/gilang.webp';
import haris from '../assets/pengurus/haris.webp';
import idar from '../assets/pengurus/idar.webp';
import khildan from '../assets/pengurus/khildan.webp';
import lebu from '../assets/pengurus/lebu.webp';
import madhan from '../assets/pengurus/madhan.webp';
import maruf from '../assets/pengurus/maruf.webp';
import musda from '../assets/pengurus/musda.webp';
import panjul from '../assets/pengurus/panjul.webp';
import qunio from '../assets/pengurus/qunio.webp';
import rere from '../assets/pengurus/rere.webp';
import thoriq from '../assets/pengurus/thoriq.webp';
import uki from '../assets/pengurus/uki.webp';
import zaim from '../assets/pengurus/zaim.webp';
import gaza from '../assets/pengurus/gaza.webp';
import faisal from '../assets/pengurus/faisal.webp';
import rian from '../assets/pengurus/rian.webp';
import luthfi from '../assets/pengurus/luthfi.webp';
import nuha from '../assets/pengurus/nuha.webp';

import a1 from '../assets/1.webp';
import a2 from '../assets/2.webp';

const Tentang = () => {

    const style = {
        title: {
            color: 'primary.main',
            fontWeight: 700,
            textAlign: 'start',
            fontSize: { xs: '2rem', md: '2rem' }
        },
        title2: {
            color: 'primary.main',
            fontSize: '1.2rem',
            textAlign: 'start',
            fontWeight: 600,
        },
        description: {
            color: 'text.main',
            textAlign: 'justify',
            fontWeight: 500,
            paddingTop: 2
        }
    }

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
                <Box component='img' src={patternTop} position='absolute' left={{ xs: -200, md: -100 }} height='100%' />
                <Box component='img' src={patternBottom} position='absolute' right={{ xs: -200, md: -100 }} height='100%' />
                <Box>
                    <Typography
                        // position='absolute'
                        color='#fff'
                        fontWeight={600}
                        fontSize={{ xs: '2rem', md: '3rem' }}
                    >
                        Tentang HMJ-TI
                    </Typography>
                    <Typography
                        color='#fff'
                        fontWeight={300}
                    >
                        #salamInformatikaJayaInformatika
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ bgcolor: '#F9FAFB' }}>
                <Box position='relative'>
                    <Box
                        loading='lazy'
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        left={0}
                        top={{ xs: '20rem', sm: '25rem', md: '30rem' }}
                        zIndex={2}
                    />
                    <Box
                        loading='lazy'
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        left={0}
                        top={{ xs: '155rem', sm: '150rem', md: '120rem' }}
                        zIndex={2}
                    />
                    <Box
                        loading='lazy'
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        left={0}
                        top={{ xs: '222.5rem', sm: '215rem', md: '190rem' }}
                        zIndex={2}
                    />
                    <Box
                        loading='lazy'
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        left={0}
                        top={{ xs: '285rem', sm: '280rem', md: '250rem' }}
                        zIndex={2}
                    />
                    <Box
                        loading='lazy'
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        right={0}
                        top={{ xs: '87.5rem', sm: '72.5rem', md: '40rem' }}
                        zIndex={2}
                    />
                    <Box
                        loading='lazy'
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        right={0}
                        top={{ xs: '130rem', sm: '125rem', md: '92.5rem' }}
                        zIndex={2}
                    />
                    <Box
                        loading='lazy'
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        right={0}
                        top={{ xs: '195rem', sm: '190rem', md: '155rem' }}
                        zIndex={2}
                    />
                    <Box
                        loading='lazy'
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        right={0}
                        top={{ xs: '255rem', sm: '250rem', md: '225rem' }}
                        zIndex={2}
                    />

                    <Box position='relative' px={{ xs: 6, md: 20 }} zIndex={10}>
                        <Grid container py={12} columnSpacing={2} rowSpacing={{ xs: 8, md: 18 }}>
                            <Grid
                                xs={12}
                                md={6}
                                item
                                alignItems={{ xs: 'center', md: 'start' }}
                                justifyContent='center'
                                flexDirection='column'
                                display='flex'
                            >
                                <Box className='photo-container'>
                                    <Box
                                        loading='lazy'
                                        component='img'
                                        src={a1}
                                        width='75%'
                                    />
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6} item justifyContent='center' flexDirection='column' display='flex'>
                                <Typography sx={style.title}>
                                    Himpunan Mahasiswa Jurusan Teknik Informatika
                                </Typography>
                                <Typography sx={style.description}>
                                    Menjadikan wadah pengembangan teknologi informasi yang unggul, melahirkan kader yang berkepribadian muslim, berakhlakul qarimah, cerdas, kompetitif dan professional yang dijiwai Al-Qur’an dan Al-Hadist
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                                item
                                gap={2}
                                justifyContent='center'
                                flexDirection='column'
                                display='flex'
                            >
                                <Box>
                                    <Typography sx={style.title}>
                                        Visi
                                    </Typography>
                                    <Typography sx={style.description}>
                                        Menjadikan wadah pengembangan teknologi informasi yang unggul, melahirkan kader yang berkepribadian muslim, berakhlakul qarimah, cerdas, kompetitif dan professional yang dijiwai Al-Qur’an dan Al-Hadist
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={style.title}>
                                        Misi
                                    </Typography>
                                    <Box ml={-3}>
                                        <ol>
                                            <li>
                                                <Typography sx={style.description}>Menyelenggarakan proses kaderisasi yang dapat menciptakan pribadi yang mampu beradaptasi dengan lingkungan teknologi informasi secara etis dan intelektual, berkualitas, kompetitif yang dijiwai Al-Qur’an dan Al-Hadist</Typography>
                                            </li>
                                            <li>
                                                <Typography sx={style.description}>Mengembangkan teknologi informasi untuk menunjang kesejahteraan masyarakat, baik materil maupun spiritual</Typography>
                                            </li>
                                        </ol>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                                item
                                justifyContent='center'
                                alignItems={{ xs: 'center', md: 'end' }}
                                flexDirection='column'
                                display='flex'
                            >
                                <Box className='photo-containerr'>
                                    <Box
                                        loading='lazy'
                                        component='img'
                                        src={a2}
                                        width='75%'
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Box py={4} display='flex' flexDirection='column'>
                            <Typography color='primary.main' fontWeight={700} textAlign='center' fontSize='2rem' className='heading'>Pengurus HMJ-TI</Typography>
                            <Stack py={8}>
                                <Typography sx={style.title2}>Presidium</Typography>
                                <Grid
                                    ml={0}
                                    container
                                    py={2}
                                    spacing={8}
                                    display='grid'
                                    sx={{
                                        gridAutoFlow: "column",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr)) !important",
                                        gridAutoColumns: "minmax(200px, 1fr)",
                                        overflowX: 'auto'
                                    }}
                                >
                                    {/* {
                                        pengurus.map(e => {
                                            return ( */}
                                    <Grid item md={3} xs={12} ml={3}>
                                        <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                            <Box className='photo-containers'>
                                                <Box loading='lazy' component='img' src={thoriq} width='175px' />
                                            </Box>
                                            <Box width='200px'>
                                                <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Thariq Putra Aulia Rahmadhana</Typography>
                                                <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Ketua Umum</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item md={3} xs={12} ml={3}>
                                        <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                            <Box className='photo-containers'>
                                                <Box loading='lazy' component='img' src={daus} width='175px' />
                                            </Box>
                                            <Box width='200px'>
                                                <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Muh. Firdaus</Typography>
                                                <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Sekretaris Umum</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item md={3} xs={12} ml={3}>
                                        <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                            <Box className='photo-containers'>
                                                <Box loading='lazy' component='img' src={darma} width='175px' />
                                            </Box>
                                            <Box width='200px'>
                                                <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Darmawati</Typography>
                                                <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Wakil Sekretaris Umum</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item md={3} xs={12} ml={3}>
                                        <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                            <Box className='photo-containers'>
                                                <Box loading='lazy' component='img' src={fuji} width='175px' />
                                            </Box>
                                            <Box width='200px'>
                                                <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Syarifah Fujina Azzahra</Typography>
                                                <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Bendahara Umum</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item md={3} xs={12} ml={3}>
                                        <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                            <Box className='photo-containers'>
                                                <Box loading='lazy' component='img' src={nuha} width='175px' />
                                            </Box>
                                            <Box width='200px'>
                                                <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Nurul Hasanatunnisa</Typography>
                                                <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Wakil Bendahara Umum</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    {/* )
                                        })
                                    } */}
                                </Grid>
                            </Stack>
                        </Box>

                        <Typography sx={style.title2} pb={2}>Bidang - Bidang</Typography>
                        <Box>
                            <Grid container display='flex' textAlign='left' alignItems='center' justifyContent='start'>
                                <Grid item xs={6} md={2}>
                                    <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                        <Box className='photo-containers'>
                                            <Box loading='lazy' component='img' src={madhan} width='175px' />
                                        </Box>
                                        <Box width='200px'>
                                            <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Rahmat Ramadhan</Typography>
                                            <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Wakil Ketua 1</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    md={10}
                                    xs={6}
                                    textAlign='center'
                                    justifyContent='center'
                                    display='flex'
                                >
                                    <Typography
                                        color='#A1A1A1'
                                        fontWeight={700}
                                        fontSize={{ xs: '2rem', md: '6rem' }}
                                        sx={{ opacity: 0.15 }}
                                        textAlign='left'
                                        ml={{ xs: 4, md: 10 }}
                                        mb={5}
                                    >
                                        Wakil Ketua 1
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box py={4}>
                                <Grid container>
                                    <Grid item xs={0} md={2}></Grid>
                                    <Grid item xs={12} md={10} pl={{ xs: 0, md: 8 }}>
                                        <Typography sx={style.title2}>Organisasi & Kaderisasi</Typography>
                                        <Grid
                                            ml={0}
                                            container
                                            py={2}
                                            spacing={8}
                                            display='grid'
                                            sx={{
                                                gridAutoFlow: "column",
                                                gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr)) !important",
                                                gridAutoColumns: "minmax(200px, 1fr)",
                                                overflowX: 'scroll'
                                            }}
                                        >
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={gaza} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Muh Al-Gazali</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Ketua Bidang</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={panjul} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Azizul</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Wakil Ketua Bidang</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={khildan} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Ahmad Khildan Ramadani</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Anggota</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={gardi} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Ahmadi Gardi</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Anggota</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            {/* {
                                                [1, 1, 1, 1].map(e => {
                                                    return (
                                                        <Grid item md={3} xs={12} ml={3}>
                                                            <Profile img={img} />
                                                        </Grid>
                                                    )
                                                })
                                            } */}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={0} md={2}></Grid>
                                    <Grid item xs={12} md={10} pl={{ xs: 0, md: 8 }}>
                                        <Typography sx={style.title2}>Keilmuan</Typography>
                                        <Grid
                                            // textAlign='center'
                                            // display='grid'
                                            ml={0}
                                            container
                                            py={2}
                                            spacing={8}
                                            display='grid'
                                            sx={{
                                                gridAutoFlow: "column",
                                                gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr)) !important",
                                                gridAutoColumns: "minmax(200px, 1fr)",
                                                overflowX: 'scroll'
                                            }}
                                        // sx={{ overflowX: 'auto' }}
                                        // overflow='scroll'
                                        >
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={aidil} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Aidil Ashyari Umar</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Ketua Bidang</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={anhar} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Muhammad Rifky Zauki</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Wakil Ketua Bidang</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={zaim} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Za’im Fathurrahman Ilham</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Anggota</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>

                                            {/* {
                                                [1, 1, 1, 1].map(e => {
                                                    return (
                                                        <Grid item md={3} xs={12} ml={3}>
                                                            <Profile img={img} />
                                                        </Grid>
                                                    )
                                                })
                                            } */}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={0} md={2}></Grid>
                                    <Grid item xs={12} md={10} pl={{ xs: 0, md: 8 }}>
                                        <Typography sx={style.title2}>Pengkajian</Typography>
                                        <Grid
                                            // textAlign='center'
                                            // display='grid'
                                            ml={0}
                                            container
                                            py={2}
                                            spacing={8}
                                            display='grid'
                                            sx={{
                                                gridAutoFlow: "column",
                                                gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr)) !important",
                                                gridAutoColumns: "minmax(200px, 1fr)",
                                                overflowX: 'scroll'
                                            }}
                                        // sx={{ overflowX: 'auto' }}
                                        // overflow='scroll'
                                        >
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={rian} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Muh. Rian</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Ketua Bidang</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={idar} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Andi Muhdar Abdi Salfah</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Wakil Ketua Bidang</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={aca} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Aqilah Zahra</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Anggota</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={gilang} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Muh Gilang Sayu</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Anggota</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            {/* {
                                                [1, 1, 1, 1].map(e => {
                                                    return (
                                                        <Grid item md={3} xs={12} ml={3}>
                                                            <Profile img={img} />
                                                        </Grid>
                                                    )
                                                })
                                            } */}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box>
                            <Grid container display='flex' textAlign='left' alignItems='center' justifyContent='start'>
                                <Grid item xs={6} md={2}>
                                    {/* <Profile img={img} /> */}
                                    <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                        <Box className='photo-containers'>
                                            <Box loading='lazy' component='img' src={anca} width='175px' />
                                        </Box>
                                        <Box width='200px'>
                                            <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Muh. Gufransah Jamaluddin</Typography>
                                            <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Wakil Ketua 2</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    md={10}
                                    xs={6}
                                    textAlign='center'
                                    justifyContent='center'
                                    display='flex'
                                >
                                    <Typography
                                        color='#A1A1A1'
                                        fontWeight={700}
                                        fontSize={{ xs: '2rem', md: '6rem' }}
                                        sx={{ opacity: 0.15 }}
                                        textAlign='left'
                                        ml={{ xs: 4, md: 10 }}
                                        mb={5}
                                    >
                                        Wakil Ketua 2
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box py={4}>
                                <Grid container>
                                    <Grid item xs={0} md={2}></Grid>
                                    <Grid item xs={12} md={10} pl={{ xs: 0, md: 8 }}>
                                        <Typography sx={style.title2}>Kewirausahaan</Typography>
                                        <Grid
                                            ml={0}
                                            container
                                            py={2}
                                            spacing={8}
                                            display='grid'
                                            sx={{
                                                gridAutoFlow: "column",
                                                gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr)) !important",
                                                gridAutoColumns: "minmax(200px, 1fr)",
                                                overflowX: 'scroll'
                                            }}
                                        >
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={cimol} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Nurul Khusnul Khotimah</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Ketua Bidang</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={luthfi} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Muh. Luthfi Mubarak</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Wakil Ketua Bidang</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={musda} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Musdalifah</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Anggota</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={qunio} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Hidayat Saleh</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Anggota</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            {/* {
                                                [1, 1, 1, 1].map(e => {
                                                    return (
                                                        <Grid item md={3} xs={12} ml={3}>
                                                            <Profile img={img} />
                                                        </Grid>
                                                    )
                                                })
                                            } */}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={0} md={2}></Grid>
                                    <Grid item xs={12} md={10} pl={{ xs: 0, md: 8 }}>
                                        <Typography sx={style.title2}>Minat & Bakat</Typography>
                                        <Grid
                                            // textAlign='center'
                                            // display='grid'
                                            ml={0}
                                            container
                                            py={2}
                                            spacing={8}
                                            display='grid'
                                            sx={{
                                                gridAutoFlow: "column",
                                                gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr)) !important",
                                                gridAutoColumns: "minmax(200px, 1fr)",
                                                overflowX: 'scroll'
                                            }}
                                        // sx={{ overflowX: 'auto' }}
                                        // overflow='scroll'
                                        >
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={lebu} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Muh. Alif Afwan</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Ketua Bidang</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={faisal} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Muhammad Faisal Iskandar</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Wakil Ketua Bidang</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={dani} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Nurramadani</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Anggota</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={haris} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Muh. Abdul Haris</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Anggota</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            {/* {
                                                [1, 1, 1, 1].map(e => {
                                                    return (
                                                        <Grid item md={3} xs={12} ml={3}>
                                                            <Profile img={img} />
                                                        </Grid>
                                                    )
                                                })
                                            } */}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={0} md={2}></Grid>
                                    <Grid item xs={12} md={10} pl={{ xs: 0, md: 8 }}>
                                        <Typography sx={style.title2}>Hubungan Masyarakat</Typography>
                                        <Grid
                                            // textAlign='center'
                                            // display='grid'
                                            ml={0}
                                            container
                                            py={2}
                                            spacing={8}
                                            display='grid'
                                            sx={{
                                                gridAutoFlow: "column",
                                                gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr)) !important",
                                                gridAutoColumns: "minmax(200px, 1fr)",
                                                overflowX: 'scroll'
                                            }}
                                        // sx={{ overflowX: 'auto' }}
                                        // overflow='scroll'
                                        >
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={maruf} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>M. Maruf Amiruddin</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Ketua Bidang</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={uki} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Abd. Muqsith</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Wakil Ketua Bidang</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={12} ml={3}>
                                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                                    <Box className='photo-containers'>
                                                        <Box loading='lazy' component='img' src={rere} width='175px' />
                                                    </Box>
                                                    <Box width='200px'>
                                                        <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>Radhiah Mardhiah</Typography>
                                                        <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Anggota</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            {/* {
                                                [1, 1, 1, 1].map(e => {
                                                    return (
                                                        <Grid item md={3} xs={12} ml={3}>
                                                            <Profile img={img} />
                                                        </Grid>
                                                    )
                                                })
                                            } */}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Tentang;