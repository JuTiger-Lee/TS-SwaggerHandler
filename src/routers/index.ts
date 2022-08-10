import express from "express";
import userRouter from "@/routers/user";

export default (app: express.Application) => {
  app.get("/", (req, res) => res.send("Hello World"));
  app.use("/api/user", userRouter);
};
