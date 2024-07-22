const sum = require('./2-sum2')
describe('test sums',()=>{
    test('should sum', () => {
        expect(sum(1,2)).toBe(3)
        expect(sum(-1,3)).toBe(2)
        
    })
    test('test eroor',()=>{
        expect(()=>sum('pp',80)).toThrow("Input must be numbers")
    })
})