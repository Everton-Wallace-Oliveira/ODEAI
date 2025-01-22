import { Link } from 'react-router-dom';
import '../../styles/home_admin.css';

export default function AdminHome() {
  return (
    <>
      {/*<Header></Header>*/}
      <div className="container">
        <section className="section1">
          <button className="button">
            <Link to="/admin" className="link-ver">
              Editar usuários
            </Link>
          </button>
          <button className="button">
            <Link to="/admin/new-testimonials" className="link-ver">
              Cadastrar depoimentos
            </Link>
          </button>
          <button className="button">
            <Link to="/home" className="link-ver">
              ONDA ODEAI
            </Link>
          </button>
        </section>
      </div>
    </>
  );
}
