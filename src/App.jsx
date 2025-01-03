import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';
import AdminController from './components/admin/AdminController';
import NewPlaces from './components/admin/NewPlaces';
import UpdatePlace from './components/admin/UpdatePlace';
import AdminHome from './components/admin/AdminHome';
import { ProtectedRoute } from './routing/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rotas administrativas protegidas */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute redirectPath="/login" adminOnly>
              <AdminController />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/new-places"
          element={
            <ProtectedRoute redirectPath="/login" adminOnly>
              <NewPlaces />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/update-place"
          element={
            <ProtectedRoute redirectPath="/login" adminOnly>
              <UpdatePlace />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/home"
          element={
            <ProtectedRoute redirectPath="/login" adminOnly>
              <AdminHome />
            </ProtectedRoute>
          }
        />

        {/* Rota genérica para redirecionar para /home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
