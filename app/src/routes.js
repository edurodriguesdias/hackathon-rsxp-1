import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const Routes = createAppContainer(createSwitchNavigator({ Page1, Page2 }));
export default Routes;
