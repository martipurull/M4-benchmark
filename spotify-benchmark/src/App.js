import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import HomePage from './components/HomePage'
import AlbumPage from './components/AlbumPage'
import ArtistPage from './components/ArtistPage'
import NotFound from './components/NotFound'
import BottomBar from './components/BottomBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Container fluid>
          <Row>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/album-page" element={<AlbumPage />} />
              <Route path="/artist-page" element={<ArtistPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Row>
        </Container>
        <BottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
