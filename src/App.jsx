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
import Depoimentos from './components/depoimentos/Depoimentos.jsx';
import LinksUteis from './components/linksuteis/LinksUteis';
import ServicosUfba from './components/servicosufba/ServicosUfba';
import Recovery from './components/recovery/Recovery';
import SendToken from './components/recovery/SendToken';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas: Login e Cadastro */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rotas protegidas */}
        <Route path="/home" element={<ProtectedRoute children={<Home />} />} />
        <Route
          path="/depoimentos"
          element={<ProtectedRoute children={<Depoimentos />} />}
        />
        <Route
          path="/links-uteis"
          element={<ProtectedRoute children={<LinksUteis />} />}
        />
        <Route
          path="/servicos-ufba"
          element={<ProtectedRoute children={<ServicosUfba />} />}
        />

        {/* Rotas administrativas */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute redirectPath="/home" adminOnly>
              <AdminController />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/new-testimonials"
          element={
            <ProtectedRoute redirectPath="/home" adminOnly>
              <NewTestimonials />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/update-testimonials"
          element={
            <ProtectedRoute redirectPath="/home" adminOnly>
              <UpdateTestimonials />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/home"
          element={
            <ProtectedRoute redirectPath="/home" adminOnly>
              <AdminHome />
            </ProtectedRoute>
          }
        />

        {/* Rotas de recuperação de senha */}
        <Route
          path="/newPassword"
          element={
            <PasswordResetRoute
              element={<NewPassword />}
              routeName="newPassword"
            />
          }
        />
        <Route
          path="/recoveryToken"
          element={
            <PasswordResetRoute
              element={<SendToken />}
              routeName="recoveryToken"
            />
          }
        />
        <Route path="/recovery" element={<Recovery />} />

        {/* Rota padrão para redirecionar para /home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
