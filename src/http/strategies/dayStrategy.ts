import { Container } from "typedi";

const dayStrategy: any = {
  // Insert events
  MODAY: async (licensePlateLastDigit: number) => {
    return (licensePlateLastDigit === 1 || licensePlateLastDigit === 2) ? true : false;
  },
  TUESDAY: async (licensePlateLastDigit: number) => {
    return (licensePlateLastDigit === 3 || licensePlateLastDigit === 4) ? true : false;
  },
  WEDNESDAY: async (licensePlateLastDigit: number) => {
    return (licensePlateLastDigit === 5 || licensePlateLastDigit === 6) ? true : false;
  },
  THURSDAY: async (licensePlateLastDigit: number) => {
    return (licensePlateLastDigit === 7 || licensePlateLastDigit === 8) ? true : false;
  },
  FRIDAY: async (licensePlateLastDigit: number) => {
    return (licensePlateLastDigit === 9 || licensePlateLastDigit === 0) ? true : false;
  }
};

export default dayStrategy;