[sequelize-pool](../README.md) / AggregateError

# Class: AggregateError

A wrapper for multiple Errors

## Hierarchy

- `Error`

  ↳ **`AggregateError`**

## Table of contents

### Constructors

- [constructor](AggregateError.md#constructor)

### Properties

- [errors](AggregateError.md#errors)
- [message](AggregateError.md#message)
- [name](AggregateError.md#name)
- [stack](AggregateError.md#stack)
- [prepareStackTrace](AggregateError.md#preparestacktrace)
- [stackTraceLimit](AggregateError.md#stacktracelimit)

### Methods

- [toString](AggregateError.md#tostring)
- [captureStackTrace](AggregateError.md#capturestacktrace)

## Constructors

### constructor

• **new AggregateError**(`errors`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | `Error`[] |

#### Overrides

Error.constructor

## Properties

### errors

• **errors**: `Error`[]

___

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• **name**: `string`

#### Inherited from

Error.name

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `Object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace
