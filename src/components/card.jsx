import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardMedia, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import image from '../assets/ekref.png';
import imageBorder from '../assets/ekrefCard.png';

import whatsappLogo from '../assets/products/whatsapp.svg';
import instagramLogo from '../assets/products/instagram.svg';


const ArticleCard = (props) => {
    // const title = props.data.title;
    const description = props.data.title;
    const image = props.data.url;

    return (
        // <Card
        //     sx={{
        //         height: '340px',
        //         position: 'relative',
        //         width: '250px',
        //         display: 'flex',
        //         alignItems: 'center',
        //         flexDirection: 'column'
        //     }}
        // >
        //     <CardMedia
        //         component='img'
        //         src={image}
        //         // width='90%'
        //         height='44%'
        //         sx={{ width: '90%', mx: 'auto', mt: '20px' }}
        //     />
        //     <CardContent>
        //         <Typography
        //             textAlign='left'
        //             whiteSpace='nowrap'
        //             overflow='hidden'
        //             fontWeight={700}
        //             fontSize={20}
        //             pt={1}
        //             textOverflow='ellipsis'
        //         >
        //             {title}
        //         </Typography>
        //         <Typography
        //             variant='body2'
        //             color='#454F5B'
        //             textAlign='justify'
        //             fontSize={11}
        //             pt={1}
        //         >
        //             {description}
        //         </Typography>
        //     </CardContent>
        //     <CardActions>
        // <NavLink to='/berita-&-kegiatan/1'>
        //     <Typography
        //         color='primary.main'
        //         fontSize={11}
        //         fontWeight={500}
        //         pb={3}
        //         pr={3}
        //         right={0}
        //         position='absolute'
        //         bottom={0}
        //     >
        //         Baca Selengkapnya
        //     </Typography>
        // </NavLink>
        //     </CardActions>
        // </Card >

        <Card
            sx={{
                height: '300px',
                position: 'relative',
                width: '250px',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)'
            }}
        >
            <CardMedia
                component='img'
                src={image}
                // width='90%'
                height='44%'
                sx={{ width: '90%', mx: 'auto', mt: '20px' }}
            // mt='20px'
            // mx='auto'
            />
            <CardContent sx={{ paddingTop: 0 }}>
                <Typography
                    textAlign='left'
                    whiteSpace='nowrap'
                    overflow='hidden'
                    fontWeight={700}
                    fontSize={20}
                    pt={1}
                    color='text.main'
                    textOverflow='ellipsis'
                >
                    Article Satu
                    {/* Papan Margin */}
                </Typography>
                <Typography
                    variant='body2'
                    color='text.secondary'
                    textAlign='justify'
                    fontSize={11}
                    pt={1}
                >
                    {description}
                    {/* Senin, 3 Mei 2027 */}
                </Typography>
            </CardContent>
            <CardActions>
                <NavLink to='/berita-&-kegiatan/1'>
                    <Typography
                        color='primary.main'
                        fontSize={11}
                        fontWeight={500}
                        pb={3}
                        pr={3}
                        right={0}
                        position='absolute'
                        bottom={0}
                    >
                        Baca Selengkapnya
                    </Typography>
                </NavLink>
            </CardActions>
        </Card >

    );
}

export const ProductCard = (props) => {
    const date = '17 November 2023';
    const newdate = date.replace(/ /g, '-');

    return (
        <Card
            sx={{
                boxShadow: '0px 4px 22px -6px rgba(0, 0, 0, 0.12)',
                maxHeight: '250px',
                position: 'relative',
                maxWidth: '580px',
                display: 'flex',
                // margin: '100px',
                // marginTop:'56px',   
                alignItems: 'center'
            }}
        >
            <Box
                component='img'
                src={image}
                pl='18px'
                py={2}
                width='30%'
                // height='90%'
                margin={{ xs: 0, md: '6px' }}
            // mt='20px'    
            />
            <CardContent>
                <Typography fontWeight={600} fontSize={13} color='#ACACAC' letterSpacing={1.5}>{newdate}</Typography>
                <Typography textAlign='left' color='#BA1F1A' fontWeight={600} fontSize='1.2rem' pt={1}>
                    Jasa Pembayaran UKT
                </Typography>
                <Typography
                    variant='body2'
                    color='#454F5B'
                    textAlign='justify'
                    fontSize='0.6rem'
                    py={1}
                    width='85%'
                >
                    Lorem ipsum dolor sit amet consectetur. Tincidunt et elit enim neque scelerisque donec mauris malesuada. Potenti sagittis metus amet tincidunt proin accumsan id
                </Typography>
                <Stack flexDirection={{ xs: 'column', md: 'row' }} mt={1} gap={{ xs: 1, md: 2 }} justifyContent='start' alignItems='start'>
                    <Stack flexDirection='row' justifyContent='center' alignItems='center' gap={1}>
                        <Box
                            component='img'
                            src={whatsappLogo}
                            width={18}
                        />
                        <Typography fontSize={{ xs: '0.7rem', md: '0.9rem' }} fontWeight={500} color='text.secondary'>0878-1958-2058</Typography>
                    </Stack>
                    <Stack flexDirection='row' justifyContent='center' alignItems='center' gap={1}>
                        <Box
                            component='img'
                            src={instagramLogo}
                            width={18}
                        />
                        <Typography fontSize={{ xs: '0.7rem', md: '0.9rem' }} fontWeight={500} color='text.secondary'>@hmjti_uinam</Typography>
                    </Stack>
                </Stack>
            </CardContent>
            <Box
                component='img'
                position='absolute'
                bottom={0}
                right={{ xs: -10, md: 0 }}
                height='80%'
                src={imageBorder}
            />
        </Card>

        // <Card
        //     sx={{
        //         height: '300px',
        //         position: 'relative',
        //         width: '250px',
        //     }}
        // >
        //     <CardMedia
        //         component='img'
        //         src={image}
        //         // width='90%'
        //         height='44%'
        //         sx={{ width: '90%', mx: 'auto', mt: '20px' }}
        //     // mt='20px'
        //     // mx='auto'
        //     />
        //     <CardContent sx={{ paddingTop: 0 }}>
        //         <Typography
        //             textAlign='left'
        //             whiteSpace='nowrap'
        //             overflow='hidden'
        //             fontWeight={700}
        //             fontSize={20}
        //             pt={1}
        //             textOverflow='ellipsis'
        //         >
        //             {/* {title} */}
        //             Papan Margin
        //         </Typography>
        //         <Typography
        //             variant='body2'
        //             color='#454F5B'
        //             textAlign='justify'
        //             fontSize={11}
        //             pt={1}
        //         >
        //             {/* {description} */}
        //             Senin, 3 Mei 2027
        //         </Typography>
        //     </CardContent>
        //     <Divider variant='middle' />
        //     <CardActions>
        //         <Box px={1}>
        //             <Box>
        //                 <Typography mb={0.5} fontSize={16} fontWeight={600}>Rp. 30.000</Typography>
        //                 <Typography fontSize={12}>Harga per item</Typography>
        //             </Box>
        //             <Box>

        //             </Box>
        //         </Box>
        //     </CardActions>
        // </Card >
    );
}

const Cards = {
    ArticleCard,
    ProductCard
}

export default Cards;