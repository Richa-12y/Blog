import TopBar from "./components/topbar/TopBar";
import Write from "./components/write/Write";
import Login from "./pages/login/Login";
import Setting from "./pages/setting/Setting";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Write /> */}
      {/* <Setting /> */}
      <Login />
    </div>
  );
}

export default App;
