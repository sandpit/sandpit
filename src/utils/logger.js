const logger = {
  active: false,
  log: (message) => {
    logger.print('log', message)
  },
  warn: (message) => {
    logger.print('warn', message)
  },
  error: (message) => {
    logger.print('error', message)
  },
  info: (message) => {
    logger.print('info', message)
  },
  print: (type, message) => {
    if (logger.active) console[type](`👉 Sandbox: ${message}`)
  }
}

export default logger
