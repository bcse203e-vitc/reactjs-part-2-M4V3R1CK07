import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default NameForm;
