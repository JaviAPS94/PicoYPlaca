import { Request, Response, NextFunction } from "express";
import { Validatorjs } from "../../utils/Validator";
import { transformValidationErrors } from "../../utils/transformValidationErrors";
import { Service } from "typedi";
import _ from "lodash";

@Service()
export default class LicensePlateValidator {

  constructor() { }

  public validateLicensePlate  = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    const validateLicensePlateRules = {
      date: 'required|dateFormat',
      time: "required|timeFormat",
      licensePlate: `required|licensePlateFormat`
    };

    const validator = new Validatorjs(data, validateLicensePlateRules);

    validator.passes(() => {
      next();
    });

    validator.fails(() => {
      const formatedErrors = transformValidationErrors(validator.errors);
      res.status(422).send(formatedErrors);
    });
  }
}