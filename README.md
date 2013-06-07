ed.jquery.highlight
===================

A simple jQuery Plugin that implements the yellow fade pattern, wrapped as a AMD module for use with Require.js

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

## TODO

* Tests
