# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - 2020-07-17

### POC

- This is the library in a POC state.

## [1.0.0] - 2020-07-25

### Initial Release

- This library is now being used by ThisIsMe's Company Credit Report v3 call.

## [2.0.0] - 2020-07-30

### The Clean Release

- Previous code base was unstable and heading down a spaghetti code path, a lot of refactoring was done to avoid unnecessary errors and confusion, this version also supports more line types.
- Library name also changed from `@ThisIsMe/pdfgeneration-lib` to `@thisisme/pdfgeneration-lib`.

## [3.0.0] - 2020-08-10

### The Fancy Release

- Text have been made smaller.
- Fancy headers have been brought in for defined Headers.
- Grid Type has been added.
- File Structure has been improved, not just using app.js but split logic into different files as welll to help improve readability and maintainability.
- Pipelines have been implemented to test code pushed up.

## [4.0.0] - 2020-08-29

### The start of document types

- Document types added.
- More line types added.
- Helper builders added.

## [4.0.1] - 2020-08-30

### Bug fix

- width size of rows on pdf reduced to prevent lines going over to next.

## [5.0.0] - 2020-10-08

### Image and Indicative Bar (Score)

- Some refactoring to ease reading and future maintainability
- New types

## [5.0.1] - 2020-10-11

### Bug fix

- Minor logging corrections

## [5.1.1] - 2020-10-16

### Minor change

- Report bucket setting changed env var

## [5.2.1] - 2020-10-16

### Minor change

- AWS_DEFAULT_REGION reference changed to TIM_AWS_DEFAULT_REGION

## [5.3.0] - 2020-11-04

### Cover Page & Bug fixes

- Code restructure
- Cover Page added as a PDF Type
- Fixed headers that aren't selected as new page headers
- Fixed async issue with older PDF Types
- Added functionality to build tables

## [5.3.1] - 2020-11-05

### Bug fix

- splitLongText function fixed, was not catering for long words