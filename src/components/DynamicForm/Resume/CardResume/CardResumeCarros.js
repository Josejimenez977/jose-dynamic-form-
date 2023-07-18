import { Card } from "react-bootstrap";
import "./CardResume";
export default function CardResumeHobbies(props) {
  const { subtitle, carrosStorage } = props;

  return (
    <div>
      <Card className="text-center p-2 card-resume">
        <Card.Body>
          <Card.Subtitle>
            <b>{subtitle}</b>
          </Card.Subtitle>
          <ul>
            {carrosStorage.map((hobbie, index) => (
              <li key={index}>{hobbie.label}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}
