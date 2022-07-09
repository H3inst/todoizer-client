class ResponseHelper {

  static successResponse(res, data) {
    this.response = { status: 'ok', data };
    return res.json(this.response);
  }

  static errorResponse(res, error) {
    this.response = { error: 'No specified error.' };

    if (error instanceof Error) {
      this.response.status = 'error';
      this.response.error = error.message;
    }
    return res.json(this.response);
  }
}

module.exports = ResponseHelper;