import { Response } from "express";
import { Service } from "typedi";

@Service()
export class DummyController {
  constructor() {}
  public test = (req: any, res: Response) => {
    res.status(200).json({ message: "Dummy Controller is working!" });
  };
}
