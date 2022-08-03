import * as tap from 'tap';
import { Pool } from '../../src';

tap.test('fail for max < min', (t) => {
  const factory = {
    name: 'test-config',
    create: async () => Math.random(),
    destroy: () => {
      //noop
    },
    validate: () => true,
    max: 1,
    min: 12,
  };

  t.throws(() => {
    new Pool(factory);
  }, 'max is smaller than min');
  t.end();
});

tap.test('fail without factory.create', (t) => {
  const factory = {
    name: 'test-config',
    destroy: () => {
      //noop
    },
    validate: () => true,
    max: 1,
    min: 0,
  };

  t.throws(() => {
    // @ts-expect-error validate is required
    new Pool(factory);
  }, 'create function is required');
  t.end();
});

tap.test('fail without factory.destroy', (t) => {
  const factory = {
    name: 'test-config',
    create: async () => Math.random(),
    validate: () => true,
    max: 1,
    min: 0,
  };

  t.throws(() => {
    // @ts-expect-error destroy is required
    new Pool(factory);
  }, 'destroy function is required');
  t.end();
});

tap.test('fail without factory.validate', (t) => {
  const factory = {
    name: 'test-config',
    create: async () => Math.random(),
    destroy: () => {
      //noop
    },
    max: 1,
    min: 0,
  };

  t.throws(() => {
    // @ts-expect-error validate is required
    new Pool(factory);
  }, 'validate function is required');
  t.end();
});

tap.test('correctly defaults', (t) => {
  const factory = {
    name: 'test-config-defaults',
    create: async () => Math.random(),
    destroy: () => {
      //noop
    },
    validate: () => true,
    max: 1,
    min: 0,
    idleTimeoutMillis: 0,
    // @ts-expect-error need to pass undefined
    acquireTimeoutMillis: undefined,
    // @ts-expect-error need to pass null
    reapIntervalMillis: null,
  };

  const pool = new Pool(factory);

  // eslint-disable-next-line
  // @ts-ignore
  t.equal(pool.idleTimeoutMillis, 0);

  // eslint-disable-next-line
  // @ts-ignore
  t.equal(pool.acquireTimeoutMillis, 30000);

  // eslint-disable-next-line
  // @ts-ignore
  t.equal(pool.reapIntervalMillis, 1000);

  t.end();
});
