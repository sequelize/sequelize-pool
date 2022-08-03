type FactoryItem = { id: number };

/**
 * Generic class for handling creation of resources
 * for testing
 */
export class ResourceFactory {
  created: number;
  destroyed: number;
  bin: FactoryItem[];

  constructor() {
    this.created = 0;
    this.destroyed = 0;
    this.bin = [];
  }

  create() {
    return delay(1).then(() => ({
      id: this.created++,
    }));
  }

  destroy(resource: FactoryItem) {
    this.destroyed++;
    this.bin.push(resource);
  }

  validate() {
    return true;
  }
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
