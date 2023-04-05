import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
    const { id, name, level, race, rpgclass } = character;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardActionArea>
                    <CardMedia />
                    <CardContent>
                        <Typography>{name}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}

export default CharacterCard;