import CharacterCard from "./CharacterCard";
import { selectAllCharacters } from "./characterSlice";
import { Box } from "@mui/material";

const CharacterList = () => {
    const characters = selectAllCharacters();

    return (
        <Box>
            {characters.map((character) => {
                return (
                    <CharacterCard character={character}/>
                )
            })}
        </Box>
    );
}

export default CharacterList;