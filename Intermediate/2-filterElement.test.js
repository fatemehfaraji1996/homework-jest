const filterElement = require('./2-filterElement')
const empityArr=[]
const element='grape'

const fruit = ['apple','orange']
const element2 = 'apple'

describe('filter',()=>{
    test('test empity',()=>{
        expect(filterElement(empityArr,element)).toEqual([])
    })
    test('filter to apple',()=>{
        expect(filterElement(fruit,element2)).toEqual(['apple'])
    })
})