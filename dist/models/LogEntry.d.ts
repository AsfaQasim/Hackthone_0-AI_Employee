/**
 * Log entry data models for audit logging
 * Defines log entry structure and levels
 */
/**
 * Log severity levels
 */
export type LogLevel = 'INFO' | 'WARN' | 'ERROR';
/**
 * Log entry structure
 */
export interface LogEntry {
    timestamp: Date;
    level: LogLevel;
    message: string;
    context?: object;
    stackTrace?: string;
}
/**
 * Type guard to validate LogLevel
 */
export declare function isValidLogLevel(value: any): value is LogLevel;
/**
 * Type guard to validate LogEntry
 */
export declare function isValidLogEntry(obj: any): obj is LogEntry;
//# sourceMappingURL=LogEntry.d.ts.map