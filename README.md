# Building a good workflow for JS apps

## Requirements

* Compatibility with rails (but not a dependency on rails)
* CoffeeScript compilation
* Template precompilation
* Ability to write modular JS (commonjs modules)
* Testable JS
* Not too custom (other people can pick it up)
* Good development/debug experience
* Fast compilation

## Current Setup

* Grunt for automating tasks
* Browserify for compiling JS
  * Compiles coffeescript/templates into a single bundle.js
  * Supports
* Custom grunt-browserify fork 
