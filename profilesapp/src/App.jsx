import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Click the button to load data.");

  async function getMessage() {
    const response = await fetch(
      "https://mj8dwx1snb.execute-api.us-east-2.amazonaws.com/prod/profiles"
    );

    const data = await response.json();

    // API Gateway wraps the body as a string, so we parse it
    const parsed = JSON.parse(data.body);

    setMessage(parsed.message);
  }

  return (
  <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
    <h1>Profiles App</h1>

    <p>{message}</p>

    <button onClick={getMessage}>Load Data</button>

    <p style={{ marginTop: "2rem" }}>
      Built by: <strong>Olajumoke B. Kupoluyi</strong>
    </p>
  </div>
);

}

export default App;
