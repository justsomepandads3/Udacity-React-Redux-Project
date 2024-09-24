import { render } from "@testing-library/react"
import * as React from "react"
import reducer from '../reducers';
import middlewares from '../middleware';
import {createStore} from "redux";
import {  Provider  } from "react-redux";
import Dashboard from "../components/Dashboard";
import { BrowserRouter } from "react-router-dom";
const store = createStore(reducer, middlewares)

describe("Dashboard component", ()=>{
    it("will match snapshot", ()=>{
        var component = render(
            <Provider store={store}>
                <BrowserRouter>
                <Dashboard></Dashboard>
                </BrowserRouter>
            </Provider>
        )
        expect(component).toMatchSnapshot;
    })
    
})