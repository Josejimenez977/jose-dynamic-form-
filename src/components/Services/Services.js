import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import caracol from "../../assets/img/caracol.jpg";
import blu from "../../assets/img/bluradio.png";
import wradio from "../../assets/img/wradio.png";
import CardService from "./CardService/CardService";

export default function Services() {
  const servicesArray = [
    {
      title: "Caracol Radio",
      subtitle: "Escucha noticias y programación variada en Caracol Radio",
      image: caracol,
      footer: "Ir a Caracol Radio ➡️",
      link: "https://www.caracolradio.com/",
    },
    {
      title: "Blu Radio",
      subtitle: "Sintoniza noticias y análisis en Blu Radio",
      image: blu,
      footer: "Ir a Blu Radio ➡️",
      link: "https://www.bluradio.com/",
    },
    {
      title: "W Radio",
      subtitle:
        "Disfruta de programas de entretenimiento y noticias en W Radio",
      image: wradio,
      footer: "Ir a W Radio ➡️",
      link: "https://www.wradio.com.co/",
    },
  ];

  return (
    <div id="Servicios" className="services p-4 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h2 className="text-center">Servicios</h2>
            <h4 className="pb-3 text-center">Servicios de radios</h4>
            <Row xs={1} md={3} className="g-4 mt-4">
              {servicesArray.map((service, index) => (
                <CardService service={service} key={index} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
