import type { JsonValue } from "./json";

export type Operators = "add" | "remove" | "replace" | "move" | "copy" | "test";

export interface OperationArguments {
    path: string;
    value?: JsonValue;
    from?: string;
}

export interface GenericOperation extends OperationArguments {
    op: Operators;
}

export interface TestOperation extends GenericOperation {
    op: "test";
    path: string;
    value: JsonValue;
}

export interface RemoveOperation extends GenericOperation {
    op: "remove";
    path: string;
}

export interface AddOperation extends GenericOperation {
    op: "add";
    path: string;
    value: JsonValue;
}

export interface ReplaceOperation extends GenericOperation {
    op: "replace";
    path: string;
    value: JsonValue;
}

export interface MoveOperation extends GenericOperation {
    op: "move";
    from: string;
    path: string;
}

export interface CopyOperation extends GenericOperation {
    op: "copy";
    from: string;
    path: string;
}
