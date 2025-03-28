[**sequelize-pool**](../README.md)

***

[sequelize-pool](../README.md) / AggregateError

# Class: AggregateError

A wrapper for multiple Errors

## Extends

- `Error`

## Constructors

### Constructor

> **new AggregateError**(`errors`): `AggregateError`

#### Parameters

##### errors

`Error`[]

#### Returns

`AggregateError`

#### Overrides

`Error.constructor`

## Properties

### errors

> **errors**: `Error`[]

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

## Methods

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

***

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

##### targetObject

`Object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`
