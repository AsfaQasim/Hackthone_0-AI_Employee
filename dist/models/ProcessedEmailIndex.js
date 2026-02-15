/**
 * Processed email index data models
 * Tracks processed emails to prevent duplicates
 */
/**
 * Type guard to validate PriorityLevel
 */
export function isValidPriorityLevel(value) {
    return value === 'high' || value === 'medium' || value === 'low';
}
/**
 * Type guard to validate ProcessedEmailEntry
 */
export function isValidProcessedEmailEntry(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        typeof obj.filename === 'string' &&
        obj.processedAt instanceof Date &&
        isValidPriorityLevel(obj.priority));
}
/**
 * Type guard to validate ProcessedEmailIndex
 */
export function isValidProcessedEmailIndex(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (const key in obj) {
        if (!isValidProcessedEmailEntry(obj[key])) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=ProcessedEmailIndex.js.map