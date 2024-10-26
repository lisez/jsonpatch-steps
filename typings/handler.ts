import type { JsonValue } from "jsonpatch-steps/typings/json";
import type {
    OperationArguments,
    Operators,
} from "jsonpatch-steps/typings/rfc6902";

export interface OperationHandler<T extends OperationArguments> {
    readonly op: string;
    handler(args: T): JsonValue;
}

export interface Rfc6902OperationHandler
    extends OperationHandler<OperationArguments> {
    readonly op: Operators;
}

export interface AsyncOperationHandler<T extends OperationArguments> {
    readonly op: string;
    handler(args: T): Promise<JsonValue>;
}

export interface AsyncRfc6902OperationHandler
    extends AsyncOperationHandler<OperationArguments> {
    readonly op: Operators;
}
