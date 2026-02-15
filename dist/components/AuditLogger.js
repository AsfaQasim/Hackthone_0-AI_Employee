/**
 * Audit Logger Component
 * Records all operations for traceability and debugging
 * Implements JSON Lines format for persistent logging
 */
import * as fs from 'fs';
import * as path from 'path';
/**
 * AuditLogger class
 * Provides structured logging with info, warn, and error levels
 * Writes logs to persistent file in JSON Lines format
 */
export class AuditLogger {
    logFilePath;
    logFolder;
    /**
     * Creates a new AuditLogger instance
     * @param logFolder - Directory where log files will be stored
     * @param logFileName - Name of the log file (default: gmail-watcher.log)
     */
    constructor(logFolder = '.logs', logFileName = 'gmail-watcher.log') {
        this.logFolder = logFolder;
        this.logFilePath = path.join(logFolder, logFileName);
        this.ensureLogDirectoryExists();
    }
    /**
     * Ensures the log directory exists, creates it if necessary
     */
    ensureLogDirectoryExists() {
        if (!fs.existsSync(this.logFolder)) {
            fs.mkdirSync(this.logFolder, { recursive: true });
        }
    }
    /**
     * Logs an informational message
     * @param message - The log message
     * @param context - Optional additional context data
     */
    info(message, context) {
        this.writeLog('INFO', message, context);
    }
    /**
     * Logs a warning message
     * @param message - The log message
     * @param context - Optional additional context data
     */
    warn(message, context) {
        this.writeLog('WARN', message, context);
    }
    /**
     * Logs an error message with stack trace
     * @param message - The log message
     * @param error - The error object
     * @param context - Optional additional context data
     */
    error(message, error, context) {
        this.writeLog('ERROR', message, context, error.stack);
    }
    /**
     * Writes a log entry to the log file in JSON Lines format
     * @param level - Log level
     * @param message - Log message
     * @param context - Optional context data
     * @param stackTrace - Optional stack trace for errors
     */
    writeLog(level, message, context, stackTrace) {
        const logEntry = {
            timestamp: new Date(),
            level,
            message,
            ...(context && { context }),
            ...(stackTrace && { stackTrace })
        };
        // Convert to JSON Lines format (one JSON object per line)
        const logLine = JSON.stringify(logEntry) + '\n';
        // Append to log file
        try {
            fs.appendFileSync(this.logFilePath, logLine, 'utf8');
        }
        catch (err) {
            // If we can't write to the log file, write to stderr as fallback
            console.error('Failed to write to log file:', err);
            console.error('Log entry:', logLine);
        }
    }
    /**
     * Gets the current log file path
     * @returns The absolute path to the log file
     */
    getLogFilePath() {
        return path.resolve(this.logFilePath);
    }
}
//# sourceMappingURL=AuditLogger.js.map