import { Stack } from "@mui/system";

export default function Navbar(){
    return(
        <Stack 
            direction='columns' 
            sx={{ bgcolor: 'primary.main' }} 
            justifyContent='space-between' 
            alignItems='center'
        >
            <h1>Hmjti</h1>
            <Stack direction='columns' >
                <p>berand1</p>
                <p>berand1</p>
                <p>berand1</p>
                <p>berand1</p>
            </Stack>
        </Stack>
    )
}