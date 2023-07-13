import { Link } from "@mui/material";
import "./App.css";

function App() {
  const urls = ["https://flyyy.erics-apps.de/"];

  return (
    <>
      <h1>Hi :)</h1>
      {urls.map((x) => (
        <Link href={x}>{x}</Link>
      ))}
    </>
  );
}

export default App;
