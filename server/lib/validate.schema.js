function validateSchema(schema, values) {
  const { error } = schema.validate(values);

  if (error) {
    const { details = [] } = error;
    const message = details.map((error) => error.message).join(', ');
    console.error(message);
    throw new Error(message);
  }
}

module.exports = validateSchema;