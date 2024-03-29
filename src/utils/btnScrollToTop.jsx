import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Fab from '@mui/material/Fab';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { useState } from 'react';
import { useEffect } from 'react';
import { ArrowUpward } from '@mui/icons-material';

export default function BtnScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <>
            {isVisible && (<Fade in={isVisible}>
                <Box
                    onClick={goToBtn}
                    role="presentation"
                    sx={{ position: 'fixed' }}
                    zIndex={9999}
                    bottom={36}
                    right={{ xs: 10, md: 48 }}
                >
                    <ArrowUpward sx={{ bgcolor: 'primary.main', opacity: 0.7, color: '#ffffff', p: 1.5, borderRadius: '50%' }} />
                </Box>
            </Fade>)}
        </>
    );
}