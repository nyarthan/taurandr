import {
  MakeGenerics,
  Outlet,
  ReactLocation,
  Router,
} from "@tanstack/react-location";
import Index from "./src/routes";
import DisplayIndex from "./src/routes/display-index";
import Sidebar from "./src/sidebar";

const location = new ReactLocation<LocationGenerics>();

type Display = {
  id: string;
};

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    displays: Display[];
    display: Display;
  };
}>;

function App() {
  /* async function greet() { */
  /*   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command */
  /*   setGreetMsg(await invoke("greet", { name })); */
  /* } */

  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: <Index /> },
        {
          path: "displays",
          children: [
            {
              path: ":displayId",
              element: <DisplayIndex />,
              loader: ({ params: { displayId } }) => ({
                display: { id: displayId },
              }),
            },
          ],
        },
      ]}
    >
      <Sidebar monitors={["eDP-1", "HDMI-4"]}>
        <Outlet />
      </Sidebar>
    </Router>
  );
}

export default App;
