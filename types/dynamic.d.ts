type DynamicExprWrapper = {};
/**
 * MoonSharp offers a `dynamic` module which allows for expression evaluation without compiling Lua bytecode using the current execution context.

The evaluation will always perform raw access and will never call any function - it can be used to implement debuggers or things like a data load from a table source (using tables as if it was a format like JSON.. except Lua).
 */
declare namespace dynamic {
  /** Evaluates dynamically the expression contained in `expr` which can be a string or an expression object created with `dynamic.prepare`. */
  function eval(expr: string | DynamicExprWrapper): any;
  /** Creates a prepared expression object which can be passed to `dynamic.eval` for a faster execution than passing the string itself. */
  function prepare(expr: string): DynamicExprWrapper;
}