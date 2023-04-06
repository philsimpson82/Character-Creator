import { Box } from "@mui/material";
import CharacterDetail from "../features/CharacterDetail";
import { useParams } from "react-router-dom";
import { selectCharacterById } from "../features/characterSlice";

const CharacterDetailPage = () => {
    const { characterId } = useParams();
    const character = selectCharacterById(characterId);

    return (
        <Box>
            <CharacterDetail character={character}/>
        </Box>
    );
}

export default CharacterDetailPage;