import express from "express";
import routers from "@/routers/index";
import env from "env-var";
import dotenv from "dotenv";
import ApiDocs from "@/controllers/apiDocs/ApiDocs";

class App {
  public readonly server: express.Application;
  public readonly PORT: number;

  constructor() {
    this.PORT = env.get("PORT").default(8080).asPortNumber();
    this.server = express();
  }

  bootstrap() {
    this.checkEnv();
    this.initExpress();
    this.initSwagger();
    this.setRouter();
  }

  private checkEnv() {
    dotenv.config();
  }

  private initExpress() {
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json());
  }

  private initSwagger() {
    const apiDocs = new ApiDocs();
    apiDocs.init();
    const { swaggerUI, specs, setUpOption } = apiDocs.getSwaggerOption();

    if (env.get("NODE_ENV").asString() !== "production") {
      this.server.use(
        "/api-docs",
        swaggerUI.serve,
        swaggerUI.setup(specs, setUpOption)
      );
    }
  }

  private setRouter() {
    routers(this.server);
  }
}

const app = new App();
app.bootstrap();

export default app;
