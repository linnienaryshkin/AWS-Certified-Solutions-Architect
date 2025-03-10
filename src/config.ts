/**
 * Quite decent singleton pattern for configurations, use it a lot in my projects
 */
export class Config {
  static get MERKLE_TREE_BUCKET(): string {
    return this.getOrThrow('MERKLE_TREE_BUCKET');
  }

  private static getOrThrow(env: string): string {
    const envVar = process.env[env];
    if (!envVar) {
      throw new Error(`Environment variable ${env} is not defined`);
    }
    return envVar;
  }
}
