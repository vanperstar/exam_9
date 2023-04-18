import { Sequelize } from "sequelize";


const sequelize = new Sequelize({
    username: "fdkoqihz",
    password: "nuaWCSCkHTLjscQYVbFj5m0z4sDFJH4r",
    database: "fdkoqihz",
    host: "satao.db.elephantsql.com",
    dialect: "postgres",
    logging: false
},)

// const sequelize = new Sequelize({
//     username: "postgres",
//     password: "1002",
//     database: "exam_9",
//     host: "localhost",
//     port: 5432,
//     dialect: "postgres",
//     logging: false
// },)

sequelize
       .authenticate()
       .then(()=> console.log("connect"))
       .catch((err) => console.log(err))



export default sequelize