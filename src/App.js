import HireMe from './Components/HireMe'
import Home from './Components/Home'
import TopherEmby from './Components/TopherEmby'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/TopherEmby' element={<TopherEmby />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App