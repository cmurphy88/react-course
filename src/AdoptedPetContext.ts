import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
    {
        id: 1234,
        name: "Ben",
        animal: "dog",
        description: "lorem",
        breed: "Border Collie",
        images: [],
        city: "Belfast",
        state: "Holylands"
    },
    () => {},
]);

export default AdoptedPetContext;