export const transformValidationErrors = (errors: any) => {
  const formatedErrors = [];
  for (const key in errors.errors) {
    if (errors.errors.hasOwnProperty(key)) {
      formatedErrors.push(
        {
          code: null,
          field: key,
          value: errors.first(key)
        }
      );
    }
  }

  return {
    code: 422,
    status: "fail",
    message: "Error de validación.",
    error: formatedErrors
  };
};
