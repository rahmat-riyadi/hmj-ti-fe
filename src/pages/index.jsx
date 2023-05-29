// import Footer from '../components/footer';
import HeroArticle from '../layout/heroArticle';
import Desc from '../layout/desc';
import Hero from '../layout/hero';
import VideoFrame from '../layout/video';
import HeroProduct from '../layout/heroProduct';
import Feedback from '../layout/heroFeedback';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {
    return (
        <>
            <Hero />
            <Desc />
            <VideoFrame />
            <HeroArticle />
            <HeroProduct />
            <Feedback />
        </>
    )
}