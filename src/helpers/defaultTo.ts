export function defaultTo<T>(value: T | null | undefined, defaultValue: T): T {
  return value == null || value !== value ? defaultValue : value;
}
