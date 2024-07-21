const isTruthyOrFalsy = require('./0-isTruthyOrFalsy') 
describe('chack truethy or false',()=>{
    test('true',()=>{
        expect(isTruthyOrFalsy(true)).toBeTruthy()
        expect(isTruthyOrFalsy("hello")).toBeTruthy()
        expect(isTruthyOrFalsy(10)).toBeTruthy()
    })
    test("false",()=>{
        expect(isTruthyOrFalsy("")).toBeFalsy()
        expect(isTruthyOrFalsy(null)).toBeFalsy()
        expect(isTruthyOrFalsy(undefined)).toBeFalsy()
    })
})