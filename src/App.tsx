import { invoke } from "@tauri-apps/api/tauri";
import Sidebar from "./src/sidebar";

function App() {
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return <Sidebar monitors={["test1", "test2"]} />;
}

export default App;
