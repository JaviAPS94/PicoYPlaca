import LicensePlateValidator from "./http/validators/LicensePlateValidator";
import LicensePlateController from "./http/controllers/LicensePlateController";
import Container from "typedi";

const version = process.env.API_VERSION;

export default [
  {
    path: `/api/${version}/validate/licensePlate`,
    method: "post",
    handler: [
      Container.get(LicensePlateValidator).validateLicensePlate,
      Container.get(LicensePlateController).validateLicensePlate
    ]
  }
];
