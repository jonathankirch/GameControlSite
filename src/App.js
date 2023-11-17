import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import PageSaibaMais from './pages/PageSaibaMais'
import Produto1 from './pages/Produto1'
import Produto2 from './pages/Produto2'
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/SaibaMais' element={<PageSaibaMais />} />
        <Route path='/produto1' element={<Produto1 />}/>
        <Route path='/produto2' element={<Produto2 />}/>
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;