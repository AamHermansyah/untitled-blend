import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import Home from './pages/Home';

const App = () => (
  <div className='flex flex-col items-center'>
    <Router>
      <Routes>
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="dashboard" />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

    <Footer />
  </div>
)

export default App