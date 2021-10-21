import { Service } from "typedi";
import moment from "moment";
import dayStrategy from "../strategies/dayStrategy";
import ILicensePlateValidator from "../interfaces/ILicensePlateValidator";

@Service()
export default class LicensePlateService {

  constructor() { }

  public validateLicensePlate = async (iLicensePlateValidator: ILicensePlateValidator) => {
    const date = moment(iLicensePlateValidator.date).toDate();
    const day = await this.transformDay(date.getDay());
    const time = await this.transformToTime(date, iLicensePlateValidator.time);
    const isInRange = await this.timeIsInRange(date, time);

    if (day !== "SATURDAY" && day !== "SUNDAY" && isInRange) {
      const lastDigit = await this.getLastDigit(iLicensePlateValidator.licensePlate);
      return await dayStrategy[day](lastDigit);
    } else {
      return false;
    }
  }

  public getLastDigit = async (licensePlate: string) => {
    const lastDigit = licensePlate.charAt(licensePlate.length - 1);
    return parseInt(lastDigit, 10);
  }

  public transformDay = async (numberDay: number) => {
    const days: any = {
      1: "MONDAY",
      2: "TUESDAY",
      3: "WEDNESDAY",
      4: "THURSDAY",
      5: "FRIDAY",
      6: "SATURDAY",
      7: "SUNDAY"
    };
    const transformedDay = days[numberDay];
    return transformedDay;
  }

  public timeIsInRange = async (date: any, time: any) => {
    const startDayTimeRange = date.setHours(7, 0, 0);
    const endDayTimeRange = date.setHours(9, 30, 0);
    const startNightRange = date.setHours(16, 0, 0);
    const endNightRange = date.setHours(19, 30, 0);
    return ((time >= startDayTimeRange && time <= endDayTimeRange) ||
      (time >= startNightRange && time <= endNightRange)) ? true : false;
  }

  public transformToTime = async (date: any, time: any) => {
    const dateTime: any = date.setHours((time.substr(0, time.indexOf(":"))), (time.substr(time.indexOf(":") + 1)), 0);
    return dateTime;
  }
}
