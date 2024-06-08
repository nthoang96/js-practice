JSDoc is a documentation generator for JavaScript, and it uses a specific syntax to create documentation comments within your code. Here’s a comprehensive list of JSDoc tags and their usage:

### General Tags

1. **@abstract** - Indicates that a symbol is abstract.
2. **@access** - Describes the access level of a symbol (public, protected, private).
3. **@alias** - Provides an alias for the documented item.
4. **@async** - Indicates that a function is asynchronous.
5. **@augments**/**@extends** - Indicates that a symbol extends or augments another symbol.
6. **@author** - Documents the author of the code.
7. **@borrows** - Indicates that a symbol is borrowed from another object.
8. **@callback** - Documents a callback type.
9. **@class**/**@constructor** - Documents a class constructor.
10. **@classdesc** - Describes a class.
11. **@constant**/**@const** - Documents a constant value.
12. **@constructs** - Indicates that a function constructs an instance of a class.
13. **@copyright** - Documents a copyright statement.
14. **@default**/**@defaultvalue** - Documents the default value.
15. **@deprecated** - Indicates that a symbol is deprecated.
16. **@desc**/**@description** - Describes a symbol.
17. **@enum** - Documents an enumerated type.
18. **@event** - Documents an event.
19. **@example** - Provides an example of how to use a symbol.
20. **@exports** - Documents that a module exports a value.
21. **@external**/**@host** - Documents an external object or namespace.
22. **@file**/**@fileoverview**/**@overview** - Documents a file.
23. **@fires**/**@emits** - Documents events fired by a symbol.
24. **@function**/**@func**/**@method** - Documents a function.
25. **@generator** - Indicates that a function is a generator function.
26. **@global** - Indicates that a symbol is global.
27. **@hideconstructor** - Indicates that the constructor should not appear in the documentation.
28. **@ignore** - Ignores a symbol in the documentation.
29. **@implements** - Documents that a symbol implements an interface.
30. **@inheritdoc** - Indicates that a symbol inherits its documentation from its parent.
31. **@inner** - Documents an inner member.
32. **@instance** - Documents an instance member.
33. **@interface** - Documents an interface.
34. **@kind** - Specifies the kind of symbol.
35. **@lends** - Documents that all members of a symbol are lent to another symbol.
36. **@license** - Documents the license under which the code is available.
37. **@listens** - Documents that a symbol listens to an event.
38. **@member**/**@var** - Documents a member or variable.
39. **@memberof** - Documents that a symbol belongs to a parent.
40. **@mixes** - Documents that a symbol mixes another symbol.
41. **@mixin** - Documents a mixin object.
42. **@module** - Documents a module.
43. **@name** - Specifies the name of a symbol.
44. **@namespace** - Documents a namespace.
45. **@override** - Indicates that a symbol overrides a parent symbol.
46. **@package** - Documents a package.
47. **@param**/**@arg**/**@argument** - Documents a function parameter.
48. **@private** - Indicates that a symbol is private.
49. **@property**/**@prop** - Documents a property.
50. **@protected** - Indicates that a symbol is protected.
51. **@public** - Indicates that a symbol is public.
52. **@readonly** - Indicates that a symbol is read-only.
53. **@requires** - Documents dependencies.
54. **@returns**/**@return** - Documents the return value of a function.
55. **@see** - Documents a reference to another symbol.
56. **@since** - Documents the version when a symbol was added.
57. **@static** - Indicates that a symbol is static.
58. **@summary** - Provides a short summary of a symbol.
59. **@template** - Documents generic type parameters.
60. **@this** - Specifies the type of `this`.
61. **@throws**/**@exception** - Documents an error thrown by a function.
62. **@todo** - Documents a TODO item.
63. **@tutorial** - Documents a tutorial.
64. **@type** - Documents the type of a symbol.
65. **@typedef** - Documents a custom type definition.
66. **@variation** - Documents a variation of a symbol.
67. **@version** - Documents the version of the code.

### Examples

#### Function with Parameters and Return Value

```javascript
/**
 * Adds two numbers.
 * @function
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
    return a + b;
}
```

#### Class with Constructor and Method

```javascript
/**
 * Represents a point in 2D space.
 * @class
 * @classdesc This class represents a point in 2D space.
 */
class Point {
    /**
     * Creates a point.
     * @constructs Point
     * @param {number} x - The x-coordinate.
     * @param {number} y - The y-coordinate.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Calculates the distance from this point to another point.
     * @param {Point} other - The other point.
     * @returns {number} The distance to the other point.
     */
    distanceTo(other) {
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    }
}
```

#### Enum Example

```javascript
/**
 * Enum for tri-state values.
 * @readonly
 * @enum {number}
 */
const TriState = {
    /** The true value */
    TRUE: 1,
    /** The false value */
    FALSE: -1,
    /** The unknown value */
    UNKNOWN: 0
};
```
