import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Select from "react-select";

import Resume from "../Resume";

const options = [
  { id: 1, value: "sedan", label: "Sedan 🚗" },
  { id: 2, value: "suv", label: "SUV 🚙" },
  { id: 3, value: "pickup", label: "Pickup 🚚" },
  { id: 4, value: "sports", label: "Sports Car 🏎️" },
  { id: 5, value: "convertible", label: "Convertible 🚓" },
  { id: 6, value: "van", label: "Van 🚐" },
  { id: 7, value: "truck", label: "Truck 🚛" },
];


export default function SecondStep({ setStep }) {
  const [selectOption, setSelectOption] = useState(null);
  const carrosSer = JSON.stringify(selectOption);
  localStorage.setItem("carros", carrosSer);

  const [modal, setModal] = useState(false);

  return (
    <div>
      <Container className="p-5 text-center">
        <h2>Selecciona tu carro favorito</h2>
        <Row className="justify-content-md-center">
          <Select
            defaultValue={selectOption}
            onChange={setSelectOption}
            options={options}
            isSearchable
            isMulti
          />
        </Row>
        <div className="send-form">
          <p className="result p-3" onClick={() => setModal(true)}>
            Ver resultados 🙌
          </p>
        </div>
        {modal && (
          <Resume showModal={modal} setModal={setModal} setStep={setStep} />
        )}
      </Container>
    </div>
  );
}
