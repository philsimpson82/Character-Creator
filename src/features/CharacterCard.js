import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
    const { id, name, level, race, rpgclass } = character;
    return (
        <Link to={`${id}`}>
            <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                    <Box sx={{ position: 'relative' }}>
                        <CardMedia />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '75%',
                                bgcolor: 'rgba(0, 0, 0, 0.54)',
                                color: 'white',
                                padding: '10px',
                                display: 'flex',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Typography variant='h5'>{name}</Typography>
                            <Typography variant='body2'>{race}</Typography>
                            <Typography variant='body2'>{rpgclass}</Typography>
                        </Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '25%',
                                bgcolor: 'rgba(0, 0, 0, 0.54)',
                                color: 'white',
                                padding: '10px',
                                display: 'flex',
                            }}
                        >
                            <Typography variant='h2' sx={{ height: 100 }}>{level}</Typography>
                        </Box>
                    </Box>
                </CardActionArea>
            </Card>
        </Link>
    );
}

export default CharacterCard;