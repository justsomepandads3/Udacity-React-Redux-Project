import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA"


describe("Checking _saveQuestion async function", () =>{
    it("will return a promise consist of formattedQuestion if passed correct data and will resolve", async() =>{
        var object = {optionOneText: "Buy a PS5 Pro Edition", optionTwoText: "Buy a PS5 Standard Edition", author: "mtsamis"}
        
        await expect(_saveQuestion(object)).resolves.toBeDefined;
    })
    it("will return an error and rejects", async() =>{
        var object = { optionTwoText: "Buy a PS5 Standard Edition", author: "mtsamis"}
        
        await expect(_saveQuestion(object)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    })
})
describe("Checking _saveQuestionAnswer async function", () =>{
    it("will return true if passed parameters are correct and resolves", async() =>{
        var object = { authedUser:"mtsamis", qid:"vthrdm985a262al8qx3do" , answer:"optionOne" }
        
        await expect(_saveQuestionAnswer(object)).resolves.toEqual(true);
    })
    it("will return an error and rejects", async() =>{
        var object =  { authedUser:"mtsamis"}
        
        await expect(_saveQuestionAnswer(object)).rejects.toEqual("Please provide authedUser, qid, and answer");
    })
})