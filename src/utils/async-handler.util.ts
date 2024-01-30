const asyncHandler = (requestHandler: any) => {
  return (req: any, res: any, next: any) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

const processHandler = async (fn: any): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      return resolve(await fn());
    } catch (error: any) {
      console.error("APP ERROR: ", error);
      process.exit(1);
    }
  });
};

export { asyncHandler, processHandler };
