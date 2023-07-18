import "./FirstStep.css";
import CardFruit from "./CardFruit";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

export const fruits = [
  {
    id: 1,
    icon: "🥥",
    name: "Coco",
    description:
      "El coco es una fruta tropical con una cáscara dura y fibrosa. Su interior contiene una carne blanca y jugosa, y su agua es refrescante..",
  },
  {
    id: 2,
    icon: "🍓",
    name: "Fresa",
    description:
      "La fresa es una fruta pequeña y jugosa de color rojo brillante. ",
  },
  {
    id: 3,
    icon: "🥝",
    name: "Kiwi",
    description:
      "El kiwi es una fruta ovalada y peluda de color verde brillante. Tiene un sabor dulce y ácido, y es rico en vitamina C. .",
  },
  {
    id: 4,
    icon: "🍍",
    name: "Piña",
    description:
      "La piña es una fruta tropical con una cáscara áspera y espinosa. Tiene una pulpa jugosa y dulce con un sabor tropical distintivo. ",
  },
  {
    id: 5,
    icon: "🍑",
    name: "Durazno",
    description:
      "El durazno es una fruta redonda y peluda con una pulpa suave y jugosa. ",
  },
  {
    id: 6,
    icon: "🍉",
    name: "Sandía",
    description:
      "La sandía es una fruta grande y jugosa con una pulpa de color rojo brillante y una cáscara verde. ",
  },
];

export default function FirstStep() {
  const [selectedCard, setSelectedCard] = useState(null);

  const clickCard = (fruit) => {
    setSelectedCard(fruit.id);
    localStorage.setItem("fruitName", fruit.name);
    localStorage.setItem("iconFruit", fruit.icon);
  };

  return (
    <div>
      <h2>Elige tu fruta favorita</h2>
      <h4>Selecciona tu fruta y luego haz clic en el botón "Siguiente Paso"</h4>
      <Container className="p-5 text-center">
        <Row>
          {fruits.map((fruit, index) => (
            <CardFruit
              fruit={fruit}
              key={index}
              clickCard={clickCard}
              selectedCard={selectedCard}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
