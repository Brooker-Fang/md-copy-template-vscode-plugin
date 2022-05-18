import {call,  Loading, Module, register, SagaGenerator} from "@wonder/core-fe";
import {Pagination} from "type/form";
import {RootState} from "type/state";
import {LOAD_LIST, State} from "./type";
import {initialState} from "./state";
// import {xxx} from "service/xxx";

class %uppercase name%Module extends Module<RootState, "%lowercase name%"> {
    
    *onLocationMatched(): SagaGenerator {
        yield* this.loadList();
    }

    
    *onDestroy(): SagaGenerator {
        this.setState({
            ...initialState,
        });
    }

    @Loading(LOAD_LIST)
    *loadList(): SagaGenerator {
        const {pagination, searchRequest} = this.state;
        const request = {
            ...searchRequest,
            limit: pagination.limit,
            skip: pagination.skip,
        };
        // const response = yield* call(VendorItemAJAXWebService.search, request);
        this.setState({
            // pagination: new Pagination(pagination.page, pagination.pageSize, response.total),
            // list: response.xxx,
        });
    }

    *changePage(page: number, limit: number): SagaGenerator {
        const {pagination} = this.state;
        this.setState({
            pagination: new Pagination(page, limit, pagination.total),
        });
        yield* this.loadList();
    }

    *search(form: State["searchRequest"]): SagaGenerator {
        const {searchRequest, pagination} = this.state;
        const request = {
            ...searchRequest,
            ...form,
        };
        this.setState({
            searchRequest: request,
            pagination: new Pagination(),
        });
        yield* this.loadList();
    }
}

export const page = register(new %uppercase name%Module("%lowercase name%", initialState));
export const actions = page.getActions();
