import { Box, Typography } from '@mui/material';
// import { useParams } from 'react-router-dom';
// import Footer from '../components/footer';
import detailPic from '../assets/article-detail.png'

const ArticleDetail = () => {
    // const { id } = useParams()

    return (
        <Box
            py={4}
            display='flex'
            alignItems='center'
            flexDirection='column'
            bgcolor='#F9FAFB'
        >
            <Box textAlign='justify' width={{ xs: '85%', md: '69.5%' }}>
                <Typography
                    pb={2}
                    fontWeight={700}
                    fontSize={{ xs: 20, md: 28 }}
                    textAlign='center'
                >
                    Rapat Kerja HMJ-TI Periode 2023-2024
                </Typography>
                <Box component='img' src={detailPic} width='100%' />
                <Typography fontWeight={300} sx={{ opacity: 0.57 }} py={2} fontStyle='italic'>Dipublikasikan pada 17-November-2023</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur. Proin tortor risus tristique at viverra adipiscing sed ipsum neque. Quis gravida augue maecenas lectus amet sagittis sit lacus. Sit feugiat lacus maecenas a lorem arcu enim vitae. Nisl elit lectus in phasellus adipiscing amet quis sit eget. Aliquet cras semper sit diam elit viverra viverra eleifend adipiscing. Sed pretium ut mollis vestibulum. Massa tempus turpis nulla ut. Ornare et malesuada elit in feugiat mauris nulla. Vel pharetra enim adipiscing laoreet elit cras sit. Sed venenatis consequat elit velit at duis. Rhoncus a donec volutpat quam est nulla. Diam sapien orci sit mauris ornare magnis. Nec venenatis nibh nulla blandit sapien in nisl. Eget vitae feugiat sagittis enim aenean libero.
                    Posuere ornare vestibulum congue eu nunc sed turpis mauris. At ut amet iaculis sed. Id integer dolor in nunc vulputate et molestie dolor laoreet. Eget amet pharetra consequat praesent. Nulla mattis integer in non eu turpis urna neque tortor. Turpis ac amet interdum mauris diam placerat iaculis. Et ultrices nisl in cras hendrerit. Id nullam et libero arcu eget. Amet arcu dictumst lorem ornare mollis amet varius.
                    Aliquet dolor leo hac pharetra arcu cursus. Placerat mauris erat nisl in pretium lectus. Magna amet tristique sit lorem sit enim. Eu metus elementum pellentesque sit dui amet mauris convallis. Suspendisse lorem tristique tincidunt nisi. Nunc posuere varius neque enim a nullam ultrices. Tellus duis egestas viverra tristique risus eget. Vitae risus et mi tortor vulputate. Diam porttitor egestas nunc gravida egestas.
                    Amet pretium sed ut molestie. Integer urna nisl mauris felis. Diam feugiat nulla ut sed sit. Proin nisi viverra nulla eu tempor hac sit ante. Eget ultricies mattis non nulla integer. Volutpat cursus euismod eros non vulputate nisl. Ac sit tortor dolor sapien lectus sollicitudin. Tempus commodo orci lectus imperdiet nibh elementum sit. Morbi turpis lobortis neque ultricies ligula eget eros nisl a. At ut lobortis semper sem a lectus sit. Feugiat massa vitae varius lacus sapien aliquet ipsum vestibulum velit.</Typography>
            </Box>
        </Box>
    );
}

export default ArticleDetail;