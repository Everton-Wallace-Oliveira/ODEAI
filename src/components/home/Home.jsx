import '../../styles/global.css';
import '../../styles/home.css';
import OndaNavbar from '../navbar/OndaNavbar.jsx';
import Footer from '../footer/Footer.jsx';

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
          <h2 className="home-title">Onda EAI (Ecologia Afroindígena)</h2>

          <p>A disciplina MATF54 - Onda EAI (Ecologia Afroíndigena), ministrada pelo professor Paul Regnier, do Instituto de Computação da Universidade Federal da Bahia (IC - UFBA) tem o objetivo não somente de divulgar as produções do componente curricular, mas também de expor a rotina e dar voz aos estudantes indígenas da universidade.</p>
          <p>O leitor, ao visitar esse site, deve estar pensando: mais um site  realizado com o intuito de passar na disciplina ou produto de um Trabalho de Conclusão de Curso (TCC) falando o óbvio sobre os povos originários com um olhar enviesado.  Ledo engano, meu caro.</p>
          <p>De acordo com o Censo 2022 (IBGE, 2023), o Estado da Bahia possui a segunda maior concentração populacional de indígenas, totalizando 229.103 indivíduos autodeclarados, o que corresponde a 13,5% do total de indígenas no país. Ao compararmos à população geral baiana, esse percentual chega a 1,62% (IBGE, 2023). </p>
          <p>Além disso, uma das principais argumentações para a criação desse conteúdo está na afirmação do líder indígena e filósofo Ailton Krenak. “O povo indígena tem um jeito de pensar, tem um jeito de viver, tem condições fundamentais para sua existência”. Assim, isso não seria diferente para os povos índígenas presentes como estudantes e/ou pesquisadores da UFBA. Afinal de contas, o site tem como objetivo principal ajudar a desmistificar a visão preconceituosa do indígena de que é um povo primitivo, termo amplamente utilizado de forma pejorativa.</p>
          <p>Ou seja, este site é um instrumento importante para um futuro objeto de pesquisa. Além disso, a intenção é que também seja para trabalhos acadêmicos, prática de saberes em geral, seja acadêmico, seja daquelas que não são ensinadas dentro dos muros da universidade. </p>
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
