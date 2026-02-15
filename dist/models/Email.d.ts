/**
 * Email data models for Gmail Watcher Agent Skill
 * Represents emails retrieved from Gmail via MCP
 */
/**
 * Email address with display name and email
 */
export interface EmailAddress {
    name: string;
    email: string;
}
/**
 * Email retrieved from Gmail
 */
export interface Email {
    id: string;
    threadId: string;
    sender: EmailAddress;
    subject: string;
    date: Date;
    labels: string[];
    bodyHtml: string;
    bodyText: string;
    snippet: string;
}
/**
 * Type guard to validate Email object has all required fields
 */
export declare function isValidEmail(obj: any): obj is Email;
/**
 * Type guard to validate EmailAddress object
 */
export declare function isValidEmailAddress(obj: any): obj is EmailAddress;
//# sourceMappingURL=Email.d.ts.map