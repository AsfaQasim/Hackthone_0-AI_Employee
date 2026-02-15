/**
 * Audit Logger Component
 * Records all operations for traceability and debugging
 * Implements JSON Lines format for persistent logging
 */
/**
 * AuditLogger class
 * Provides structured logging with info, warn, and error levels
 * Writes logs to persistent file in JSON Lines format
 */
export declare class AuditLogger {
    private logFilePath;
    private logFolder;
    /**
     * Creates a new AuditLogger instance
     * @param logFolder - Directory where log files will be stored
     * @param logFileName - Name of the log file (default: gmail-watcher.log)
     */
    constructor(logFolder?: string, logFileName?: string);
    /**
     * Ensures the log directory exists, creates it if necessary
     */
    private ensureLogDirectoryExists;
    /**
     * Logs an informational message
     * @param message - The log message
     * @param context - Optional additional context data
     */
    info(message: string, context?: object): void;
    /**
     * Logs a warning message
     * @param message - The log message
     * @param context - Optional additional context data
     */
    warn(message: string, context?: object): void;
    /**
     * Logs an error message with stack trace
     * @param message - The log message
     * @param error - The error object
     * @param context - Optional additional context data
     */
    error(message: string, error: Error, context?: object): void;
    /**
     * Writes a log entry to the log file in JSON Lines format
     * @param level - Log level
     * @param message - Log message
     * @param context - Optional context data
     * @param stackTrace - Optional stack trace for errors
     */
    private writeLog;
    /**
     * Gets the current log file path
     * @returns The absolute path to the log file
     */
    getLogFilePath(): string;
}
//# sourceMappingURL=AuditLogger.d.ts.map