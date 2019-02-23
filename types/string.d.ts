declare namespace string {
  /** Same as `string.byte` except that it returns a unicode codepoint instead of byte value */
  function unicode(s: string, i?: number, j?: number): number;
  /** Returns true if str2 is contained inside str1 */
  function contains(str1: string, str2: string): boolean;
  /** Returns true if str2 is contained at the very start of str1 */
  function startsWith(str1: string, str2: string): boolean;
  /** Returns true if str2 is contained at the very end of str1 */
  function endsWith(str1: string, str2: string): boolean;
}