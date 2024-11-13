import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { LoginModule } from 'src/modules';
import { Box, Card } from '@mui/material';
import { darkBlue } from 'src/shared';
import { AuthParticles } from 'src/shared/animation/particles';

export const SignInContainer = styled(Stack)({
    background: darkBlue[500],
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
})

export const SignInPage = (props: { disableCustomTheme?: boolean }) => {

    return (
        <SignInContainer>
            <Box sx={{
                position: "relative", flexDirection: "column", marginTop: "30px", width: "100%", height: "100%",
                overflow: "hidden",
            }}>
                <Box sx={{
                    overflow: "hidden",
                    position: "relative", display: "flex",
                    justifyContent: "center",
                    marginBottom: "100px", padding: "0 100px",
                    zIndex: 10,
                }}>
                    <img width={300} height={150} style={{ objectFit: "contain" }} src="/logo.svg" alt="" />
                </Box>
                <Box sx={{ position: "relative", zIndex: 10, width: "100%", }}>
                    <Card sx={{
                        width: 340, borderRadius: "16px", boxShadow: "rgba(255, 255, 255, 0.35) 0px 5px 15px",
                        overflow: "hidden",
                    }}>
                        <Typography sx={{ color: "black", fontSize: 28, textAlign: 'center', fontWeight: 600 }}>
                            Авторизация
                        </Typography>
                        <LoginModule />
                    </Card>
                </Box>
                <AuthParticles />
            </Box>
        </SignInContainer>
    );
};
