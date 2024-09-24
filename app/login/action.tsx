// import

// interface login {
//   username: string;
//   password: string;
// }

// export const PostLogin = async (data: login): Promise<ActionResponseType> => {
//     const session = await getSession();
  
//     try {
//       const checkEmail = ValidateEmail(data.username);
//       if (checkEmail) {
//         const user = await loginPost({
//           username: data.username,
//           password: data.password,
//         });
  
//         if (user) {
//           session.isLoggedIn = true;
//           session.admin = true;
//           session.userId = user.id;
//           await session.save();
//           return {
//             success: true,
//             message: "success create data",
//             admin: true,
//           };
//         } else {
//           return {
//             success: false,
//             message: "username or password is wrong",
//           };
//         }
//       } else {
//         const url = process.env.PPA_URL;
//         const response = await axios.request({
//           url: url,
//           method: "POST",
//           data: {
//             nrp: data.username,
//             password: data.password,
//           },
//           withCredentials: true, // Ensure credentials are included
//         });

//         export const PostLogout = async () => {
//             const session = await getSession();
//             session.destroy();
//             redirect("/login");
//           };
          