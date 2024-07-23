const getUserWithDelay = require('./0-delayPromise')
test("test user", (done) => {
    getUserWithDelay(42).then((user) => {
      expect(user.id).toBe(42);
      expect(user.name).toBe('User 42');
      done(); 
    });
  });