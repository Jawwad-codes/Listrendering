import Virtualizelist from "./component/Virtualizelist";
import "./styles.css";

export default function App() {
  const List = Array.from({ length: 200000 }, (_, index) => index + 1);
  console.log(List);
  return (
    <div className="App">
      <Virtualizelist list={List} height={400} width={300} itemHeight={35} />
    </div>
  );
}
