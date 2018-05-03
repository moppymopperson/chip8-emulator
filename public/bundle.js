(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const Renderer = require('./renderer.js')
const canvas = document.getElementById('game')
const renderer = new Renderer(canvas)

console.log('testing')

},{"./renderer.js":2}],2:[function(require,module,exports){
class Renderer {
  constructor(canvas) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.context.fillStyle = '#FF0000'
    this.context.fillRect(0, 0, canvas.width, canvas.height)
  }
}

module.exports = Renderer

},{}]},{},[1]);
