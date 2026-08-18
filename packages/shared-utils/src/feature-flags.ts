import type { FeatureFlag } from '@app/shared-types';

export class FeatureFlagService {
  private flags: Map<string, FeatureFlag> = new Map();

  load(flags: FeatureFlag[]) {
    this.flags.clear();
    flags.forEach((flag) => this.flags.set(flag.key, flag));
  }

  isEnabled(key: string): boolean {
    return this.flags.get(key)?.enabled ?? false;
  }

  getFlag(key: string): FeatureFlag | undefined {
    return this.flags.get(key);
  }

  getAllFlags(): FeatureFlag[] {
    return Array.from(this.flags.values());
  }
}
