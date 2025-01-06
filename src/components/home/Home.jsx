import { Link } from 'react-router-dom';
import '../../styles/global.css';
import '../../styles/home.css';
import OndaNavbar from '../navbar/OndaNavbar.jsx';
import Footer from './Footer.jsx';

/**
 * Componente Home
 *
 * Este componente representa o página principal, ele recebe o componente Header, que é o cabeçalho da página e possui o restante do conteúdo
 *
 */

function Home() {
  return (
    <>
      {/*<Header></Header>*/}
      <OndaNavbar></OndaNavbar>

      <div className="containerHome">
      <main className="content">
        <section className="text-content">
          <h2>Onda ODEAI</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh lectus, eleifend rutrum augue sed, consectetur rutrum est. Morbi pretium elit ut ante congue, sit amet accumsan sapien hendrerit. Donec vel velit ut mauris condimentum ornare at eget mi.</p>
          <p>Pellentesque vehicula semper tincidunt. Maecenas sit amet viverra magna. Mauris fringilla vel justo in blandit. Nunc ut neque fermentum, varius libero quis, tempus felis.</p>
          <p>Donec molestie, tortor vel hendrerit fringilla, massa orci sodales justo, in condimentum nisi quam ac nisl. Nunc id consequat libero.</p>
        </section>
        <section className="image-content">
          <div className="image-placeholder">
            <img src="" alt="" />
          </div>
        </section>
      </main>
    </div>
    <Footer></Footer>
    </>
  );
}




export default Home;
