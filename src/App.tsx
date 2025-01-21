import { Link, Stack } from "@mui/material";
import "./App.css";

function App() {
  const urls = [
    "https://flyyy.erics-apps.de/",
    "https://spirit.erics-apps.de/",
    "https://soralvi.erics-apps.de/",
    "https://timer.erics-apps.de/",
    "https://boss-i-ve-added-a-button.erics-apps.de/",
  ];

  return (
    <>
      <h1>Hi :)</h1>
      <Stack>
        {urls.map((x, i) => (
          <Link key={i} href={x}>
            {x}
          </Link>
        ))}
      </Stack>
    </>
  );
}

export default App;
