import { Box, Grid, Stack, Typography } from '@mui/material';
import patternTop from '../assets/patternTop.png';
import patternBottom from '../assets/patternBottom.png';
import img from '../assets/about.png';
import '../styles/about.css';
import dot from '../assets/dot.svg';
import Profile from '../components/profile';

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
                        fontWeight={600}
                    >
                        #salamInformatikaJayaInformatika
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ bgcolor: '#F9FAFB' }}>
                <Box position='relative'>
                    <Box
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        left={0}
                        top={{ xs: '20rem', sm: '25rem', md: '30rem' }}
                        zIndex={2}
                    />
                    <Box
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        left={0}
                        top={{ xs: '155rem', sm: '150rem', md: '120rem' }}
                        zIndex={2}
                    />
                    <Box
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        left={0}
                        top={{ xs: '222.5rem', sm: '215rem', md: '190rem' }}
                        zIndex={2}
                    />
                    <Box
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        left={0}
                        top={{ xs: '285rem', sm: '280rem', md: '250rem' }}
                        zIndex={2}
                    />
                    <Box
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        right={0}
                        top={{ xs: '87.5rem', sm: '72.5rem', md: '40rem' }}
                        zIndex={2}
                    />
                    <Box
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        right={0}
                        top={{ xs: '130rem', sm: '125rem', md: '92.5rem' }}
                        zIndex={2}
                    />
                    <Box
                        component='img' src={dot}
                        position='absolute'
                        width={{ xs: '20%', md: '10%' }}
                        right={0}
                        top={{ xs: '195rem', sm: '190rem', md: '155rem' }}
                        zIndex={2}
                    />
                    <Box
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
                                <Box className='photo-container' marginLeft={{ xs: 9, sm: 13 }}>
                                    <Box
                                        component='img'
                                        src={img}
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
                                <Box className='photo-containerr' ml={{ xs: 9, sm: 13 }}>
                                    <Box
                                        component='img'
                                        src={img}
                                        width='75%'
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Box py={4} display='flex' flexDirection='column'>
                            <Typography color='primary.main' fontWeight={700} textAlign='center' fontSize='2rem'>Pengurus HMJ-TI</Typography>
                            <Stack py={8}>
                                <Typography sx={style.title2}>Badan Pengurus</Typography>
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
                                    {
                                        [1, 1, 1, 1, 1].map(e => {
                                            return (
                                                <Grid item md={3} xs={12} ml={3}>
                                                    <Profile img={img} />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Stack>
                        </Box>

                        <Typography sx={style.title2} pb={2}>Bidang - Bidang</Typography>
                        <Box>
                            <Grid container display='flex' textAlign='left' alignItems='center' justifyContent='start'>
                                <Grid item xs={6} md={2}>
                                    <Profile img={img} />
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
                                            {
                                                [1, 1, 1, 1].map(e => {
                                                    return (
                                                        <Grid item md={3} xs={12} ml={3}>
                                                            <Profile img={img} />
                                                        </Grid>
                                                    )
                                                })
                                            }
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
                                            {
                                                [1, 1, 1, 1].map(e => {
                                                    return (
                                                        <Grid item md={3} xs={12} ml={3}>
                                                            <Profile img={img} />
                                                        </Grid>
                                                    )
                                                })
                                            }
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
                                            {
                                                [1, 1, 1, 1].map(e => {
                                                    return (
                                                        <Grid item md={3} xs={12} ml={3}>
                                                            <Profile img={img} />
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box>
                            <Grid container display='flex' textAlign='left' alignItems='center' justifyContent='start'>
                                <Grid item xs={6} md={2}>
                                    <Profile img={img} />
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
                                            {
                                                [1, 1, 1, 1].map(e => {
                                                    return (
                                                        <Grid item md={3} xs={12} ml={3}>
                                                            <Profile img={img} />
                                                        </Grid>
                                                    )
                                                })
                                            }
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
                                            {
                                                [1, 1, 1, 1].map(e => {
                                                    return (
                                                        <Grid item md={3} xs={12} ml={3}>
                                                            <Profile img={img} />
                                                        </Grid>
                                                    )
                                                })
                                            }
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
                                            {
                                                [1, 1, 1, 1].map(e => {
                                                    return (
                                                        <Grid item md={3} xs={12} ml={3}>
                                                            <Profile img={img} />
                                                        </Grid>
                                                    )
                                                })
                                            }
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