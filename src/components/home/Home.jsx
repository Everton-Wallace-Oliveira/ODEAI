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
            <p>O leitor, ao visitar esse site, deve estar pensando: mais um site realizado com o intuito de passar na disciplina ou produto de um Trabalho de Conclusão de Curso (TCC) falando o óbvio sobre os povos originários com um olhar enviesado. Ledo engano, meu caro.</p>
            <p>De acordo com o Censo 2022 (IBGE, 2023), o Estado da Bahia possui a segunda maior concentração populacional de indígenas, totalizando 229.103 indivíduos autodeclarados, o que corresponde a 13,5% do total de indígenas no país. Ao compararmos à população geral baiana, esse percentual chega a 1,62% (IBGE, 2023). </p>
            <p>Além disso, uma das principais argumentações para a criação desse conteúdo está na afirmação do líder indígena e filósofo Ailton Krenak. “O povo indígena tem um jeito de pensar, tem um jeito de viver, tem condições fundamentais para sua existência”. Assim, isso não seria diferente para os povos índígenas presentes como estudantes e/ou pesquisadores da UFBA. Afinal de contas, o site tem como objetivo principal ajudar a desmistificar a visão preconceituosa do indígena de que é um povo primitivo, termo amplamente utilizado de forma pejorativa.</p>
            <p>Ou seja, este site é um instrumento importante para um futuro objeto de pesquisa. Além disso, a intenção é que também seja para trabalhos acadêmicos, prática de saberes em geral, seja acadêmico, seja daquelas que não são ensinadas dentro dos muros da universidade. </p>
          </section>
          
          <section className="image-content">
            <div className="image-placeholder">
              <img src="src\assets\homeIndigena.jpg" alt="Representação de cultura indígena" />
            </div>
          </section>
        </main>

        {/* Seção Editorial */}
        <section className="editorial">
          <h3>Editorial</h3>
          <div className="editorial-content">
            <p>Este é o espaço dedicado às publicações periódicas de alunos da ACCS sobre temas relevantes da atualidade. Cada editorial traz uma visão única sobre a cultura indígena e os desafios enfrentados pelos estudantes indígenas na UFBA.</p>
            <p><i>A nossa luta não é apenas pela preservação da nossa cultura, mas pela garantia de que ela seja reconhecida e valorizada por todos. - Estudante Indígena</i></p>
          </div>
        </section>

        {/* Seção Depoimento da Semana */}
        <section className="depoimento-semana">
          <h3>Depoimento da Semana</h3>
          <div className="depoimento-content">
            <p>O depoimento desta semana é de um estudante indígena que compartilha suas experiências e desafios na UFBA, e reflete sobre questões de relevância para a comunidade indígena. Acompanhe e se inspire!</p>
            <blockquote>
              <p>Na universidade, a batalha não é apenas contra os desafios acadêmicos, mas contra a invisibilidade dos povos indígenas na sociedade. A minha missão é ajudar a construir um ambiente mais inclusivo para todos. - Estudante Indígena</p>
            </blockquote>
          </div>
        </section>

        {/* Seção Notícias */}
        <section className="noticias">
          <h3>Aba de Notícias</h3>
          <div className="noticias-content">
            <ul>
              <li><a href="#">Nova exposição sobre a história dos povos indígenas na Bahia</a></li>
              <li><a href="#">Estudantes indígenas da UFBA organizam evento cultural para o dia do índio</a></li>
              <li><a href="#">Entrevista com líder indígena sobre os desafios da juventude indígena no ensino superior</a></li>
            </ul>
          </div>
        </section>

        {/* Seção Produção Escrita */}
        <section className="producao-escrita">
          <h3>Produção Escrita</h3>
          <div className="producao-content">
            <p>Esta seção é dedicada às produções acadêmicas, ensaios e vídeos curtos relacionados aos povos indígenas. Encorajamos todos a contribuir com seu conteúdo e a compartilhar suas reflexões.</p>
            
          </div>
        </section>
        
      </div>
      <Footer></Footer>
    </>
  );
}


export default Home;
