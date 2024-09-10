/**
 * Configuration options for the NanotronApiConnection.
 */
export interface NanotronApiConnectionConfig {
  /**
   * A prefix to be added to the beginning of the `url` of all defined routes.
   *
   * @default '/api/'
   */
  prefix: `/${string}/` | '/';
}
