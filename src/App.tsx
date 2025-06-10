import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center my-8">
      <h1 className="text-3xl font-bold ">GitHub Profile</h1>
      <Outlet />
    </div>
  );
}

export default App;
