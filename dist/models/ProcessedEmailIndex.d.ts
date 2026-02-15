/**
 * Processed email index data models
 * Tracks processed emails to prevent duplicates
 */
/**
 * Priority level for emails
 */
export type PriorityLevel = 'high' | 'medium' | 'low';
/**
 * Entry for a processed email
 */
export interface ProcessedEmailEntry {
    filename: string;
    processedAt: Date;
    priority: PriorityLevel;
}
/**
 * Index of processed emails
 * Maps email ID to processed email entry
 */
export interface ProcessedEmailIndex {
    [emailId: string]: ProcessedEmailEntry;
}
/**
 * Type guard to validate PriorityLevel
 */
export declare function isValidPriorityLevel(value: any): value is PriorityLevel;
/**
 * Type guard to validate ProcessedEmailEntry
 */
export declare function isValidProcessedEmailEntry(obj: any): obj is ProcessedEmailEntry;
/**
 * Type guard to validate ProcessedEmailIndex
 */
export declare function isValidProcessedEmailIndex(obj: any): obj is ProcessedEmailIndex;
//# sourceMappingURL=ProcessedEmailIndex.d.ts.map