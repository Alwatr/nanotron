/**
 * Object representing standard HTTP methods.
 */
export const HttpMethods = {
  /**
   * GET: Requests a representation of the specified resource.
   */
  GET: 'GET',

  /**
   * HEAD: Asks for a response identical to that of a GET request, but without the response body.
   */
  HEAD: 'HEAD',

  /**
   * POST: Submits data to be processed (e.g., from an HTML form) to the identified resource.
   */
  POST: 'POST',

  /**
   * PUT: Uploads a representation of the specified URI.
   */
  PUT: 'PUT',

  /**
   * DELETE: Deletes the specified resource.
   */
  DELETE: 'DELETE',

  /**
   * CONNECT: Establishes a tunnel to the server identified by the target resource.
   */
  CONNECT: 'CONNECT',

  /**
   * OPTIONS: Describes the communication options for the target resource.
   */
  OPTIONS: 'OPTIONS',

  /**
   * TRACE: Performs a message loop-back test along the path to the target resource.
   */
  TRACE: 'TRACE',

  /**
   * PATCH: Applies partial modifications to a resource.
   */
  PATCH: 'PATCH'
} as const;

