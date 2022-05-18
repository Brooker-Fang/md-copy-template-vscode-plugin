import {async} from "@wonder/core-fe";

const route = {
    name: "%uppercase name%",
    menu: "%uppercase name%",
    path: "%lowercase name%",
    role: "RESTAURANT",
    icon: "alert",
    component: async(() => import("./management"), "%uppercase name%List"),
    children: [{name: "Action", path: "action", role: "RESTAURANT", component: async(() => import("./management"), "%uppercase name%Action")}],
};
export default route;
