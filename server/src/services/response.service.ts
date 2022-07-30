export class ResponseService {
  static created<T>(data: T) {
    return {
      status: 201,
      error: false,
      message: null,
      data,
    };
  }

  static data<T>(data: T) {
    return {
      status: 200,
      error: false,
      message: null,
      data,
    };
  }

  static notFound(field = '') {
    return {
      status: 400,
      error: true,
      message: `${field} Not found`,
      data: null,
    };
  }

  static badRequest(error: string) {
    return {
      status: 400,
      error: true,
      message: error,
      data: null,
    };
  }

  static internalServerError(msg: unknown) {
    return {
      status: 500,
      error: true,
      message: msg,
      data: null,
    };
  }
}
