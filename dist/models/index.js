/**
 * Central export for all data models
 */
export { isValidEmail, isValidEmailAddress } from './Email';
export { isValidWatcherConfig, isValidImportanceCriteria, isValidPriorityRules, isValidRateLimitConfig } from './Config';
export { isValidProcessedEmailIndex, isValidProcessedEmailEntry, isValidPriorityLevel } from './ProcessedEmailIndex';
export { isValidLogEntry, isValidLogLevel } from './LogEntry';
// Error types
export { AuthenticationError, NetworkError, RateLimitError, APIError, ConfigurationError } from './Errors';
//# sourceMappingURL=index.js.map