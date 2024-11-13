import { Stack } from '@mui/material';
import { useAppDispatch } from 'src/hooks';
import { logOut } from 'src/store';

type Props = {
    children?: React.ReactNode
}

export const AppLayout = ({ children }: Props) => {
    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(logOut())
    };
    return (
        <div>
            <Stack>
                {children}
            </Stack>
        </div>
    );
}

