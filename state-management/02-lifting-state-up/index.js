import { useState } from "react";

function CelsiusInput({ celsius, onChange }) {
  return (
    <div>
      <label>Celsius: </label>
      <input
        type="number"
        value={celsius}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function FahrenheitDisplay({ fahrenheit }) {
  return <p>Fahrenheit: {fahrenheit}</p>;
}

function TemperatureConverter() {
  // State lives here — lifted up
  const [celsius, setCelsius] = useState("");

  const fahrenheit =
    celsius === "" ? "" : ((Number(celsius) * 9) / 5 + 32).toFixed(2);

  return (
    <div style={{ padding: 16 }}>
      <h2>Lifting State Up</h2>
      <CelsiusInput celsius={celsius} onChange={setCelsius} />
      <FahrenheitDisplay fahrenheit={fahrenheit} />
    </div>
  );
}

export default TemperatureConverter;