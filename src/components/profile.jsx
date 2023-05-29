import { Box, Typography } from '@mui/material'

const Profile = ({ img }) => {
    return (
        <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
            <Box className='photo-containers'>
                <Box component='img' src={img} width='175px' />
            </Box>
            <Typography color='text.main' fontSize='0.8rem' pt={2} fontWeight={500}>M. Thariq Ramadhan</Typography>
            <Typography color='primary.main' fontSize='0.7rem' fontWeight={700}>Ketua Umum</Typography>
        </Box>
    );
}

export default Profile;