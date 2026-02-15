/**
 * Email data models for Gmail Watcher Agent Skill
 * Represents emails retrieved from Gmail via MCP
 */
/**
 * Type guard to validate Email object has all required fields
 */
export function isValidEmail(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        typeof obj.id === 'string' &&
        typeof obj.threadId === 'string' &&
        isValidEmailAddress(obj.sender) &&
        typeof obj.subject === 'string' &&
        obj.date instanceof Date &&
        Array.isArray(obj.labels) &&
        obj.labels.every((label) => typeof label === 'string') &&
        typeof obj.bodyHtml === 'string' &&
        typeof obj.bodyText === 'string' &&
        typeof obj.snippet === 'string');
}
/**
 * Type guard to validate EmailAddress object
 */
export function isValidEmailAddress(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        typeof obj.name === 'string' &&
        typeof obj.email === 'string');
}
//# sourceMappingURL=Email.js.map