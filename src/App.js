import HireMe from './Components/HireMe'
import Home from './Components/Home'
import TopherEmby from './Components/TopherEmby'
import OnlyKyles from './Components/OnlyKyles'
import FlatIronAbs from './Components/FlatIronAbs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/TopherEmby' element={<TopherEmby />} />
                <Route path='/OnlyKyles' element={<OnlyKyles />} />
                <Route path='/FlatIronAbs' element={<FlatIronAbs />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App