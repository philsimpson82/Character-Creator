import { Button, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const Header = (props) => {
    return (
        <>
            <Button
                variant='outlined'
                startIcon={<AddIcon />}
                onClick={props.handleOpen}
                sx={{ m: 1 }}
            />
            <Divider />
        </>
    );
}

export default Header;