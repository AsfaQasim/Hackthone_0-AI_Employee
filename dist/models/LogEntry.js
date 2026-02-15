/**
 * Log entry data models for audit logging
 * Defines log entry structure and levels
 */
/**
 * Type guard to validate LogLevel
 */
export function isValidLogLevel(value) {
    return value === 'INFO' || value === 'WARN' || value === 'ERROR';
}
/**
 * Type guard to validate LogEntry
 */
export function isValidLogEntry(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        obj.timestamp instanceof Date &&
        isValidLogLevel(obj.level) &&
        typeof obj.message === 'string' &&
        (obj.context === undefined || typeof obj.context === 'object') &&
        (obj.stackTrace === undefined || typeof obj.stackTrace === 'string'));
}
//# sourceMappingURL=LogEntry.js.map