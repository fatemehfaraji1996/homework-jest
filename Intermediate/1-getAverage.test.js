const getAverag = require('./1-getAverage')
describe('test avrages',()=>{
    test('biger than',()=>{
        expect(getAverag(4,3,2)).toBeLessThan(5)
        expect(getAverag(6,7,6)).toBeGreaterThan(5)
        expect(getAverag(6,5,4)).toBeGreaterThanOrEqual(5)

    })
})