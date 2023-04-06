import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from "@mui/material";

const CharacterDetail = ({ character }) => {
    const { name, level, gender, race, rpgclass, backstory, player } = character;

    return (
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
                    <CardContent>
                        <Typography variant='body2'>{race}</Typography>
                        <Typography variant='body2'>{rpgclass}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
}

export default CharacterDetail;