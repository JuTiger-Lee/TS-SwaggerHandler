import { PathItem } from "swagger-jsdoc";
import SwaggerHandler from "@/handler/SwaggerHandler";

/**
 * controller 레벨에서 API 문서 생성
 */
SwaggerHandler.getSwaggerInstance().addAPI({
  "/user/sing-in": {
    post: {
      tags: ["User"],
      summary: "사용자 로그인",
      description: "사용자 로그인(email, password, phone)",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              properties: {
                email: {
                  type: "string",
                  description: "사용자 이메일",
                  example: "aaa@example.com",
                },
                phone: {
                  type: "string",
                  description: "사용자 전화번호",
                  example: "000-0000-0000",
                },
                password: {
                  type: "string",
                  description: "사용자 패스워드",
                  example: "123456789",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "사용자 로그인 성공",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  result: {
                    type: "object",
                    properties: {
                      code: {
                        type: "number",
                        description: "code",
                        example: 201,
                      },
                      message: {
                        type: "string",
                        description: "성공 메시지",
                        example: "success",
                      },
                      data: {
                        type: "array",
                        description: "data",
                        example: [],
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  } as PathItem,
});

export default class UserController {
  constructor() {}

  /**
   * apiDocs/user/signUp.ts
   * 위 경로에 문서 작성
   */
  signUp() {
    // ...signup code
  }

  signIn() {
    // ...signin code
  }
}
