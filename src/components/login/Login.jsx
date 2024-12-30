import { LoginProvider } from '../../contexts/loginContext.jsx';
import Form from './Form.jsx';
import Button from './Button.jsx';
import Alert from './Alert.jsx';
import { Link } from 'react-router-dom';
import '../../styles/global.css';
import '../../styles/login.css';

/**
 * Componente Login
 *
 * Este componente representa a página de login da aplicação. Ele utiliza vários provedores de contexto
 * para gerenciar o estado global relacionado ao login e aos alertas. A página inclui um formulário de login,
 * um botão de envio, um link para recuperação de senha e um link para cadastro.
 */

function Login() {
  return (
    <>
      <Alert />
      <div className="page-login">
        <div className="mainContainer">
          <div className="loginContainer">
            <h1 className="title">Onda ODEAI</h1>

            <LoginProvider>
              <Form />

              <Link className="links" to="/recovery">
                Esqueci minha senha
              </Link>

              <Button />
            </LoginProvider>
          </div>
        </div>
      </div>
    </>
  );
}


export default Login;
