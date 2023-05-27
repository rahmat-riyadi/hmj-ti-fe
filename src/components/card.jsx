import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardMedia, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import image from '../assets/ekref.png'
import imageBorder from '../assets/ekrefCard.png'

const ArticleCard = (props) => {
    const title = props.data.title;
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
                    textOverflow='ellipsis'
                >
                    {title}
                    {/* Papan Margin */}
                </Typography>
                <Typography
                    variant='body2'
                    color='#454F5B'
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
        // <Card
        //     sx={{
        //         height: '250px',
        //         position: 'relative',
        //         width: '580px',
        //         display: 'flex',
        //         // margin: '100px',
        //         // marginTop:'56px',   
        //         alignItems: 'center'
        //     }}
        // >
        //     <Box
        //         component='img'
        //         src={image}
        //         pl='18px'
        //         width='26.25%'
        //         height='75%'
        //         margin='6px'
        //     // mt='20px'    
        //     />
        //     <CardContent sx={{ paddingTop: 0 }}>
        //         <Typography fontWeight={600} fontSize={13} color='#ACACAC' letterSpacing={1.5}>{newdate}</Typography>
        //         <Typography textAlign='left' color='#BA1F1A' fontWeight={700} fontSize={20} pt={1}>
        //             Test
        //         </Typography>
        //         <Typography
        //             variant='body2'
        //             color='#454F5B'
        //             textAlign='justify'
        //             fontSize={11}
        //             pt={1}
        //             width='85%'
        //         >
        //             Lorem ipsum dolor sit amet consectetur. Tincidunt et elit enim neque scelerisque donec mauris malesuada. Potenti sagittis metus amet tincidunt proin accumsan id
        //         </Typography>
        //     </CardContent>
        //     <Box
        //         component='img'
        //         position='absolute'
        //         bottom={0}
        //         right={0}
        //         height='80%'
        //         src={imageBorder}
        //     />
        // </Card>

        <Card
            sx={{
                height: '300px',
                position: 'relative',
                width: '250px',
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
                    textOverflow='ellipsis'
                >
                    {/* {title} */}
                    Papan Margin
                </Typography>
                <Typography
                    variant='body2'
                    color='#454F5B'
                    textAlign='justify'
                    fontSize={11}
                    pt={1}
                >
                    {/* {description} */}
                    Senin, 3 Mei 2027
                </Typography>
            </CardContent>
            <Divider variant='middle' />
            <CardActions>
                <Box px={1}>
                    <Box>
                        <Typography mb={0.5} fontSize={16} fontWeight={600}>Rp. 30.000</Typography>
                        <Typography fontSize={12}>Harga per item</Typography>
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </CardActions>
        </Card >
    );
}

const Cards = {
    ArticleCard,
    ProductCard
}

export default Cards;