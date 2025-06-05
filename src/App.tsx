import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <h1>GitHub Profile</h1>
      <Outlet />
    </div>
  );
}

export default App;
