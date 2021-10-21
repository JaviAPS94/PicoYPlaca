import { Request, Response } from "express";
import GenericResponse from "../../utils/GenericReponse";
import { Service } from "typedi";
import LicensePlateService from "../services/LicensePlateService";
import ILicensePlateValidator from "../interfaces/ILicensePlateValidator";

@Service()
export default class LicensePlateController {

  constructor(
    private licensePlateService: LicensePlateService,
    private genericResponse: GenericResponse
  ) { }

  public validateLicensePlate = async (req: Request, res: Response) => {
    const input = req.body as ILicensePlateValidator;
    try {
      const validateLicensePlateResult = await this.licensePlateService.validateLicensePlate(input);
      return (validateLicensePlateResult) ? this.genericResponse.success(res, null, "El vehículo no puede circular.") :
        this.genericResponse.success(res, null, "El vehículo puede circular.");
    } catch (err) {
      this.genericResponse.error(res, err.message, err.response.status);
    }
  }
}
