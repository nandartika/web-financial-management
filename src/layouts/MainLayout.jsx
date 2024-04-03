import { Outlet } from "react-router-dom";
import NavigationLayout from "./NavigationLayout";

function MainLayout() {
  return (
    <>
      <NavigationLayout />
      <Outlet />
    </>
  );
}

export default MainLayout;
