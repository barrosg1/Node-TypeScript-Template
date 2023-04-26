/*   ===  ADD UTILITY FUNCTIONS  ===  */

export const isEmpty = (value: any): boolean =>
  value === undefined ||
  value === null ||
  value === "" ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);
