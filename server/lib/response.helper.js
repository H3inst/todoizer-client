function successResponse(res, data) {
  let response = { status: 'ok', data };
  return res.json(response);
}

function errorResponse(res, error) {
  let response = { error: 'No specified error.' };
  
  if (error instanceof Error) {
    response.status = 'error';
    response.error = error.message;
  }
  return res.json(response);
}

module.exports = {
  successResponse,
  errorResponse
};