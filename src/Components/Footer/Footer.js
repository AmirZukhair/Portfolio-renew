
import { Container, Typography, Link, Stack, Divider } from '@mui/material';
const Footer = () => {
    return (
        <Container maxWidth="xl">
            <Typography variant="caption" sx={{ color: '#FE4A49', fontWeight: 700, fontSize: 55 }}>Get in touch</Typography>

            <Stack direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                sx={{ marginBottom: 6, }}>
                <Link href="https://www.facebook.com/profile.php?id=100009745516302" target="_blank" variant='button' underline="none" sx={{ color: "rgba(0, 0, 0, 0.6)", "&:hover": { color: "rgba(0, 0, 0, 0.87)" } }}>Facebook</Link>
                <Link href="https://www.linkedin.com/in/amir-zukhair-004451202/" variant='button' target="_blank" underline="none" sx={{ color: "rgba(0, 0, 0, 0.6)", "&:hover": { color: "rgba(0, 0, 0, 0.87)" } }}>LinkedIn</Link>
                <Link href="mailto:amirzukhair@gmail.com" variant='button' underline="none" sx={{ color: "rgba(0, 0, 0, 0.6)", "&:hover": { color: "rgba(0, 0, 0, 0.87)" } }}>Email</Link>
                <Link href="/files/Amir_Zukhair_Resume.pdf" variant='button' target="_blank" underline="none" sx={{ color: "rgba(0, 0, 0, 0.6)", "&:hover": { color: "rgba(0, 0, 0, 0.87)" } }}>Resume</Link>
                
            </Stack>

        </Container>
    )
}

export default Footer;