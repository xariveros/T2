import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "dci6c1v50b470u",
  "yuejlphhnndqlw",
  "518df9b6b3c33c614b7e27c4d3c4cd1004388b843fe03f84232c59884b4c3804",
  {
    host: "ec2-50-17-21-170.compute-1.amazonaws.com",
    dialect: "postgres",
    port: 5432,
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    //logging: false,
  }
);
