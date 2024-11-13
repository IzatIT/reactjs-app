import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useForm, Controller } from 'react-hook-form';
import { useLoginMutation } from 'src/store/api-slices';
import { AuthRequest } from 'src/models';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

export const LoginModule = () => {
    const { t } = useTranslation();
    const [login, { isLoading, isSuccess }] = useLoginMutation();

    const schema = Yup.object({
        username: Yup.string().required(t("form.errors.required")),
        password: Yup.string().min(6, t("form.errors.least_6_symbols")).required(t("form.errors.required")),
    }).required();

    const { control, handleSubmit, formState: { errors } } = useForm<AuthRequest>({
        resolver: yupResolver(schema),
        defaultValues: {
            username: "",
            password: "",
        }
    });

    const onSubmit = async (data: AuthRequest) => {
        await login(data);
        if (isSuccess) {
            <Navigate to="/home" />
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 2,
                textAlign: "start"
            }}
        >
            <FormLabel htmlFor="login">Логин</FormLabel>
            <Controller
                name="username"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                        id="login"
                        placeholder="login"
                        fullWidth
                        variant="outlined"
                    />
                )}
            />
            <FormLabel htmlFor="password">Пароль</FormLabel>
            <Controller
                name="password"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        id="password"
                        type="password"
                        placeholder="••••••"
                        fullWidth
                        variant="outlined"
                    />
                )}
            />
            <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Запомнить меня"
            />
            <Button
                type="submit"
                fullWidth
                sx={{ borderRadius: "8px", padding: "8px 0" }}
                variant="contained"
                disabled={isLoading}
            >
                Войти
            </Button>
        </Box>
    )
}
