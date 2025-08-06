import "./App.css";
import { Card } from "./components/card/Card";
import cover from "./assets/drawers.jpg";
import user from "./assets/avatar-michelle.jpg";

function App() {
  return (
    <>
      <Card
        cover={cover}
        title={
          "Shift the overall look and feel by adding these wonderful touches to furniture in your home"
        }
        description={
          "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete."
        }
        profileImage={user}
        name={"Michelle Appleton"}
        date={"28 Jun 2020"}
      />
    </>
  );
}

export default App;
