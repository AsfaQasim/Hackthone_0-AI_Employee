/**
 * Configuration Manager for Gmail Watcher Agent Skill
 * Handles loading, validating, and providing default configuration
 */
import { WatcherConfig } from '../models/Config';
/**
 * Validation result for configuration
 */
export interface ValidationResult {
    valid: boolean;
    errors: string[];
}
/**
 * Configuration Manager class
 * Responsible for loading, validating, and providing configuration
 */
export declare class ConfigurationManager {
    /**
     * Load configuration from a file
     * Supports both YAML and JSON formats
     * Returns default config if file is missing or malformed
     *
     * @param configPath - Path to configuration file
     * @returns Promise resolving to WatcherConfig
     */
    loadConfig(configPath: string): Promise<WatcherConfig>;
    /**
     * Validate configuration structure and values
     *
     * @param config - Configuration object to validate
     * @returns ValidationResult with valid flag and error messages
     */
    validateConfig(config: any): ValidationResult;
    /**
     * Get default configuration with sensible values
     * Used when configuration file is missing or invalid
     *
     * @returns Default WatcherConfig
     */
    getDefaultConfig(): WatcherConfig;
}
//# sourceMappingURL=ConfigurationManager.d.ts.map