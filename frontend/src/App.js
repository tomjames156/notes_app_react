import './App.css';
import Header from './components/Header'
import NotePage from './pages/NotePage';
import NotesListPage from './pages/NotesListPage';
import { HashRouter, Routes, Route} from 'react-router-dom'

function App() {
  const styling = { 
    width: "100vw", 
    height: '100vh', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: 'black',
  }

  return (
    <HashRouter>
      <div className='container' style={styling}>
        <div className='app'>
          <Header/>
          <Routes>
            <Route path="/" element={<NotesListPage/>}></Route>
            <Route path="/note/:id/" element={<NotePage/>}></Route>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
