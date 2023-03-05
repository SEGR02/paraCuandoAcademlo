"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsTo(models.Countries, {
        as: "country",
        foreignKey: "country_id",
      });
      Users.hasMany(models.Profiles, {
        as: "profiles",
        foreignKey: "user_id",
      });
      Users.hasMany(models.Publications, {
        as: "publication",
        foreignKey: "publication_id",
      });
      Users.hasMany(models.Votes, {
        as: "votes",
        foreignKey: "user_id",
      });
      Users.hasMany(models.UsersTags, {
        as: "usersTags",
        foreignKey: "user_id",
      });
    }
  }

  /**
   * @openapi
   * components:
   *   schemas:
   *     sign-up:
   *       type: object
   *       properties:
   *         first_name:
   *           type: string
   *           example: Sebas
   *         last_name:
   *          type: string
   *          example: Gomez
   *         email:
   *           type: string
   *           example: segr30398481@gmail.com
   *         password:
   *           type: string
   *           example: 12345678910
   *     sign-upResponse:
   *       type: object
   *       properties:
   *         results:
   *           type: string
   *           example: "Success Sign Up"
   *         errors:
   *          type: array
   *          items:
   *            type: object
   *            properties:
   *              errorName:
   *                type: string
   *                example: ""
   *              message:
   *                type: string
   *                example: ""
   *     login:
   *       type: object
   *       properties:
   *         email:
   *           type: string
   *           example: segr30398481@gmail.com
   *         password:
   *           type: string
   *           example: 1234
   *     loginResponse:
   *       type: object
   *       properties:
   *         message:
   *           type: string
   *           example: Correct Credentials
   *         token:
   *           type: string
   *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
   *     restorePassword:
   *       type: object
   *       properties:
   *         email:
   *           type: string
   *           example: segr30398481@gmail.com
   *     restorePasswordResponse:
   *       type: object
   *       properties:
   *         results:
   *           type: object
   *           properties:
   *             message:
   *               type: string
   *               example: Email sended!, check your inbox
   *     restorePasswordBody:
   *       type: object
   *       properties:
   *         password:
   *           type: string
   *           example: 12345678910
   *     restorePasswordFinishResponse:
   *       type: object
   *       properties:
   *         results:
   *           type: object
   *           properties:
   *             message:
   *               type: string
   *               example: update success
   *     getAllUsersResponse:
   *       type: object
   *       properties:
   *         results:
   *           type: array
   *           items:
   *             type: object
   *             properties:
   *               id:
   *                 type: string
   *                 example: 8az3c08f-fop7-47df-84b6-25604626e6a3
   *               first_name:
   *                 type: string
   *                 example: Ian
   *               last_name:
   *                 type: string
   *                 example: Rosas
   *               email:
   *                 type: string
   *                 example: ian@gmail.com
   *               username:
   *                 type: string
   *                 example: Iannacus
   *               password:
   *                 type: string
   *                 example: 12345678910
   *               email_verified:
   *                 type: string
   *                 example: date
   *               token:
   *                 type: string
   *                 example: acKhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3MmY4NDAyLTBhZTEtNDlhNy1iZWU3LTQzNjY5ZDRlYWMzOSIsImVtYWlsIjoiZWxwZXJyaXRvODVAb3V0bG9vay5lcyIsImlhdCI6MTY3Njc4NjczMCwiZXhwIjoxNjc2Nzg3NjMwfQ.gYV2Wjnxs3tYR23lw-30C2IUAKyu6_skA2Ld4J3k3FA
   *               code_phone:
   *                 type: string
   *                 example: 123789
   *               phone:
   *                 type: string
   *                 example: +57222265415485
   *               country_id:
   *                 type: int
   *                 example: 2
   *               image_url:
   *                 type: string
   *                 example: imageurl2.com
   *               created_at:
   *                 type: string
   *                 example: 2023-02-19T06:04:11.638Z
   *               updated_at:
   *                 type: string
   *                 example: 2023-02-19T06:04:22.638Z
   *     getUserById:
   *       type: object
   *       properties:
   *         id:
   *           type: string
   *           example: 8az3c08f-fop7-47df-84b6-25604626e6a3
   *         first_name:
   *           type: string
   *           example: Ian
   *         last_name:
   *           type: string
   *           example: Rosas
   *         email:
   *           type: string
   *           example: ian@gmail.com
   *         username:
   *           type: string
   *           example: Iannacus
   *         password:
   *           type: string
   *           example: 12345678910
   *         email_verified:
   *           type: string
   *           example: date
   *         token:
   *           type: string
   *           example: acKhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3MmY4NDAyLTBhZTEtNDlhNy1iZWU3LTQzNjY5ZDRlYWMzOSIsImVtYWlsIjoiZWxwZXJyaXRvODVAb3V0bG9vay5lcyIsImlhdCI6MTY3Njc4NjczMCwiZXhwIjoxNjc2Nzg3NjMwfQ.gYV2Wjnxs3tYR23lw-30C2IUAKyu6_skA2Ld4J3k3FA
   *         code_phone:
   *           type: string
   *           example: 123789
   *         phone:
   *           type: string
   *           example: +57222265415485
   *         country_id:
   *           type: int
   *           example: 2
   *         image_url:
   *           type: string
   *           example: imageurl2.com
   *         created_at:
   *           type: string
   *           example: 2023-02-19T06:04:11.638Z
   *         updated_at:
   *           type: string
   *           example: 2023-02-19T06:04:22.638Z
   *     updateUser:
   *       type: object
   *       properties:
   *         id:
   *           type: string
   *           example: 8az3c08f-fop7-47df-84b6-25604626e6a3
   *         first_name:
   *           type: string
   *           example: Ian
   *         last_name:
   *           type: string
   *           example: Rosas
   *         email:
   *           type: string
   *           example: ian@gmail.com
   *         username:
   *           type: string
   *           example: Iannacus
   *         password:
   *           type: string
   *           example: 12345678910
   *         email_verified:
   *           type: string
   *           example: date
   *         token:
   *           type: string
   *           example: acKhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3MmY4NDAyLTBhZTEtNDlhNy1iZWU3LTQzNjY5ZDRlYWMzOSIsImVtYWlsIjoiZWxwZXJyaXRvODVAb3V0bG9vay5lcyIsImlhdCI6MTY3Njc4NjczMCwiZXhwIjoxNjc2Nzg3NjMwfQ.gYV2Wjnxs3tYR23lw-30C2IUAKyu6_skA2Ld4J3k3FA
   *         code_phone:
   *           type: string
   *           example: 123789
   *         phone:
   *           type: string
   *           example: +57222265415485
   *         country_id:
   *           type: int
   *           example: 2
   *         image_url:
   *           type: string
   *           example: imageurl2.com
   *         created_at:
   *           type: string
   *           example: 2023-02-19T06:04:11.638Z
   *         updated_at:
   *           type: string
   *           example: 2023-02-19T06:04:22.638Z
   *   securitySchemes:
   *     bearerAuth:
   *       type: http
   *       scheme: bearer
   *       bearerFormat: JWT
   */

  Users.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      username: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email_verified: {
        type: DataTypes.DATE,
      },
      token: {
        type: DataTypes.TEXT,
      },
      code_phone: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      country_id: DataTypes.INTEGER,
      image_url: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Users",
      tableName: "users",
      underscored: true,
      timestamps: true,
      scopes: {
        view_public: {
          attributes: [
            "id",
            "first_name",
            "last_name",
            "country_id",
            "image_url",
          ],
        },
        view_same_user: {
          attributes: [
            "id",
            "first_name",
            "last_name",
            "country_id",
            "image_url",
            "email",
            "username",
            "code_phone",
            "phone",
          ],
        },
        auth_flow: {
          attributes: ["id", "first_name", "last_name", "email", "username"],
        },
        view_me: {
          attributes: [
            "id",
            "first_name",
            "last_name",
            "email",
            "username",
            "image_url",
          ],
        },
      },
      hooks: {
        beforeCreate: (user, options) => {
          if (user.email) {
            let emailLowercase = String(user.email).toLocaleLowerCase();
            user.email = emailLowercase;
            user.username = emailLowercase;
          }
        },
      },
    }
  );
  return Users;
};
