import { Box, Typography, Stack, Button, Container, Grid } from '@mui/material';
import dot from '../assets/dot.svg';
// import telLogo from '../assets/tel.svg';
// import classes from '../styles/heroFeedback.module.css';
import InputComponent from '../components/input';
import { motion } from 'framer-motion';

// const styles = {
//     title: {
//         fontWeight: 200,
//         fontSize: 9,
//     },
//     contact: {
//         fontWeight: 600,
//         fontSize: 12,
//     }
// }

const Feedback = () => {
    return (
        // <Box
        //     bgcolor='#ffffff'
        //     height={{ sm: 'auto', md: '90vh' }}
        //     width='100%'
        //     display='flex'
        //     flexWrap='wrap'
        //     position='relative'
        // >
        //     <Box
        //         display='flex'
        //         flexDirection={{ xs: 'row' }}
        //         className={classes.container}
        //         bgcolor='#BA1F1A'
        //         height={{ xs: '100vh', md: '78.5%' }}
        //         width={{ xs: '100%', md: '72.75%' }}
        //         alignSelf='flex-end'
        //     >
        //         <Box color='#fff' pt={10} pl={{ xs: 0, md: 24 }} width='100%' overflow='hidden'>
        //             <Typography fontWeight={700} fontSize={38}>Ada pertanyaan?</Typography>
        //             <Typography fontWeight={300} fontSize={12}>Jangan ragu untuk menghubungi kami</Typography>
        //             <Stack spacing={2} pt={4}>
        //                 <Stack direction='row' alignItems='center' gap={1}>
        //                     <Box component='img' src={emailLogo} height='26px' />
        //                     <Box>
        //                         <Typography style={styles.title}>Email</Typography>
        //                         <Typography style={styles.contact}>hmti.uinam@gmail.com</Typography>
        //                     </Box>
        //                 </Stack>
        //                 <Stack
        //                     direction='row'
        //                     alignItems='center'
        //                     gap={1}
        //                 >
        //                     <Box component='img' src={telLogo} height='26px' />
        //                     <Box>
        //                         <Typography style={styles.title}>Telepon</Typography>
        //                         <Typography style={styles.contact}>310-437-2766</Typography>
        //                     </Box>
        //                 </Stack>
        //             </Stack>
        //         </Box>
        //     </Box>
        //     <Box
        //         position={{ xs: 'absolute', md: 'absolute' }}
        //         bottom={{ xs: 90, md: 68.5 }}
        //         right={{ xs: 0, md: 189.75 }}
        //         left={{ xs: 0, md: 700 }}
        //         margin={{ xs: '0 auto' }}
        //         boxShadow='4px 4px 27px rgba(0, 0, 0, 0.09)'
        //         bgcolor='#ffffff'
        //         // height='85%'
        //         height='470px'
        //         width={{ xs: '85%', md: '392.5px' }}
        //         zIndex={1}
        //     >
        //         <Stack px={4} gap={2.5} height='100%' justifyContent='center'>
        //             <TextField placeholder='Nama' size='small' required />
        //             <TextField placeholder='Email' size='small' required />
        //             <TextField placeholder='Telepon (opsional)' size='small' />
        //             <TextField multiline rows={5} />
        //             <Button sx={{ justifySelf: 'start', width: '25%' }} variant='contained' size='small' > Kirim</Button>
        //         </Stack>
        //     </Box>
        // </Box >
        <Box position='relative' bgcolor={'#F9FAFB'}>
            <motion.img
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: .2 }}
                src={dot}
                style={{ position: 'absolute', right: 0, top: 0 }}
            />
            <motion.img
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: .2 }}
                src={dot}
                style={{ position: 'absolute', bottom: 0, left: 0 }}
            />
            <Container maxWidth="lg" sx={{ pt: 10, pb: 20 }}>
                <Box
                    position='relative'
                    textAlign='center'
                    display='flex'
                    maxWidth={{ xs: '90%', md: '70%' }}
                    marginX='auto'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    zIndex={99}
                >
                    <Stack mb={7} gap={2} width={{ xs: '100%', md: '75%' }}>
                        <Typography variant='h1' fontWeight={700} color='primary.main' fontSize={{ xs: 21, md: 30 }}>Kirimkan Pesan kepada Kami</Typography>
                        <Typography fontSize={{ xs: 13, md: 14 }}>Kirimkan pesan kepada kami untuk berbagi informasi, permintaan, atau komentar apa pun yang ingin Anda sampaikan. kami dengan senang hati dan akan meresponsnya</Typography>
                    </Stack>
                    <form action="" method="post">
                        <Grid container columnSpacing={5} rowSpacing={2} alignItems='center' justifyContent='center'>
                            <Grid item xs={12} md={6}>
                                <InputComponent id='nama' label='Nama Lengkap' required={true} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputComponent id='email' type='email' label='Email' />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputComponent id='tel' type='tel' label='Telepon/Whatsapp' />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputComponent id='instansi' label='Instansi' />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <InputComponent id='deskripsi' label='Deskripsi' required={true} multiline={true} />
                            </Grid>
                            <Grid item xs={12} md={12} mt={2}>
                                <Button variant='contained' sx={{ textTransform: 'capitalize', py: 1 }} fullWidth>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </Box>
    );
}

export default Feedback;