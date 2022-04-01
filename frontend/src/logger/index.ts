export enum LogLevel {
    DEBUG,
    INFO,
    WARN,
    ERROR
}

class Logger {
    private static log(level: LogLevel = LogLevel.DEBUG, message: string) {
        switch (level) {
            case LogLevel.DEBUG:
                console.debug(message);
                break;
            case LogLevel.INFO:
                console.info(message);
                break;
            case LogLevel.WARN:
                console.warn(message);
                break;
            case LogLevel.ERROR:
                console.error(message);
                break;
            default:
                break;
        }
    }

    debug(message: string) {
        Logger.log(LogLevel.DEBUG, message);
    }

    info(message: string) {
        Logger.log(LogLevel.INFO, message);
    }

    warn(message: string) {
        Logger.log(LogLevel.WARN, message);
    }

    error(message: string) {
        Logger.log(LogLevel.ERROR, message);
    }
}

export default new Logger();
