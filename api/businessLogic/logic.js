// const service = require('../service/service')
module.exports.getWelcomeMessage = async (name) => {
    try {
        return {
          status:200,
          data: `Hello ${name}`,
        };
        
    } catch (error) {
        return {
            status: 500,
            error: "error while fetching",
        };
    }
};

const users = [
    { id: 1, email: "shwetha@gmail.com", password: "shwetha" },
    { id: 2, email: "soorya@gmail.com", password: "soorya" },
    { id: 3, email: "ramya@gmail.com", password: "ramya" },
    { id: 4, email: "sinchana@gmail.com", password: "sinchana" },
];
module.exports.userDetails = (
    email,
    password
)=>
 new Promise(async(resolve, reject) => {
    try {
    console.log('Entered email:', email);
    console.log('Entered password:', password);
        const user = users.find((u) => u.email === email && u.password === password);
    
        if (user) {
          resolve({ status: 200, data: 'Login Success' });
        } else {
          reject({ status: 404, data: 'User Not found' });
        }
      } catch (error) {
        console.error(error);
        reject({ status: 500, data: 'Internal Server Error' });
      }
 });
