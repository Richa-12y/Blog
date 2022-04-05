import TopBar from "./components/topbar/TopBar";
import Write from "./components/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Write /> */}
      {/* <Setting /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
