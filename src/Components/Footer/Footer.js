
import { Container, Typography, Link, Stack, Divider } from '@mui/material';
const Footer = () => {
    return (
        <Container maxWidth="xl">
            <Typography variant="caption" sx={{ fontWeight: 700, fontSize: 55 }}>Get in touch</Typography>

            <Stack direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                sx={{ marginBottom: 6, }}>
                <Link href="https://www.facebook.com/profile.php?id=100009745516302" target="_blank" variant='button' underline="none" sx={{ color: "#808080", "&:hover": { color: "#404040" } }}>Facebook</Link>
                <Link href="https://www.instagram.com/fvbh86/" variant='button' target="_blank" underline="none" sx={{ color: "#808080", "&:hover": { color: "#404040" } }}>Instagram</Link>
                <Link href="mailto:amirzukhair@gmail.com" variant='button' underline="none" sx={{ color: "#808080", "&:hover": { color: "#404040" } }}>Email</Link>
                <Link href="/files/Amir_Zukhair_Resume.pdf" variant='button' target="_blank" underline="none" sx={{ color: "#808080", "&:hover": {  color: "#404040" } }}>Resume</Link>
                
            </Stack>

        </Container>
    )
}

export default Footer;