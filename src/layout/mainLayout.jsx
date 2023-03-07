import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function MainLayout(){
    return(
        <Box>
            <Navbar/>
            <Outlet/>
        </Box>
    )
}