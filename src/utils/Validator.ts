import Validator from "validatorjs";
import moment from "moment";

Validator.useLang("es");

Validator.register("dateFormat", (value: any, requirement: any, attribute: any) => {
  const date = moment(value, "YYYY-MM-DD", true);
  return date.isValid();
}, "The date field must follow the format (yyyy-mm-dd)");

Validator.register("timeFormat", (value: any, requirement: any, attribute: any) => {
  const regEx = /^([0-1][0-9]|2[0-3])(:)([0-5][0-9])$/;
  return (!value.match(regEx)) ? false : true;
}, "The time field must follow the format (hh:mm)");

Validator.register("licensePlateFormat", (value: any, requirement: any, attribute: any) => {
  const regEx = /^([A-Z]{3}-\d{3,4})$/;
  return (!value.match(regEx)) ? false : true;
}, "The license plate field must follow the format (XXX-123 or XXX-1234)");

export const Validatorjs = Validator;
