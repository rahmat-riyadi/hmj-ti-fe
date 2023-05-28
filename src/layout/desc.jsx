import { Box, Typography } from '@mui/material';
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom';

const Desc = () => {
    const navStyle = () => {
        return {
            textDecoration: 'none',
        }
    }

    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            py='72px'
            gap={8}
            flexDirection={{ xs: 'column', md: 'row' }}
        >
            <Box
                component='img'
                width='27.5%'
                pl={{ xs: 0, md: 13.5 }}
                src={logo}
            />
            <Box
                width={{ md: '50%' }}
                px={{ xs: 4 }}
                textAlign='justify'
            >
                <Typography
                    color='primary.main'
                    fontSize={{ xs: 18, md: 30 }}
                    pt={{ xs: 0 }}
                    width='75%'
                    textAlign={{ xs: 'left' }}
                    fontWeight={700}
                >
                    Himpunan Mahasiswa Jurusan Teknik Informatika
                </Typography>
                <Typography
                    fontWeight={500}
                    pt={5}
                    sx={{ textIndent: 36, WebkitLineClamp: '4', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    color='text.main'
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, assumenda! Sint ipsum excepturi vel atque, accusamus non distinctio dicta necessitatibus aliquid aut eum eveniet voluptatum ab? Aspernatur sunt aliquam cupiditate, quaerat impedit nemo doloribus ipsa. Pariatur animi obcaecati repellat vitae consectetur quibusdam consequuntur, tenetur sed quidem aspernatur officia eveniet. Labore!
                </Typography>
                <NavLink to='/tentang' style={navStyle}>
                    <Typography fontWeight={600} color='primary.main'>Lihat Selengkapnya</Typography>
                </NavLink>
            </Box>
        </Box >
    );
}

export default Desc;