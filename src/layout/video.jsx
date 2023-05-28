import { Stack, Box } from "@mui/material";

const VideoFrame = () => {
    const src = 'https://www.youtube.com/embed/6ar36Qn6Yh0';
    const overlay = src + '?wmode=transparent'

    return (
        <Stack
            width='100%'
            height='75vh'
            py={10}
            justifyContent='center'
            alignItems='center'
        >
            <Box
                width={{ xs: '95%', md: '58.5%' }}
                height={{ md: '100%' }}
            >
                <iframe
                    width="100%"
                    height="100%"
                    src={overlay}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </Box>
        </Stack>
    );
}

export default VideoFrame;