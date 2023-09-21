
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/App.css'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Users from './pages/Users'
import NavBar from './assets/NavBar'
import Footer from './assets/footer'
import SinglePosts from './pages/SinglePosts'
import User from './pages/User'
import Album from './pages/Album'
import Photos from './pages/Photos'
import Contact from './pages/Contact'
import About from './pages/About'
// import Resume from './pages/resume'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/user" element={<Users />} /> 
          <Route path='/posts/:postid/:userid' element={<SinglePosts />} />
          <Route path='/Album' element={<Album />} />
          <Route path='/user/:userid' element={<User />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/resume' element={<Resume />} /> */}
          <Route path='*' element={<h1 className='404'>404</h1>} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
