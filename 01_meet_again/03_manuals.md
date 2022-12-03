---
prev:
  text: History
  link: ./02_history.md 
next: 
  text: Hello World
  link: ./04_hello.md
---
# JavaScript Manual

**JavaScript has one main documentation site**: [MDN JavaScript DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Where to find information?

You will need to access basic information about syntax instead of memorizing.

The documentation of core language features are in Ecma International's web site (pure [ECMAScript](https://tc39.es/ecma262/)) but it's hard to use as a reference.

::: tip
Re-Beginners Method follows The [JavaScript reference of mozilla developers Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) to get more details on individual objects and language constructs.

You need to learn locations of headlines because you'll refer to these pages often.

:::

## The DOM vs core JavaScript

Separation of The DOM and core JavaScript is important to find information you are looking for easily.

The umbrella term "JavaScript" as understood in a web browser context contains several very different elements. One of them is the core language (ECMAScript), another is the collection of the Web APIs, including the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (Document Object Model).

ECMAScript does not provide rule sets for APIs such as ;

- DOM APIs

    The Document Object Model (DOM) is a cross-platform, language-independent convention for representing and interacting with objects in HTML
- WebSockets allows low-level bidirectional communication.
- Canvas 2D Context is a drawing API for `<canvas>`.

[Full list of Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

:::tip
If properties you are looking for is using _document size_, _type_ , _browsers environment_, _browser events_ , _forms_ , _Network requests_, do not search it in core language features. The information you are looking for is most likely in Web APIs.
:::

## Structure of the MDN reference

::: warning
**KITCHEN SINK OF DOCS**

This page is a single table of documents of mdn javascript documentation.
:::

::: tip
You better read all this page couple of times! By this way you'll know which search result to choose while searching in documents.
:::

The MDN JavaScript reference has **7 chapters**

### Standard built-in objects

_Global Object**s**_

This chapter documents all of JavaScript's standard, built-in objects, including their methods and properties.

The term "global objects" (or standard built-in objects) here is not to be confused with **the global object**. Here, "global objects" refer to **objects in the global scope**.

The **global object** itself can be accessed using the **this** operator in the global scope. In fact, the global scope **consists of** the properties of the global object, including inherited properties, if any.

Other objects in the global scope are either [created by the user script](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#creating_new_objects) or provided by the host application. The host objects available in browser contexts are documented in the [API reference](https://developer.mozilla.org/en-US/docs/Web/API).

- [Value properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#value_properties)
  
  return a simple value. They have no properties or methods.

  `Infinity`  `NaN`  `undefined`  `globalThis`

- [Function properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#function_properties)
  
  These global functions which are called globally, rather than on an object—directly return their results to the caller.

  `eval()`  `isFinite()`   `isNaN()`  `parseFloat()`  `parseInt()`   `encodeURI()`   `encodeURIComponent()`   `decodeURI()` `decodeURIComponent()`

- [Fundamental objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#fundamental_objects)
  
  These are the fundamental, basic objects upon which all other objects are based. This includes general objects, booleans, functions, and symbols.

  `Object` `Function`  `Boolean`  `Symbol`

- [Error objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#error_objects)
  
  Error objects are a special type of fundamental object. They include the basic Error type, as well as several specialized error types.

 `Error`  `AggregateError` `EvalError`  `RangeError` `ReferenceError`  `SyntaxError` `TypeError` `URIError`

- [Numbers and dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#numbers_and_dates)
  
  These are the base objects representing numbers, dates, and mathematical calculations.
  
  `Number`  `BigInt`  `Math`  `Date`

- [Text processing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#text_processing)
  
  These objects represent strings and support manipulating them.

  `String`  `RegExp`

- [Indexed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#indexed_collections)
  These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.
  
  `Array`   `Int8Array`  `Uint8Array`  `Uint8ClampedArray`
  `Int16Array`   `Uint16Array`   `Int32Array`  `Uint32Array`
  `Float32Array`  `Float64Array`  `BigInt64Array`  `BigUint64Array`

- [Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#keyed_collections)
  These objects represent collections which use keys. The iterable collections (Map and Set) contain elements which are easily iterated in the order of insertion.
  
  `Map`  `Set`  `WeakMap`  `WeakSet`

- [Structured data](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#structured_data)
  These objects represent and interact with structured data buffers and data coded using JavaScript Object Notation (JSON).
  
  `ArrayBuffer`  `SharedArrayBuffer`  `Atomics`  `DataView`   `JSON`
  
- [Control abstraction objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#control_abstraction_objects)
  Control abstractions can help to structure code, especially async code (without using deeply nested callbacks, for example).

  `Promise`  `Generator`  `GeneratorFunction`  `AsyncFunction`  `AsyncGenerator`  `AsyncGeneratorFunction`

- [Reflection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#reflection)
  
  `Reflect`  `Proxy`

- [Internationalization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#internationalization)

  Additions to the ECMAScript core for language-sensitive functionalities.

  `Intl`  `Intl.Collator`  `Intl.DateTimeFormat`  `Intl.istFormat`  `Intl.NumberFormat`  `Intl.PluralRules`  `Intl.elativeTimeFormat`  `Intl.Locale`

- [WebAssembly](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#webassembly)
  
  `WebAssembly`  `WebAssembly.Module`  `WebAssembly.Instance`  `WebAssembly.Memory`  `WebAssembly.Table`  `WebAssembly.CompileError`  `WebAssembly.LinkError`  `WebAssembly.RuntimeError`

### Statements and declarations

JavaScript applications consist of statements with an appropriate syntax. A single statement may span multiple lines. Multiple statements may occur on a single line if each statement is separated by a semicolon. This isn't a keyword, but a group of keywords.

<CodePen
user="kaanna"
slug-hash="KKRMPVb"
editable="true"
preview="false"
title="Multiple statements in single line"
:default-tab="['js']"
:theme="$isDarkMode? 'dark': 'light'"
/>

- [Control flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#control_flow)

  `Block` `break`  `continue`  `Empty` `if...else`  `switch`   `throw` `try...catch`
- [Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#declarations)

  `var` `let` `const`

- [Functions and classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#functions_and_classes)

  `function` `function*`
- [Iterations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#iterations)

  `do...while` `for` `for...in` `for...of` `for await...of` `while`

- [Others](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#others)

  `debugger` `export` `import` `label`

### Expressions and operators

This chapter documents all the JavaScript language operators, expressions and keywords.

- [Primary expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#primary_expressions)
  - Basic keywords and general expressions in JavaScript
- [Left-hand-side expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#left-hand-side_expressions)
  - Left values are the destination of an assignment.
- [Increment and decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#increment_and_decrement)
  - Postfix/prefix increment and postfix/prefix decrement operators.
- [Unary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#unary_operators)
  - A unary operation is an operation with only one operand.
- [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
  - Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.
- [Relational operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators)
  - A comparison operator compares its operands and returns a boolean value based on whether the comparison is true.
- [Equality operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators)
  - The result of evaluating an equality operator is always of type boolean based on whether the comparison is true.
- [Bitwise shift operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators)
  - Operations to shift all bits of the operand.
- [Binary bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_bitwise_operators)
  - Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.
- [Binary logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators)
  - Logical operators are typically used with boolean (logical) values, and when they are, they return a boolean value.
- [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#conditional_ternary_operator)
  - `(condition ? ifTrue : ifFalse)`
    The conditional operator returns one of two values based on the logical value of the condition.
- [Optional Chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#optional_chaining_operator)
  - `?.`    The optional chaining operator returns undefined instead of causing an error if a reference is nullish (null or undefined).
- [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)
  - An assignment operator assigns a value to its left operand based on the value of its right operand.
- [Comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#comma_operator)
  - `,`    The comma operator allows multiple expressions to be evaluated in a single statement and returns the result of the last expression.

### Functions (Verbs)

Generally speaking, a function is a "subprogram" that can be _called_ by code
external (or internal in the case of recursion) to the function. Like the program
itself, a function is composed of a sequence of statements called the _function
body_. Values can be _passed_ to a function, and the function
will _return_ a value.

In JavaScript, functions are first-class objects, because they can have properties and
methods just like any other object. What distinguishes them from other objects is that
functions can be called. In brief, they are
[`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
objects.

- [Description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#description)
- [Defining functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#defining_functions)
- [Function parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#function_parameters)
  - Default parameters
  - Rest parameters
- [The `arguments` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#the_arguments_object)
  - You can refer to a function's arguments within the function by using the
`arguments` object.
- [Defining method functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#defining_method_functions)
  - Getter and setter functions
  - Method definition syntax
- [Constructor vs. declaration vs. expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#constructor_vs._declaration_vs._expression)

### Classes

 Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

- [Defining classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#defining_classes)
  - Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.
- [Class body and method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_body_and_method_definitions)
  - The body of a class is the part that is in curly brackets `{}`. This is where you define class members, such as methods or constructor.
- [Sub classing with `extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#sub_classing_with_extends)
  - The `extends` keyword is used in _class declarations_ or _class expressions_ to create a class as a child of another class.
- [Species](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#sub_classing_with_extends)
  - You might want to return _Array_ objects in your derived array class `MyArray`. The species pattern lets you override default constructors.
- [Super class calls with `super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#super_class_calls_with_super)
- [Mix-ins](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#mix-ins)
  - Abstract subclasses or _mix-ins_ are templates for classes. An ECMAScript class can only have a single superclass, so multiple inheritance from tooling classes, for example, is not possible. The functionality must be provided by the superclass.
- [Re-running a class definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#re-running_a_class_definition)
  - A class can't be redefined. Attempting to do so produces a `SyntaxError`.

### Errors

In JavaScript error reference you'll find a list of errors which are thrown by JavaScript.

- [List of errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors#list_of_errors)

### More reference pages

- [Deprecated and obsolete features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
- [Lexical grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

::: tip
Learn to use [MDN javascript Manual](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
)
:::

1. [Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
1. [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
1. [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).
1. [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
1. [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
1. [Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
1. [More reference pages](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/About#more_reference_pages)
