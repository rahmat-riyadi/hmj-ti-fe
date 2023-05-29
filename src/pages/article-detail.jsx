import { Box, Typography } from '@mui/material';
// import { useParams } from 'react-router-dom';
// import Footer from '../components/footer';
import detailPic from '../assets/article/article.png';

const ArticleDetail = () => {
    // const { id } = useParams()

    return (
        <Box
            py={4}
            display='flex'
            alignItems='center'
            flexDirection='column'
            bgcolor='#F9FAFB'
        >
            <Box textAlign='justify' width={{ xs: '85%', md: '69.5%' }}>
                <Typography
                    pb={2}
                    fontWeight={700}
                    fontSize={{ xs: 20, md: 28 }}
                    textAlign='center'
                >
                    Dirgahayu Jurusan Teknik Informatika ke 19th
                </Typography>
                <Box component='img' src={detailPic} width='100%' />
                <Typography fontWeight={300} sx={{ opacity: 0.57 }} py={2} fontStyle='italic'>Dipublikasikan pada 19 - Mei - 2023</Typography>
                {/* <Typography>Perayaan Milad Jurusan Teknik Informatika merupakan saat yang tepat untuk mengenang awal mula pendirian jurusan ini dan bagaimana sejak saat itu telah berkembang menjadi salah satu jurusan terkemuka dalam bidang teknologi informasi. Dalam perjalanan ini, jurusan telah berhasil menghasilkan lulusan-lulusan berkualitas yang menjadi motor penggerak industri teknologi informasi di dalam dan luar negeri. Melalui milad, penghargaan dan pengakuan diberikan kepada para dosen, staf, dan alumni yang telah memberikan kontribusi berharga dalam mengembangkan jurusan ini.
                    Selain itu, perayaan Milad Jurusan Teknik Informatika juga merupakan kesempatan yang baik untuk merayakan pencapaian dan prestasi mahasiswa. Di dalam jurusan ini, mahasiswa telah berpartisipasi aktif dalam berbagai kompetisi, proyek riset, dan pengembangan aplikasi yang inovatif. Milad menjadi momen yang tepat untuk mengapresiasi kerja keras, dedikasi, dan keberhasilan mereka dalam mewujudkan ide-ide kreatif menjadi solusi nyata di dunia teknologi informasi.
                    Milad juga dapat digunakan sebagai ajang untuk memperkuat kerjasama antara jurusan dengan industri. Dalam perayaan ini, perwakilan industri dapat diundang sebagai tamu kehormatan. Mereka dapat memberikan wawasan dan pandangan tentang perkembangan terkini dalam industri teknologi informasi. Selain itu, dapat diadakan diskusi panel, lokakarya, atau sesi networking yang memungkinkan mahasiswa dan staf jurusan untuk berinteraksi langsung dengan para profesional industri. Hal ini akan membuka peluang kolaborasi, magang, atau penyaluran lulusan ke dunia kerja yang relevan.
                    Selain merayakan pencapaian dan memperkuat kerjasama, perayaan Milad Jurusan Teknik Informatika juga merupakan waktu yang tepat untuk merenungkan dan merencanakan masa depan jurusan ini. Dalam era digital yang terus berkembang, perubahan dan inovasi merupakan kunci untuk tetap relevan dan kompetitif. Melalui milad, jurusan dapat mengevaluasi kurikulum, metode pengajaran, dan fasilitas pembelajaran untuk memastikan bahwa mereka sesuai dengan tuntutan industri dan perkembangan teknologi terkini. Selain itu, perayaan milad dapat menjadi momen inspiratif untuk menghasilkan ide-ide baru dan merencanakan langkah-langkah strategis untuk meningkatkan keunggulan digital jurusan ini di masa depan.</Typography> */}
                <Typography>Perayaan Milad Jurusan Teknik Informatika merupakan saat yang tepat untuk mengenang awal mula pendirian jurusan ini dan bagaimana sejak saat itu telah berkembang menjadi salah satu jurusan terkemuka dalam bidang teknologi informasi. Dalam perjalanan ini, jurusan telah berhasil menghasilkan lulusan-lulusan berkualitas yang menjadi motor penggerak industri teknologi informasi di dalam dan luar negeri. Melalui milad, penghargaan dan pengakuan diberikan kepada para dosen, staf, dan alumni yang telah memberikan kontribusi berharga dalam mengembangkan jurusan ini.</Typography>
                <Typography pt={1}>Selain itu, perayaan Milad Jurusan Teknik Informatika juga merupakan kesempatan yang baik untuk merayakan pencapaian dan prestasi mahasiswa. Di dalam jurusan ini, mahasiswa telah berpartisipasi aktif dalam berbagai kompetisi, proyek riset, dan pengembangan aplikasi yang inovatif. Milad menjadi momen yang tepat untuk mengapresiasi kerja keras, dedikasi, dan keberhasilan mereka dalam mewujudkan ide-ide kreatif menjadi solusi nyata di dunia teknologi informasi</Typography>
                <Typography pt={1}>Milad juga dapat digunakan sebagai ajang untuk memperkuat kerjasama antara jurusan dengan industri. Dalam perayaan ini, perwakilan industri dapat diundang sebagai tamu kehormatan. Mereka dapat memberikan wawasan dan pandangan tentang perkembangan terkini dalam industri teknologi informasi. Selain itu, dapat diadakan diskusi panel, lokakarya, atau sesi networking yang memungkinkan mahasiswa dan staf jurusan untuk berinteraksi langsung dengan para profesional industri. Hal ini akan membuka peluang kolaborasi, magang, atau penyaluran lulusan ke dunia kerja yang relevan.</Typography>
                <Typography pt={1}>Selain merayakan pencapaian dan memperkuat kerjasama, perayaan Milad Jurusan Teknik Informatika juga merupakan waktu yang tepat untuk merenungkan dan merencanakan masa depan jurusan ini. Dalam era digital yang terus berkembang, perubahan dan inovasi merupakan kunci untuk tetap relevan dan kompetitif. Melalui milad, jurusan dapat mengevaluasi kurikulum, metode pengajaran, dan fasilitas pembelajaran untuk memastikan bahwa mereka sesuai dengan tuntutan industri dan perkembangan teknologi terkini. Selain itu, perayaan milad dapat menjadi momen inspiratif untuk menghasilkan ide-ide baru dan merencanakan langkah-langkah strategis untuk meningkatkan keunggulan digital jurusan ini di masa depan..</Typography>
            </Box>
        </Box>
    );
}

export default ArticleDetail;