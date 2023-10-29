const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'postgres',
    database: 'vms'
})

client.connect()

// const insertUser = (email, passwordHashed, firstname, lastname, address, phoneNumber, iin, userRole, callback) => {
//     const query = `
//         INSERT INTO users (email, password_hashed, firstname, lastname, address, phone_number, iin, user_role) 
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
//     `

//     const values = [email, passwordHashed, firstname, lastname, address, phoneNumber, iin, userRole]

//     client.query(query, values, (err, res) => {
//         if (!err) {
//             callback(null, "User inserted successfully!")
//         } else {
//             callback(err.message, null)
//         }
//         client.end()
//     })
// }

// insertUser('yerzhan.yerbatyr@egmail.com', 'hashedpassword', 'Yerzhan', 'Yerbatyr', 'Kabanbay batyr, 53', '87781245123', '123123123134', 'client', (err, message) => {
//     if (!err) {
//         console.log(message)
//     } else {
//         console.log("Error:", err)
//     }
// })

client.query(`Select * from users`, (err, res) => {
    if(!err) {
        console.log(res.rows)
    } else {
        console.log(err.message)
    }
    client.end
})