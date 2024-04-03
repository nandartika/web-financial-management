import { Outlet } from "react-router-dom";
import NavigationLayout from "./NavigationLayout";

function MainLayout() {
  return (
    <>
      <NavigationLayout />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
