export default class GenericResponse {
  public success = (res: any, data?: any, message?: any) => {
    if (data) {
      return res.status(200).json(data);
    }
    if (message) {
      return res.status(200).json({
        message
      });
    }
  }

  public error = (res: any, data: any, status: any) => {
    switch (status) {
      case 400:
        return res.status(status).json({
          status: "error",
          message: "Bad request",
          data
        });

      case 404:
        return res.status(status).json({
          status: "error",
          message: "The request resource could not be found",
          data
        });

      case 405:
        return res.status(status).json({
          status: "error",
          message: "The method is not implemented",
          data
        });

      case 422:
        return res.status(status).json({
          status: "error",
          message: "Validation error",
          data
        });

      case 429:
        return res.status(status).json({
          status: "error",
          message: "Too many attempts",
          data
        });

      case 500:
        return res.status(status).json({
          status: "error",
          message: "Request failed due to internal error",
          data
        });

      case 503:
        return res.status(status).json({
          status: "error",
          message: "API is offline for maintenance",
          data
        });
    }
  }
}