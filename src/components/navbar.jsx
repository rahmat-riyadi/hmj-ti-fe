import { AppBar, Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { Stack } from "@mui/system";
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'
import './navbar.module.css'
import { useState } from 'react';

const menus = ['Berita & Kegiatan', 'Ekonomi Kreatif', 'Tentang'];

export default function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [toggle, setToggle] = useState(-1000)

    const showNav = () => {
        if (toggle !== 0) {
            setToggle(0);
            return;
        }
        setToggle(-1000);
    }

    return (
        <AppBar sx={{ boxShadow: 'none' }} position='fixed'>
            <Toolbar sx={{ height: 80, bgcolor: '#fff' }}>
                <Stack
                    direction='row'
                    width='100%'
                    justifyContent='space-between'
                    alignItems='center'
                    px={2.5}
                >
                    <Box
                        component='img'
                        src={logo}
                        height={55}
                    />
                    <Box position='absolute' display={{ sx: 'block', md: 'none' }} zIndex={10} right={0}>
                        <input type='button' onClick={() => { showNav() }}></input>
                    </Box>
                    <Stack
                        direction='row'
                        columnGap={3.8}
                        display={{ xs: 'none', md: 'flex' }}
                    >
                        <Link />
                    </Stack>
                    <Stack
                        direction='column'
                        position='absolute'
                        top={0}
                        right={toggle}
                        margin='0 auto'
                        height='100vh'
                        width='100%'
                        textAlign='center'
                        justifyContent='center'
                        gap={15}
                        zIndex={3}
                        bgcolor='#ffffff'
                        // sx={{ opacity: 1 }}
                        display={{ xs: 'flex', md: 'none' }}
                    >
                        <Link showNav={showNav} isMobile={isMobile} />
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    )
};

const Link = ({ showNav, isMobile }) => {
    const navStyle = ({ isActive }) => {
        return {
            fontSize: '15.6px',
            textDecoration: 'none',
            fontWeight: isActive ? '500' : '400',
            color: isActive ? '#B20600' : '#000',
        }
    }

    return (
        <>
            <NavLink to='/' style={navStyle} onClick={() => { isMobile && showNav() }}>Beranda</NavLink>
            {
                menus.map((menu) => (
                    <NavLink
                        key={menu}
                        to={menu.replace(/\s+/g, '-').toLocaleLowerCase()}
                        style={navStyle}
                        onClick={() => { isMobile && showNav() }}
                    >
                        {menu}
                    </NavLink>
                ))
            }
        </>
    )
}