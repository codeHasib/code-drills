import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <h1>Hello World</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <input
          ref={inputRef}
          className="border-2 border-blue-500 bg-red-50 focus:border-blue-700 focus:bg-red-100"
          type="text"
        />
        <button
          onClick={() => inputRef.current?.focus()}
          className="border-2 border-blue-500 bg-red-50 focus:border-blue-700 focus:bg-red-100"
        >
          Click to focus
        </button>
      </div>
    </>
  );
}

export default App;
