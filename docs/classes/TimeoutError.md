[sequelize-pool](../README.md) / TimeoutError

# Class: TimeoutError

Error which is thrown by pool when acquire request timeouts

## Hierarchy

- `Error`

  ↳ **`TimeoutError`**

## Table of contents

### Constructors

- [constructor](TimeoutError.md#constructor)

### Properties

- [message](TimeoutError.md#message)
- [name](TimeoutError.md#name)
- [stack](TimeoutError.md#stack)
- [stackTraceLimit](TimeoutError.md#stacktracelimit)

### Methods

- [captureStackTrace](TimeoutError.md#capturestacktrace)
- [prepareStackTrace](TimeoutError.md#preparestacktrace)

## Constructors

### constructor

• **new TimeoutError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

Error.constructor

## Properties

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

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

## Methods

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

___

### prepareStackTrace

▸ `Static` `Optional` **prepareStackTrace**(`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

#### Returns

`any`

#### Inherited from

Error.prepareStackTrace
