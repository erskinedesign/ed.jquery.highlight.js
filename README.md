ed.jquery.highlight.js
======================

A simple jQuery Plugin that implements the yellow fade pattern, wrapped as a AMD module for use with [Require.js](http://requirejs.org/)

_Yes jQuery UI has a `highlight` effect is built into, but that's a whole load of overhead we don't need for such a simple effect._

## Usage

Simple: 

    $('a').highlight();

Passing settings:

    var opts = {
        backgroundColor: 'green',   // valid CSS colour value
        opacity: 0.5,               // inital opacity applied to generated element
        duration: 1300,             // time in miliseconds to fade out over
            padding: {
                v: 10,              // vertical padding to apply to generated element size (px)
                h: 10               // horizontal padding to apply to generated element size (px)
            }
    }
    $('a').highlight();

Or set custom defaults via `$.fn.highlight.defaults`.

## Bugs, fixes, enhancements...

...are welcome. Please open an issue/pull request

## TODO

* Tests

## Licence

The MIT License (MIT)

Copyright (c) 2012 Erskine Design

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.