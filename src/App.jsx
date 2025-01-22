import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';
import AdminController from './components/admin/AdminController';
import NewTestimonials from './components/admin/NewTestimonials.jsx';
import UpdateTestimonials from './components/admin/UpdateTestimonials.jsx';
import AdminHome from './components/admin/AdminHome';
import { ProtectedRoute } from './routing/ProtectedRoute';
import NewPassword from './components/recovery/NewPassword';
import PasswordResetRoute from './components/recovery/PasswordResetRoute';
import Depoimentos from './components/home/Depoimentos.jsx';
import DepoimentosDetails from './components/home/DepoimentosDetails.jsx';
import Places from './components/home/Places';
import LinksUteis from './components/linksuteis/LinksUteis';
import ServicosUfba from './components/servicosufba/ServicosUfba';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
        path="/depoimentos"
        element={<Depoimentos />}
      />
      <Route
        path="/depoimentos-details"
        element={<DepoimentosDetails />}
      />
        <Route
          path="/places"
          element={<Places  />}
        />
        <Route path="/links-uteis" element={<LinksUteis />} />
        <Route path="/servicos-ufba" element={<ServicosUfba />} />

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
          path="/admin/new-testimonials"
          element={
            <ProtectedRoute redirectPath="/login" adminOnly>
              <NewTestimonials />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/update-testimonials"
          element={
            <ProtectedRoute redirectPath="/login" adminOnly>
              <UpdateTestimonials />
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

        <Route
          path="/newPassword"
          element={
            <PasswordResetRoute
              element={<NewPassword />}
              routeName="newPassword"
            />
          }
        />

        {/* Rota genérica para redirecionar para /home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
