import { fireEvent, getByTestId, render } from "@testing-library/react";
import Login from "../components/Login";
import * as React from "react"
import reducer from "../reducers";
import middlewares from "../middleware";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../components/ProtectedRoute";

const store = createStore(reducer, middlewares)

describe("Login component", () =>{
    it('will match the snapshot',()=>{
        var component = render(
        <Provider store={store}>
            <BrowserRouter>
                <AuthProvider>
                    <Login></Login>
                </AuthProvider>
            </BrowserRouter>

        </Provider>
    );
        expect(component).toMatchSnapshot();
    })
    it("Logged in successfully" ,() =>{
        var component = render(
            <Provider store={store}>
                <BrowserRouter>
                <AuthProvider>
                    <Login></Login>
                    </AuthProvider>
                </BrowserRouter>
    
            </Provider>
        )
        var usernameInput = component.getByTestId("username-input")
        var passwordInput = component.getByTestId("password-input")
        var submitButton = component.getByTestId("login-submit-button")

        expect(usernameInput).toBeInTheDocument;
        expect(passwordInput).toBeInTheDocument;
        expect(submitButton).toBeInTheDocument;

        fireEvent.change(usernameInput, {target: {value: 'mtsamis'}})
        fireEvent.change(passwordInput, {target: {value: 'xyz123'}})
        fireEvent.click(submitButton)

        expect(component.getByTestId("error-text")).not.toBeInTheDocument;





    })

    it("The input fields are empty" ,() =>{
        var component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <AuthProvider>
                    <Login></Login>
                    </AuthProvider>
                </BrowserRouter>
    
            </Provider>
        )
        var usernameInput = component.getByTestId("username-input")
        var passwordInput = component.getByTestId("password-input")
        var submitButton = component.getByTestId("login-submit-button")

        expect(usernameInput).toBeInTheDocument;
        expect(passwordInput).toBeInTheDocument;
        expect(submitButton).toBeInTheDocument;

        fireEvent.change(usernameInput, {target: {value: ''}});
        fireEvent.change(passwordInput, {target: {value: ''}});
        fireEvent.click(submitButton);

        expect(component.getAllByTestId("error-text")).toBeInTheDocument;





    })
    it("Not logged in successfully" ,() =>{
        var component = render(
            <Provider store={store}>
                <BrowserRouter>
                <AuthProvider>
                    <Login></Login>
                    </AuthProvider>
                </BrowserRouter>
    
            </Provider>
        )
        var usernameInput = component.getByTestId("username-input")
        var passwordInput = component.getByTestId("password-input")
        var submitButton = component.getByTestId("login-submit-button")

        expect(usernameInput).toBeInTheDocument;
        expect(passwordInput).toBeInTheDocument;
        expect(submitButton).toBeInTheDocument;

        fireEvent.change(usernameInput, {target: {value: 'mtmis'}});
        fireEvent.change(passwordInput, {target: {value: 'xy23'}});
        fireEvent.click(submitButton);

        expect(component.getByTestId("error-text")).toBeInTheDocument;





    })

})