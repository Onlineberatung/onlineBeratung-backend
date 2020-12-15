# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/compare/v1.2.1...v2.0.0) (2020-12-15)


### ⚠ BREAKING CHANGES

* mariadb database upgrade requires to upgrade also existig tables. Use docker exec -it mariadb bash -c "mysql_upgrade -u<USER_NAME> -p<PASSOWRD>" to perform the upgrade on the started new mariadb container

### Features

* add messageservice properties ([c3918c4](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/c3918c487d48735f1b575866c48144b8765e1a5d))
* added insert permission for agencyservice database user ([aaf09d4](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/aaf09d49f314eab8bdf9f1ca55dcc67d67837b95))
* increment rate limit for subscription.read call ([f30b628](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/f30b628f06c065091e2b48929c0ec66e22315cb2))
* integrate agency admin service path ([1c389af](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/1c389af1f9bde0ede7bf32987f09cc736c0aafe6))
* integrate uploadservice file upload restriction ([da8380c](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/da8380c02f5a57cae9a777c52f4eaeadd3aab810))
* integrate userservice admin service path ([d6f6eaa](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/d6f6eaa9b5a140910047059ec5a8620068e35878))
* restrict release action to branches starting with release ([2e42179](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/2e42179614fcba66f6cd1dc6f0c5971baf4cfc4d))
* update mariadb, adminer and mongoclient ([2448e1f](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/2448e1fc6a77cc79b7fb44cc971fd72c9b9d7542))
* update versions of rocket.chat and mongodb ([c7990e6](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/c7990e6338fd5434b34a3ac89fb3f24768887c35))


### Bug Fixes

* correct proxy path ([63ba5e2](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/63ba5e2020e0358df44bca1a5d12aaf708ee0d2a))
* removed old keycloak version from resources path for password reset styles ([cf99421](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/cf99421d38d54389d9081f501de247c9e2e65985))
* removed username from keycloak password reset theme ([3e492fc](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/3e492fc58daba56ce006f81a157846d18a892c21))

### [1.2.1](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/compare/v1.2.0...v1.2.1) (2020-10-29)

## [1.2.0](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/compare/v1.1.1...v1.2.0) (2020-10-29)


### Features

* adapt liveservice config ([375c7c8](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/375c7c8389aed2919f6b9b6b737eeca46f9ccb4d))
* add messageservice db privileges ([2ae4a0f](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/2ae4a0f36c58f30974f968c027e42106630926df))
* added rate limiting for websocket and file upload calls ([cfb2632](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/cfb26323efd691734fdf534aa6fcfe212bc7328a))
* added upgrade headers needed for websocket connection ([a44286b](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/a44286b2991224719f7c4d46932b461fc4dca175))
* extend init.sql for messageservice database ([2b42d98](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/2b42d98423f7fdf3eefca9058e704c5205cdc337))
* integrate live messaging ([273de70](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/273de700a5e73fc7e80c5127b211cbe32b9f54ae))
* integrate new live service ([ad729d6](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/ad729d685e730dfc2731662fab7cb48bcbb4303f))


### Bug Fixes

* added missing file download path to whitelist ([7db8efd](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/7db8efde135942affa2f603a25889025359cf43a))
* changed path to be case sensitive ([707b52a](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/707b52aa7aecd1127ada73f5e642bf1a15de9d2d))
* corrected whitelisting for rocket.chat and keycloak endpoints ([33521a7](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/33521a7006cdf85637a376b8403d2b9be06ed49e))

### [1.1.1](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/compare/v1.1.0...v1.1.1) (2020-07-29)

## 1.1.0 (2020-07-29)


### Features

* added whitelist for rocketchat and keycloak api ([e1ac153](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/e1ac15373a7e97488116a5a6e6e8f97e0d30f760))
* Backend-integration of the UploadService ([e37f7b9](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/e37f7b9dc684dac52108309816407372aaadf494))
* changed default limit error code to 429 ([f8e1f35](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/f8e1f35f54a84ac2508732e95b93f209a1d00005))
* Initial Commit ([27850f4](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/27850f42a887da9b540c6039e53bb4ef96d0ce60))
* limit simultaneous connections for same ip address ([af2a086](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/af2a0862bb28e631edf412e858a3b077ca074e28))
* prevent rocketchat from sending cors header ([08956fe](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/08956fe0f284e9b10831208d7898af8c444cdcba))
* restrict rocketchat endpoints which are only used in the backend ([616f5c7](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/616f5c716ad322884f9959a5e903936c408a7bd6))


### Bug Fixes

* added npm install for github release action ([e870486](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/e870486dfe856f88d9849baac5b0fa4fb1852a8d))
* increased the number of connects a worker can handle ([ac1ce0b](https://github.com/virtualidentityag/caritas-onlineBeratung-backend/commit/ac1ce0b398b972be253121f4490ff41358659920))
