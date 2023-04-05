import { selectAllCharacters } from "./characterSlice";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const CharacterList = () => {
    const characters = selectAllCharacters();

    return (
        <Box>
            {characters.map((character) => {
                return (
                    <Card>
                        <CardActionArea>
                            <CardMedia />
                            <CardContent>
                                <Typography></Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )
            })}
        </Box>
    );
}

export default CharacterList;