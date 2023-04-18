import jwt from 'jsonwebtoken'

export default {
  SIGN: (payload) => jwt.sign({payload}, "olma", { expiresIn: '5h' } ),
  VERIFY: (token) => jwt.verify(token, "olma")
}








// import jwt from "jsonwebtoken";

// export default {
//   SIGN: (payload) => {
//     return jwt.sign(payload, "olma", { expiresIn: 4444 });
//   },
//   VERIFY: (token) => {
//     try {
//       if (jwt.verify(token, "olma") instanceof Error) return 0;
//       else return jwt.verify(token, "olma");
//     } catch (error) {
//       return 0;
//     }
//   },
// };