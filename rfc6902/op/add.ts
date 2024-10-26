import type { Rfc6902OperationHandler } from "jsonpatch-steps/typings/handler";
import type { JsonValue } from "jsonpatch-steps/typings/json";
import type { OperationArguments } from "jsonpatch-steps/typings/rfc6902";

export class AddHandler implements Rfc6902OperationHandler {
    readonly op = "add";

    handler(args: OperationArguments): JsonValue {
        return { op: this.op, ...args };
    }
}
