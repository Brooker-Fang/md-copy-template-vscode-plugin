import List from "./component/List";
import Action from "./component/Action";
import {page} from "./page";
export {actions} from "./page";
export const %uppercase name%List = page.attachLifecycle(List);
export const %uppercase name%Action = page.attachLifecycle(Action);
