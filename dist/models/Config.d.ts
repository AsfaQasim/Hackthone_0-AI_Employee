/**
 * Configuration data models for Gmail Watcher Agent Skill
 * Defines all configuration structures for the skill
 */
/**
 * Importance criteria for filtering emails
 */
export interface ImportanceCriteria {
    senderWhitelist: string[];
    keywordPatterns: string[];
    requiredLabels: string[];
    logicMode: 'OR' | 'AND';
}
/**
 * Priority detection rules
 */
export interface PriorityRules {
    highPriorityKeywords: string[];
    vipSenders: string[];
    highPriorityLabels: string[];
    mediumPriorityKeywords: string[];
}
/**
 * Rate limiting configuration
 */
export interface RateLimitConfig {
    maxRequestsPerMinute: number;
    maxRequestsPerDay: number;
    initialBackoffMs: number;
    maxBackoffMs: number;
    backoffMultiplier: number;
}
/**
 * Complete watcher configuration
 */
export interface WatcherConfig {
    pollingIntervalMs: number;
    importanceCriteria: ImportanceCriteria;
    priorityRules: PriorityRules;
    rateLimitConfig: RateLimitConfig;
    needsActionFolder: string;
    logFolder: string;
}
/**
 * Type guard to validate ImportanceCriteria
 */
export declare function isValidImportanceCriteria(obj: any): obj is ImportanceCriteria;
/**
 * Type guard to validate PriorityRules
 */
export declare function isValidPriorityRules(obj: any): obj is PriorityRules;
/**
 * Type guard to validate RateLimitConfig
 */
export declare function isValidRateLimitConfig(obj: any): obj is RateLimitConfig;
/**
 * Type guard to validate WatcherConfig
 */
export declare function isValidWatcherConfig(obj: any): obj is WatcherConfig;
//# sourceMappingURL=Config.d.ts.map