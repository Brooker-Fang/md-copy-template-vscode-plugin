import {State} from "./type";
import {Pagination} from "type/form";

export const initialState: State = {
    pagination: new Pagination(),
    searchRequest: {name: null, id: null},
};
