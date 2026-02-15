/**
 * Custom error types for Gmail Watcher Agent Skill
 * Defines specific error classes for different failure scenarios
 */
/**
 * Authentication error - OAuth token issues, expired credentials, insufficient permissions
 * Requires manual user intervention to resolve
 */
export declare class AuthenticationError extends Error {
    readonly originalError?: Error;
    constructor(message: string, originalError?: Error);
}
/**
 * Network error - Connection timeouts, DNS failures, network unavailability
 * Should be retried with exponential backoff
 */
export declare class NetworkError extends Error {
    readonly originalError?: Error;
    constructor(message: string, originalError?: Error);
}
/**
 * Rate limit error - Exceeding Gmail API quota limits
 * Should pause requests and resume after specified delay
 */
export declare class RateLimitError extends Error {
    readonly retryAfter: number;
    readonly originalError?: Error;
    constructor(message: string, retryAfter: number, originalError?: Error);
}
/**
 * API error - Invalid requests, server errors, service unavailability
 * 4xx errors should be skipped, 5xx errors should be retried
 */
export declare class APIError extends Error {
    readonly statusCode: number;
    readonly originalError?: Error;
    constructor(message: string, statusCode: number, originalError?: Error);
}
/**
 * Configuration error - Missing config file, invalid YAML/JSON, invalid values
 * Should fall back to default configuration
 */
export declare class ConfigurationError extends Error {
    readonly validationErrors?: string[];
    constructor(message: string, validationErrors?: string[]);
}
//# sourceMappingURL=Errors.d.ts.map