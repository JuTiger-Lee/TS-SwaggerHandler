import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import SwaggerHandler from "@/handler/SwaggerHandler";

class ApiDocs {
  private apiDocOption: object;
  private swagger: SwaggerHandler;

  constructor() {
    this.apiDocOption = {};

    this.swagger = SwaggerHandler.getSwaggerInstance();
  }

  init() {
    this.swagger.addAPI(this.apiDocOption);
  }

  getSwaggerOption() {
    const { apiOption, setUpOption } = this.swagger.getOption();

    const specs = swaggerJsDoc(apiOption);

    return {
      swaggerUI,
      specs,
      setUpOption,
    };
  }
}

export default ApiDocs;
