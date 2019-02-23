/** The global namespace will contain a new `_MOONSHARP` table which exposes some members specific to MoonSharp */
declare namespace _MOONSHARP {
  /** The version of the MoonSharp interpreter */
  let version: string;
  /** The version of the Lua interpreter MoonSharp attempts to emulate */
  let luacompat: string;
  /** The name of the platform it is running on */
  let platform: string;
  /** True if running on an AOT platform */
  let is_aot: boolean;
  /** True if running inside Unity */
  let is_unity: boolean;
  /** True if running on Mono */
  let is_mono: boolean;
  /** True if running on .NET 4.x */
  let is_clr4: boolean;
  /** True if running as a portable class library */
  let is_pcl: boolean;
  /** A banner similar to the one in the REPL interpreter */
  let banner: __LUA_TODO__;
}
