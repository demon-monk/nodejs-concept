process.env.UV_THREADPOOL_SIZE = 5
const crypto = require('crypto')
const startTime = Date.now()

for (let i = 0; i < 5; i++) {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`${i+1}:`, Date.now() - startTime)
    })
}
