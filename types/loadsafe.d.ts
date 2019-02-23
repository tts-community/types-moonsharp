/** Same as `load`, except that “env” defaults to the current environment of the function calling load, instead of the actual global environment. */
declare const loadsafe: typeof load;
/** Same as `loadfile`, except that “env” defaults to the current environment of the function calling load, instead of the actual global environment. */
declare const loadfilesafe: typeof loadfile;
