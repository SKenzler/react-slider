import recordOne from "./assets/record-one.jpg";
import recordTwo from "./assets/record-two.jpg";
import recordThree from "./assets/record-three.jpg";
import RecordSlider from "./components/RecordSlider";
import "./App.css";

const records = [recordOne, recordTwo, recordThree];

function App() {
  return (
    <>
      <RecordSlider imagePath={records} />
    </>
  );
}

export default App;
