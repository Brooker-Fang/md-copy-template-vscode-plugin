import {Pagination} from "type/form";
export const LOAD_LIST = "LOAD_LIST";

export interface State {
    pagination: Pagination;
    searchRequest: {name: string | null; id: string | null};
}
