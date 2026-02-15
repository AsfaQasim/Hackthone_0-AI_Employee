/**
 * Central export for all data models
 */
export type { Email, EmailAddress } from './Email';
export { isValidEmail, isValidEmailAddress } from './Email';
export type { WatcherConfig, ImportanceCriteria, PriorityRules, RateLimitConfig } from './Config';
export { isValidWatcherConfig, isValidImportanceCriteria, isValidPriorityRules, isValidRateLimitConfig } from './Config';
export type { ProcessedEmailIndex, ProcessedEmailEntry, PriorityLevel } from './ProcessedEmailIndex';
export { isValidProcessedEmailIndex, isValidProcessedEmailEntry, isValidPriorityLevel } from './ProcessedEmailIndex';
export type { LogEntry, LogLevel } from './LogEntry';
export { isValidLogEntry, isValidLogLevel } from './LogEntry';
export { AuthenticationError, NetworkError, RateLimitError, APIError, ConfigurationError } from './Errors';
//# sourceMappingURL=index.d.ts.map