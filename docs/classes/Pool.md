[**sequelize-pool**](../README.md)

***

[sequelize-pool](../README.md) / Pool

# Class: Pool\<RawResource\>

## Type Parameters

### RawResource

`RawResource`

## Constructors

### Constructor

> **new Pool**\<`RawResource`\>(`factory`): `Pool`\<`RawResource`\>

Generate an object pool with a specified `factory`.

#### Parameters

##### factory

[`FactoryOptions`](../interfaces/FactoryOptions.md)\<`RawResource`\>

#### Returns

`Pool`\<`RawResource`\>

## Accessors

### available

#### Get Signature

> **get** **available**(): `number`

Number of unused resources in the pool

##### Returns

`number`

***

### maxSize

#### Get Signature

> **get** **maxSize**(): `number`

Maximum number of resources allowed by pool

##### Returns

`number`

***

### minSize

#### Get Signature

> **get** **minSize**(): `number`

Minimum number of resources allowed by pool

##### Returns

`number`

***

### name

#### Get Signature

> **get** **name**(): `string`

factory.name for this pool

##### Returns

`string`

***

### size

#### Get Signature

> **get** **size**(): `number`

Number of resources in the pool regardless of
whether they are free or in use

##### Returns

`number`

***

### using

#### Get Signature

> **get** **using**(): `number`

Number of in use resources

##### Returns

`number`

***

### waiting

#### Get Signature

> **get** **waiting**(): `number`

Number of callers waiting to acquire a resource

##### Returns

`number`

## Methods

### acquire()

> **acquire**(): `Promise`\<`RawResource`\>

Requests a new resource. This will call factory.create to request new resource.

It will be rejected with timeout error if `factory.create` didn't respond
back within specified `acquireTimeoutMillis`

**Throws:** [TimeoutError](TimeoutError.md)

#### Returns

`Promise`\<`RawResource`\>

***

### destroy()

> **destroy**(`resource`): `Promise`\<`void`\>

Removes a resource from pool. The factory's destroy handler will be called with given resource.

This is an alternative to `release()`

#### Parameters

##### resource

`RawResource`

#### Returns

`Promise`\<`void`\>

***

### destroyAllNow()

> **destroyAllNow**(): `Promise`\<`void`\>

Forcibly destroys all clients regardless of timeout. Intended to be
invoked as part of a drain. Does not prevent the creation of new
clients as a result of subsequent calls to acquire.

Note that if `factory.min > 0`, the pool will destroy all idle resources
in the pool, but replace them with newly created resources up to the
specified `factory.min` value.  If this is not desired, set `factory.min`
to zero before calling `destroyAllNow()`

**Throws:** [AggregateError](AggregateError.md)

#### Returns

`Promise`\<`void`\>

***

### drain()

> **drain**(): `Promise`\<`void`\>

Disallow any new acquire requests and let the request backlog dissipate.

#### Returns

`Promise`\<`void`\>

***

### release()

> **release**(`resource`): `void`

Return the resource to the pool, add it to the available objects.
Resource will be available for use by pending or future `acquire()` calls

#### Parameters

##### resource

`RawResource`

#### Returns

`void`
