const  fetchUserData = require('./1-fetchUserData')
const data = require('./data.json')

fetch = jest.fn(()=>
    Promise.resolve({
    json:()=>Promise.resolve(data)
}))



test('test user',async () => {
    expect(await fetchUserData()).toBe(data)
 })