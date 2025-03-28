[**sequelize-pool**](../README.md)

***

[sequelize-pool](../README.md) / FactoryOptions

# Interface: FactoryOptions\<T\>

Factory options. Used for generating/destroying/validating resources & other configuration

## Type Parameters

### T

`T`

## Properties

### acquireTimeoutMillis?

> `optional` **acquireTimeoutMillis**: `number`

Delay in milliseconds after which pending acquire request in the pool will be rejected.
Pending acquires are acquire calls which are yet to receive an response from factory.create

#### Default

```ts
30000
```

***

### create()

> **create**: () => `Promise`\<`T`\>

Should create the item to be acquired

#### Returns

`Promise`\<`T`\>

***

### destroy()

> **destroy**: (`resource`) => `void` \| `Promise`\<`void`\>

Should gently close any resources that the item is using.
Called when resource is destroyed.

#### Parameters

##### resource

`T`

#### Returns

`void` \| `Promise`\<`void`\>

***

### idleTimeoutMillis?

> `optional` **idleTimeoutMillis**: `number`

Delay in milliseconds after which available resources in the pool will be destroyed.
This does not affects pending acquire requests.

#### Default

```ts
30000
```

***

### log?

> `optional` **log**: `boolean` \| [`FactoryLogger`](../type-aliases/FactoryLogger.md)

Whether the pool should log activity. If function is specified,
that will be used instead. The function expects the arguments msg, loglevel

#### Default

```ts
false
```

***

### max

> **max**: `number`

Maximum number of items that can exist at the same time.
Any further acquire requests will be pushed to the waiting list.

***

### maxUses?

> `optional` **maxUses**: `number`

The number of times an item is to be used before it is destroyed
no matter whether it is still healthy.  A value of 0 indicates the
item should be used indefinitely so long as it is healthy.
This can help with "re-balancing" connections when pool members behind
a load balancer are added but are not being adopted due to pools being
full of pre-existing persistent connections.

#### Default

```ts
Infinity
```

***

### min

> **min**: `number`

Minimum number of items in pool (including in-use).
When the pool is created, or a resource destroyed, this minimum will
be checked. If the pool resource count is below the minimum, a new
resource will be created and added to the pool.<Paste>

***

### name?

> `optional` **name**: `string`

Name of the factory. Serves only logging purposes.

***

### reapIntervalMillis?

> `optional` **reapIntervalMillis**: `number`

Clean up is scheduled in every `factory.reapIntervalMillis` milliseconds.

#### Default

```ts
1000
```

***

### validate()

> **validate**: (`resource`) => `boolean`

Should return true if connection is still valid and false
If it should be removed from pool. Called before item is
acquired from pool.

#### Parameters

##### resource

`T`

#### Returns

`boolean`
