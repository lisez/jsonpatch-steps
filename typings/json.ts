export type JsonPrimitiveValue = string | number | boolean | null;

export interface JsonArrayValue extends Array<JsonPrimitiveValue> {}

export interface JsonObjectValue
  extends Record<
    string,
    JsonPrimitiveValue | JsonArrayValue | JsonObjectValue
  > {}

export type JsonValue = JsonPrimitiveValue | JsonArrayValue | JsonObjectValue;
