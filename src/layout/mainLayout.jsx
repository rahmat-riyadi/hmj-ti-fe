import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from '../components/footer';

export default function MainLayout() {
    return (
        <Box>
            <Navbar />
            <Box mt={10}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}