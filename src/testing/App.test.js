import { render } from "@testing-library/react";
import * as React from "react"
import { act } from "react";
import App from "../components/App";
import reducer from "../reducers";
import middlewares from "../middleware";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../components/ProtectedRoute";


const store = createStore(reducer, middlewares)

describe("App component" ,()=>{
    it("will match snapshot", () =>{
        var component = render(
        <Provider store={store}>
            <BrowserRouter>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </BrowserRouter>
          </Provider>
          );
        expect(component).toMatchSnapshot();
    })
})


