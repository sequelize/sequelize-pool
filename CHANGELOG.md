# Changelog

## 8.0.0

- fix: correctly default pool configuration options, fixes [#48](https://github.com/sequelize/sequelize-pool/issues/48)

## 7.1.0

- fix: `acquire` not resolving after destroying available resources

## 7.0.0

- breaking: Support only `Node >= 10`

## 6.0.0

- change: `destory` (and `destoryAllNow`) are async now, they wait for `factory.destory`

## 5.0.0

- Typescript conversion. API is unchanged.

## 4.0.0

- Flow typed code. API is unchanged.

## v3.1.0

- added `maxUses` options [#18](https://github.com/sequelize/sequelize-pool/pull/18)
