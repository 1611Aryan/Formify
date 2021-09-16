import colors from "colors/safe"

enum theme {
  silly = "rainbow",
  input = "grey",
  verbose = "cyan",
  prompt = "grey",
  info = "green",
  data = "grey",
  help = "cyan",
  warn = "yellow",
  debug = "blue",
  error = "red",
}

const message = (
  str: any | (() => any),
  type: "error" | "debug" | "info" | "warn"
) => {
  if (typeof str === "function") return console.log(colors[theme[type]](str()))
  return console.log(colors[theme[type]](str))
}

export const console_error = (str: any | (() => any)) => message(str, "error")

export const console_debug = (str: any | (() => any)) => message(str, "debug")

export const console_info = (str: any | (() => any)) => message(str, "info")

export const console_warn = (str: any | (() => any)) => message(str, "warn")
