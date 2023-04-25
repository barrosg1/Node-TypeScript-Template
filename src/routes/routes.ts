import { Application } from "express";
import { Container } from "typedi";
import { DummyController } from "../controllers/dummyController.controller";

export class Routes {
  private dummyController: DummyController;

  constructor() {
    this.dummyController = Container.get(DummyController);
  }

  public setup(app: Application): void {
    app.get("/", this.dummyController.test);
  }
}
