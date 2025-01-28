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

            <p>
              A disciplina MATF54 - Onda EAI, oferecida pela UFBA, visa divulgar
              a produção acadêmica e dar voz aos estudantes indígenas da
              universidade.
            </p>

            <p>
              A Bahia tem a segunda maior população indígena do Brasil, com
              229.103 indígenas, representando 13,5% do total de indígenas no
              país e 1,62% da população baiana.
            </p>

            <p>
              O objetivo do conteúdo criado é combater a visão preconceituosa de
              indígenas como povos primitivos, com base nas ideias de Ailton
              Krenak, valorizando o modo de vida indígena, incluindo os
              estudantes e pesquisadores da UFBA.
            </p>

            <p>
              O site é uma ferramenta importante para futuras pesquisas e também
              pode ser usado em trabalhos acadêmicos e para a prática de
              saberes, tanto acadêmicos quanto os tradicionais.
            </p>
          </section>

          <section className="image-content">
            <div className="image-placeholder">
              <img
                src="src\assets\emblema.webp"
                alt="Representação de cultura indígena"
              />
            </div>
          </section>
        </main>

        {/* Seção Editorial */}
        <section className="editorial">
          <h3>Editorial</h3>
          <div className="editorial-content">
            <p>
              Este é o espaço dedicado às publicações periódicas de alunos da
              ACCS sobre temas relevantes da atualidade. Cada editorial traz uma
              visão única sobre a cultura indígena e os desafios enfrentados
              pelos estudantes indígenas na UFBA.
            </p>
            <p>
              <i>
                A nossa luta não é apenas pela preservação da nossa cultura, mas
                pela garantia de que ela seja reconhecida e valorizada por
                todos. - Estudante Indígena
              </i>
            </p>
          </div>
        </section>

        {/* Seção Depoimento da Semana */}
        <section className="depoimento-semana">
          <h3>Depoimento da Semana</h3>
          <div className="depoimento-content">
            <p>
              O depoimento desta semana é de um estudante indígena que
              compartilha suas experiências e desafios na UFBA, e reflete sobre
              questões de relevância para a comunidade indígena. Acompanhe e se
              inspire!
            </p>
            <blockquote>
              <p>
                Na universidade, a batalha não é apenas contra os desafios
                acadêmicos, mas contra a invisibilidade dos povos indígenas na
                sociedade. A minha missão é ajudar a construir um ambiente mais
                inclusivo para todos. - Estudante Indígena
              </p>
            </blockquote>
          </div>
        </section>

        {/* Seção Notícias */}
        <section className="noticias">
          <h3>Aba de Notícias</h3>
          <div className="noticias-content">
            <ul>
              <li>
                <a href="#">
                  Nova exposição sobre a história dos povos indígenas na Bahia
                </a>
              </li>
              <li>
                <a href="#">
                  Estudantes indígenas da UFBA organizam evento cultural para o
                  dia do índio
                </a>
              </li>
              <li>
                <a href="#">
                  Entrevista com líder indígena sobre os desafios da juventude
                  indígena no ensino superior
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Seção Produção Escrita */}
        <section className="producao-escrita">
          <h3>Produção Escrita</h3>
          <div className="producao-content">
            <p>
              Esta seção é dedicada às produções acadêmicas, ensaios e vídeos
              curtos relacionados aos povos indígenas. Encorajamos todos a
              contribuir com seu conteúdo e a compartilhar suas reflexões.
            </p>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
