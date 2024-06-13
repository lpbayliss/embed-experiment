import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1>This is a Embedded Widget</h1>
      <i>Using IFRAME</i>

      <button
        onClick={() => setCount((count) => count + 1)}
        className="p-2 bg-red-700 text-white rounded-lg"
      >
        count is {count}
      </button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat obcaecati explicabo praesentium consectetur mollitia quis minus, recusandae eos repudiandae aspernatur. Tenetur, odit ducimus ad exercitationem cupiditate deleniti dicta magni.</p>
    </div>
  );
}

export default App;
