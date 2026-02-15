/**
 * Duplicate Tracker Component
 * Prevents duplicate markdown file creation by maintaining an index of processed emails
 *
 * Requirements: 10.1, 10.2, 10.4, 10.5
 */
import { ProcessedEmailEntry, PriorityLevel } from '../models';
/**
 * DuplicateTracker manages an index of processed emails to prevent duplicates
 */
export declare class DuplicateTracker {
    private indexPath;
    private index;
    private loaded;
    /**
     * Creates a new DuplicateTracker instance
     * @param indexPath Path to the JSON index file
     */
    constructor(indexPath: string);
    /**
     * Ensures the index is loaded from disk
     * Creates a new index file if it doesn't exist
     */
    private ensureLoaded;
    /**
     * Saves the current index to disk
     */
    private saveIndex;
    /**
     * Serializes the index for JSON storage
     * Converts Date objects to ISO strings
     */
    private serializeIndex;
    /**
     * Deserializes the index from JSON storage
     * Converts ISO strings back to Date objects
     */
    private deserializeIndex;
    /**
     * Checks if an email has already been processed
     * @param emailId Gmail message ID
     * @returns true if email has been processed, false otherwise
     *
     * Requirements: 10.1, 10.2
     */
    isProcessed(emailId: string): Promise<boolean>;
    /**
     * Marks an email as processed
     * @param emailId Gmail message ID
     * @param filename Generated markdown filename
     * @param priority Priority level assigned to the email
     *
     * Requirements: 10.4
     */
    markProcessed(emailId: string, filename: string, priority?: PriorityLevel): Promise<void>;
    /**
     * Rebuilds the index by scanning markdown files in the specified folder
     * Extracts email IDs from frontmatter
     * @param folder Path to the folder containing markdown files
     *
     * Requirements: 10.5
     */
    rebuildIndex(folder: string): Promise<void>;
    /**
     * Gets the entry for a processed email
     * @param emailId Gmail message ID
     * @returns ProcessedEmailEntry if found, undefined otherwise
     */
    getEntry(emailId: string): Promise<ProcessedEmailEntry | undefined>;
    /**
     * Gets all processed email IDs
     * @returns Array of email IDs
     */
    getAllEmailIds(): Promise<string[]>;
    /**
     * Clears the entire index
     * Useful for testing or resetting state
     */
    clear(): Promise<void>;
}
//# sourceMappingURL=DuplicateTracker.d.ts.map