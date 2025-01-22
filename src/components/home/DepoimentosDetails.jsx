import Pelo from '../../assets/pelo.webp';
import Image1 from '../../assets/image1.webp';
import Image2 from '../../assets/image2.webp';
import Image3 from '../../assets/image3.webp';
import Image4 from '../../assets/image4.webp';
import Image5 from '../../assets/image5.webp';
import '../../styles/global.css';
import '../../styles/home.css';
import OndaNavbar from '../navbar/OndaNavbar.jsx';

function DepoimentosDetails() {
  return (
    <>
      {/*<Header></Header>*/}
      <OndaNavbar></OndaNavbar>

      <div className="depoimentos-body">
        <div className="depoimentos-details-header">
          <div>
            <h1 className="depoimentos-details-title">Título do Depoimento</h1>
            <h3 className="depoimentos-details-author">Autor do depoimento</h3>
          </div>
          <div className="depoimentos-details-data">Data do depoimento</div>
        </div>

        <div className="depoimentos-details-descricao">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet urna nec felis gravida feugiat. Pellentesque metus lorem,
            sodales eget nisi sed, gravida bibendum eros. Phasellus vitae porta
            tellus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Maecenas ultrices arcu lacus, in vulputate purus ultricies
            in. Nulla vestibulum commodo est vel egestas. Sed laoreet lacus sit
            amet velit vestibulum placerat. Aliquam maximus, elit non malesuada
            blandit, mauris lacus placerat metus, sed volutpat purus risus non
            libero. Proin sodales dapibus dictum. Duis laoreet sem a accumsan
            sagittis. Cras sapien purus, pretium nec pulvinar ac, scelerisque
            pharetra dui. Morbi arcu lorem, mollis quis lobortis ac, accumsan a
            nulla. Phasellus tempor, justo ut sollicitudin ullamcorper, ipsum
            turpis pretium sapien, ac gravida nunc lacus eget dui. Morbi a sem
            condimentum felis volutpat sodales id sed augue. Etiam turpis justo,
            blandit nec ex a, porta blandit turpis. Duis lacinia felis quis eros
            consectetur finibus. Etiam nisl est, auctor nec ex pretium,
            consequat dapibus urna. Curabitur pretium, turpis eu gravida mollis,
            nisl nibh sagittis neque, in scelerisque est elit blandit purus.
            Vestibulum est diam, consequat posuere felis eget, sodales gravida
            felis. Cras blandit justo erat, eget faucibus nibh aliquam sed.
            Integer tempus viverra pharetra. Ut lobortis pulvinar volutpat.
            Morbi congue sagittis leo et ornare. Curabitur pulvinar ut ante a
            vulputate. Sed a viverra ex, sed euismod sem. Morbi ac nulla
            fringilla, pharetra magna at, cursus enim. Pellentesque egestas
            lorem orci, dapibus consequat nunc ornare non. Nunc mi lectus,
            volutpat quis placerat a, tristique quis quam. Cras pretium neque at
            congue dictum. Vivamus quis risus non ante feugiat dignissim vitae
            non diam. Aliquam massa elit, tristique a velit in, accumsan
            bibendum dui
          </p>
        </div>

        <div className="grid">
          <img className="grid-image grid-item" src={Image1} alt="" />
          <img className="grid-image grid-item" src={Image2} alt="" />
          <img className="grid-image grid-item" src={Image3} alt="" />
          <img className="grid-image grid-item" src={Image4} alt="" />
          <img className="grid-image grid-item" src={Image5} alt="" />
          <img className="grid-image grid-item" src={Pelo} alt="" />
        </div>
      </div>
    </>
  );
}

export default DepoimentosDetails;
