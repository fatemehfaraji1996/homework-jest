const checkAge = require('./0-checkAge')
describe('check ages',()=>{
    test('chack are you eligible',()=>{
        expect(checkAge(92)).toBe("You are eligible")
        expect(checkAge(19)).toBe('You are eligible')

    })
    test('you are not eligible',()=>{
        expect(checkAge(17)).toBeUndefined(undefined)
        expect(checkAge(99)).not.toBeUndefined(undefined)
    })

})
