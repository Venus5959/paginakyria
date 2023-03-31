import {Routes, Route} from "react-router-dom";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { CharacterPage } from "../pages/CharacterPage/CharacterPage";

import { HomePage } from "../pages/HomePage/HomePage";
import { ReferentPage } from "../pages/ReferentPage/ReferentPage";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}  />
                <Route path="/quienes-somos" element={<AboutPage />}  />
                <Route path="/personajes" element={<CharacterPage />}  />
                
                <Route path="/referentes" element={<ReferentPage />}  />
            </Routes>
        </>
    )
}