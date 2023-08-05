import HireMe from './Components/HireMe'
import Home from './Components/Home'
import TopherEmby from './Components/Projects/TopherEmby'
import OnlyKyles from './Components/Projects/OnlyKyles'
import FlatIronAbs from './Components/Projects/FlatIronAbs'
import AidSupply from './Components/Projects/AidSupply'
import BaseBeta from './Components/Projects/BaseBeta'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/AidSupply' element={<AidSupply />} />
                <Route path='/BaseBeta' element={<BaseBeta />} />
                <Route path='/TopherEmby' element={<TopherEmby />} />
                <Route path='/OnlyKyles' element={<OnlyKyles />} />
                <Route path='/FlatIronAbs' element={<FlatIronAbs />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App