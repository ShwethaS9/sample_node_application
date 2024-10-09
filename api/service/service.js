// const data = [
//     { id: 1, email: "shwetha@gmail.com", password: "shwetha" },
//     { id: 2, email: "soorya@gmail.com", password: "soorya" },
//     { id: 3, email: "ramya@gmail.com", password: "ramya" },
//     { id: 4, email: "sinchana@gmail.com", password: "sinchana" },
//   ];
  
//   module.exports.userDetails = async (id, email, password) => {
//     try {
//       const user = await data(id,email,password)
  
//      return{
//         status:200,
//           data: user
//      }
//     } catch (error) {
//       console.error(error);
//       return { status: 500, data: 'Internal Server Error' };
//     }
//   };

const users = [
    { id: 1, email: "shwetha@gmail.com", password: "shwetha" },
    { id: 2, email: "soorya@gmail.com", password: "soorya" },
    { id: 3, email: "ramya@gmail.com", password: "ramya" },
    { id: 4, email: "sinchana@gmail.com", password: "sinchana" },
];

module.exports = {
    getUsers: () => users,
};