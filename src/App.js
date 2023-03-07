import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layout/mainLayout';
import Index from './pages';
import Article from './pages/article';
import Login from './pages/login';
import ProtectedRoute from './utils/protectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={
          <ProtectedRoute>
            <MainLayout/>
          </ProtectedRoute>
        }>
          <Route index element={<Index/>} />
          <Route path='berita' element={<Article/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
