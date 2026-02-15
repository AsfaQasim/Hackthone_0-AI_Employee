/**
 * Configuration data models for Gmail Watcher Agent Skill
 * Defines all configuration structures for the skill
 */
/**
 * Type guard to validate ImportanceCriteria
 */
export function isValidImportanceCriteria(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        Array.isArray(obj.senderWhitelist) &&
        obj.senderWhitelist.every((s) => typeof s === 'string') &&
        Array.isArray(obj.keywordPatterns) &&
        obj.keywordPatterns.every((k) => typeof k === 'string') &&
        Array.isArray(obj.requiredLabels) &&
        obj.requiredLabels.every((l) => typeof l === 'string') &&
        (obj.logicMode === 'OR' || obj.logicMode === 'AND'));
}
/**
 * Type guard to validate PriorityRules
 */
export function isValidPriorityRules(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        Array.isArray(obj.highPriorityKeywords) &&
        obj.highPriorityKeywords.every((k) => typeof k === 'string') &&
        Array.isArray(obj.vipSenders) &&
        obj.vipSenders.every((s) => typeof s === 'string') &&
        Array.isArray(obj.highPriorityLabels) &&
        obj.highPriorityLabels.every((l) => typeof l === 'string') &&
        Array.isArray(obj.mediumPriorityKeywords) &&
        obj.mediumPriorityKeywords.every((k) => typeof k === 'string'));
}
/**
 * Type guard to validate RateLimitConfig
 */
export function isValidRateLimitConfig(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        typeof obj.maxRequestsPerMinute === 'number' &&
        obj.maxRequestsPerMinute > 0 &&
        typeof obj.maxRequestsPerDay === 'number' &&
        obj.maxRequestsPerDay > 0 &&
        typeof obj.initialBackoffMs === 'number' &&
        obj.initialBackoffMs > 0 &&
        typeof obj.maxBackoffMs === 'number' &&
        obj.maxBackoffMs > 0 &&
        typeof obj.backoffMultiplier === 'number' &&
        obj.backoffMultiplier > 1);
}
/**
 * Type guard to validate WatcherConfig
 */
export function isValidWatcherConfig(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        typeof obj.pollingIntervalMs === 'number' &&
        obj.pollingIntervalMs > 0 &&
        isValidImportanceCriteria(obj.importanceCriteria) &&
        isValidPriorityRules(obj.priorityRules) &&
        isValidRateLimitConfig(obj.rateLimitConfig) &&
        typeof obj.needsActionFolder === 'string' &&
        typeof obj.logFolder === 'string');
}
//# sourceMappingURL=Config.js.map