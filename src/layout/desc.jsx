import { Box, Typography } from '@mui/material';
import logo from '../assets/logo.svg'

const Desc = () => {
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
                    sx={{ textIndent: 36 }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, assumenda! Sint ipsum excepturi vel atque, accusamus non distinctio dicta necessitatibus aliquid aut eum eveniet voluptatum ab? Aspernatur sunt aliquam cupiditate, quaerat impedit nemo doloribus ipsa. Pariatur animi obcaecati repellat vitae consectetur quibusdam consequuntur, tenetur sed quidem aspernatur officia eveniet. Labore!
                </Typography>
            </Box>
        </Box >
    );
}

export default Desc;