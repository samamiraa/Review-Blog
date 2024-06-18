import { Route, Routes } from 'react-router-dom';
import Header  from './components/Header';
import Footer  from './components/Footer';
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import BlogPosts from './pages/BlogPosts';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/blogposts' element={<BlogPosts />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
