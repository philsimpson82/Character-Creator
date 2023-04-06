import { CHARACTERS } from "../app/shared/CHARACTERS"

export const selectAllCharacters = () => {
    return CHARACTERS;
};

export const selectCharacterById = (id) => {
    return CHARACTERS.find((character) => character.id === parseInt(id));
};