(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "+P3e":
/*!*******************************************************************!*\
  !*** ./animation-lib/bouncing-exits/bounce-out-left.animation.ts ***!
  \*******************************************************************/
/*! exports provided: bounceOutLeftAnimation, bounceOutLeftOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutLeftAnimation", function() { return bounceOutLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutLeftOnLeaveAnimation", function() { return bounceOutLeftOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const bounceOutLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(20px, 0, 0)', easing: 'ease', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function bounceOutLeftAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceOutLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceOutLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}
function bounceOutLeftOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceOutLeftOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceOutLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}


/***/ }),

/***/ "0Y9N":
/*!*****************************************************!*\
  !*** ./animation-lib/specials/roll-in.animation.ts ***!
  \*****************************************************/
/*! exports provided: rollInAnimation, rollInOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollInAnimation", function() { return rollInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollInOnEnterAnimation", function() { return rollInOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const rollIn = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            visibility: 'visible',
            opacity: 0,
            transform: 'translate3d({{translate}}, 0, 0) rotate3d(0, 0, 1, {{degrees}}deg)',
            easing: 'ease',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function rollInAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rollIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rollIn(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || -120,
                translate: (options && options.translate) || '-100%'
            }
        })
    ]);
}
function rollInOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rollInOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rollIn(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || -120,
                translate: (options && options.translate) || '-100%'
            }
        })
    ]);
}


/***/ }),

/***/ "11jG":
/*!*********************************************************************!*\
  !*** ./animation-lib/sliding-entrances/slide-in-right.animation.ts ***!
  \*********************************************************************/
/*! exports provided: slideInRightAnimation, slideInRightOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInRightAnimation", function() { return slideInRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInRightOnEnterAnimation", function() { return slideInRightOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const slideInRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function slideInRightAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideInRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideInRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function slideInRightOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideInRightOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideInRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "2mxj":
/*!*******************************************************************!*\
  !*** ./animation-lib/bouncing-exits/bounce-out-down.animation.ts ***!
  \*******************************************************************/
/*! exports provided: bounceOutDownAnimation, bounceOutDownOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutDownAnimation", function() { return bounceOutDownAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutDownOnLeaveAnimation", function() { return bounceOutDownOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const bounceOutDown = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 10px, 0)', easing: 'ease', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -20px, 0)', easing: 'ease', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -20px, 0)', easing: 'ease', offset: 0.45 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, {{translate}}, 0)', easing: 'ease', offset: 1 })
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0.45 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, easing: 'ease', offset: 1 })
    ]))
]));
const DEFAULT_DURATION = 1000;
function bounceOutDownAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceOutDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceOutDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}
function bounceOutDownOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceOutDownOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceOutDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}


/***/ }),

/***/ "3+wP":
/*!*****************************************************************!*\
  !*** ./animation-lib/attention-seekers/head-shake.animation.ts ***!
  \*****************************************************************/
/*! exports provided: headShakeAnimation, headShakeOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headShakeAnimation", function() { return headShakeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headShakeOnEnterAnimation", function() { return headShakeOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const headShake = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], transform: 'translateX(0)', easing: 'ease-in-out', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-6px) rotateY(-9deg)', easing: 'ease-in-out', offset: 0.065 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(5px) rotateY(7deg)', easing: 'ease-in-out', offset: 0.185 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-3px) rotateY(-5deg)', easing: 'ease-in-out', offset: 0.315 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(2px) rotateY(3deg)', easing: 'ease-in-out', offset: 0.435 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', easing: 'ease-in-out', offset: 0.5 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function headShakeAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'headShake', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`0 ${(options && options.direction) || '<=>'} 1`, [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(headShake(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function headShakeOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'headShakeOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(headShake(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "38er":
/*!********************************************************************!*\
  !*** ./animation-lib/bouncing-entrances/bounce-in-up.animation.ts ***!
  \********************************************************************/
/*! exports provided: bounceInUpAnimation, bounceInUpOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInUpAnimation", function() { return bounceInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInUpOnEnterAnimation", function() { return bounceInUpOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const bounceInUp = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, {{translate}}, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -20px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 10px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -5px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -5px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
    ]))
]));
const DEFAULT_DURATION = 1000;
function bounceInUpAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceInUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '3000px'
            }
        })
    ]);
}
function bounceInUpOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceInUpOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceInUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '3000px'
            }
        })
    ]);
}


/***/ }),

/***/ "3wzD":
/*!*****************************************************************!*\
  !*** ./animation-lib/sliding-exits/slide-out-down.animation.ts ***!
  \*****************************************************************/
/*! exports provided: slideOutDownAnimation, slideOutDownOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutDownAnimation", function() { return slideOutDownAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutDownOnLeaveAnimation", function() { return slideOutDownOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const slideOutDown = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, {{translate}}, 0)', visibility: 'hidden', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function slideOutDownAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideOutDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideOutDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function slideOutDownOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideOutDownOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideOutDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "4c8h":
/*!********************************************************!*\
  !*** ./animation-lib/flippers/flip-out-y.animation.ts ***!
  \********************************************************/
/*! exports provided: flipOutYAnimation, flipOutYOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipOutYAnimation", function() { return flipOutYAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipOutYOnLeaveAnimation", function() { return flipOutYOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const flipOutY = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px)', opacity: 1, easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1, easing: 'ease', offset: 0.3 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, {{degrees}}deg)', opacity: 0, easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 750;
function flipOutYAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'flipOutY', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'backface-visibility': 'visible' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(flipOutY(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 90
            }
        })
    ]);
}
function flipOutYOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'flipOutYOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'backface-visibility': 'visible' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(flipOutY(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 90
            }
        })
    ]);
}


/***/ }),

/***/ "5TvS":
/*!*************************************************************!*\
  !*** ./animation-lib/attention-seekers/wobble.animation.ts ***!
  \*************************************************************/
/*! exports provided: wobbleAnimation, wobbleOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wobbleAnimation", function() { return wobbleAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wobbleOnEnterAnimation", function() { return wobbleOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const wobble = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', easing: 'ease', offset: 0.15 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.3 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.45 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', easing: 'ease', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', easing: 'ease', offset: 0.75 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function wobbleAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'wobble', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`0 ${(options && options.direction) || '<=>'} 1`, [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(wobble(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function wobbleOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'wobbleOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(wobble(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "5X+j":
/*!**********************************************************************!*\
  !*** ./animation-lib/bouncing-entrances/bounce-in-down.animation.ts ***!
  \**********************************************************************/
/*! exports provided: bounceInDownAnimation, bounceInDownOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInDownAnimation", function() { return bounceInDownAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInDownOnEnterAnimation", function() { return bounceInDownOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const bounceInDown = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -{{translate}}, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 25px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -10px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 5px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
    ]))
]));
const DEFAULT_DURATION = 1000;
function bounceInDownAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceInDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceInDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '3000px'
            }
        })
    ]);
}
function bounceInDownOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceInDownOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceInDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '3000px'
            }
        })
    ]);
}


/***/ }),

/***/ "5Ymq":
/*!**************************************************!*\
  !*** ./animation-lib/attention-seekers/index.ts ***!
  \**************************************************/
/*! exports provided: bounceAnimation, bounceOnEnterAnimation, flashAnimation, flashOnEnterAnimation, headShakeAnimation, headShakeOnEnterAnimation, heartBeatAnimation, heartBeatOnEnterAnimation, jelloAnimation, jelloOnEnterAnimation, pulseAnimation, pulseOnEnterAnimation, rubberBandAnimation, rubberBandOnEnterAnimation, shakeAnimation, shakeOnEnterAnimation, swingAnimation, swingOnEnterAnimation, tadaAnimation, tadaOnEnterAnimation, wobbleAnimation, wobbleOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bounce_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bounce.animation */ "qHNY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceAnimation", function() { return _bounce_animation__WEBPACK_IMPORTED_MODULE_0__["bounceAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOnEnterAnimation", function() { return _bounce_animation__WEBPACK_IMPORTED_MODULE_0__["bounceOnEnterAnimation"]; });

/* harmony import */ var _flash_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flash.animation */ "ViJ0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flashAnimation", function() { return _flash_animation__WEBPACK_IMPORTED_MODULE_1__["flashAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flashOnEnterAnimation", function() { return _flash_animation__WEBPACK_IMPORTED_MODULE_1__["flashOnEnterAnimation"]; });

/* harmony import */ var _head_shake_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./head-shake.animation */ "3+wP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "headShakeAnimation", function() { return _head_shake_animation__WEBPACK_IMPORTED_MODULE_2__["headShakeAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "headShakeOnEnterAnimation", function() { return _head_shake_animation__WEBPACK_IMPORTED_MODULE_2__["headShakeOnEnterAnimation"]; });

/* harmony import */ var _heart_beat_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heart-beat.animation */ "jRSS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heartBeatAnimation", function() { return _heart_beat_animation__WEBPACK_IMPORTED_MODULE_3__["heartBeatAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heartBeatOnEnterAnimation", function() { return _heart_beat_animation__WEBPACK_IMPORTED_MODULE_3__["heartBeatOnEnterAnimation"]; });

/* harmony import */ var _jello_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jello.animation */ "X/Mp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jelloAnimation", function() { return _jello_animation__WEBPACK_IMPORTED_MODULE_4__["jelloAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jelloOnEnterAnimation", function() { return _jello_animation__WEBPACK_IMPORTED_MODULE_4__["jelloOnEnterAnimation"]; });

/* harmony import */ var _pulse_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pulse.animation */ "jxK0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pulseAnimation", function() { return _pulse_animation__WEBPACK_IMPORTED_MODULE_5__["pulseAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pulseOnEnterAnimation", function() { return _pulse_animation__WEBPACK_IMPORTED_MODULE_5__["pulseOnEnterAnimation"]; });

/* harmony import */ var _rubber_band_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rubber-band.animation */ "aiOw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rubberBandAnimation", function() { return _rubber_band_animation__WEBPACK_IMPORTED_MODULE_6__["rubberBandAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rubberBandOnEnterAnimation", function() { return _rubber_band_animation__WEBPACK_IMPORTED_MODULE_6__["rubberBandOnEnterAnimation"]; });

/* harmony import */ var _shake_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shake.animation */ "peKV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shakeAnimation", function() { return _shake_animation__WEBPACK_IMPORTED_MODULE_7__["shakeAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shakeOnEnterAnimation", function() { return _shake_animation__WEBPACK_IMPORTED_MODULE_7__["shakeOnEnterAnimation"]; });

/* harmony import */ var _swing_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./swing.animation */ "DADw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swingAnimation", function() { return _swing_animation__WEBPACK_IMPORTED_MODULE_8__["swingAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swingOnEnterAnimation", function() { return _swing_animation__WEBPACK_IMPORTED_MODULE_8__["swingOnEnterAnimation"]; });

/* harmony import */ var _tada_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tada.animation */ "pHdD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tadaAnimation", function() { return _tada_animation__WEBPACK_IMPORTED_MODULE_9__["tadaAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tadaOnEnterAnimation", function() { return _tada_animation__WEBPACK_IMPORTED_MODULE_9__["tadaOnEnterAnimation"]; });

/* harmony import */ var _wobble_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wobble.animation */ "5TvS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wobbleAnimation", function() { return _wobble_animation__WEBPACK_IMPORTED_MODULE_10__["wobbleAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wobbleOnEnterAnimation", function() { return _wobble_animation__WEBPACK_IMPORTED_MODULE_10__["wobbleOnEnterAnimation"]; });














/***/ }),

/***/ "6dmF":
/*!***************************************************************!*\
  !*** ./animation-lib/sliding-exits/slide-out-up.animation.ts ***!
  \***************************************************************/
/*! exports provided: slideOutUpAnimation, slideOutUpOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutUpAnimation", function() { return slideOutUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutUpOnLeaveAnimation", function() { return slideOutUpOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const slideOutUp = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -{{translate}}, 0)', visibility: 'hidden', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function slideOutUpAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideOutUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideOutUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function slideOutUpOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideOutUpOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideOutUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "6ii4":
/*!*****************************************************************!*\
  !*** ./animation-lib/bouncing-exits/bounce-out-up.animation.ts ***!
  \*****************************************************************/
/*! exports provided: bounceOutUpAnimation, bounceOutUpOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutUpAnimation", function() { return bounceOutUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutUpOnLeaveAnimation", function() { return bounceOutUpOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const bounceOutUp = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -10px, 0)', easing: 'ease', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 20px, 0)', easing: 'ease', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 20px, 0)', easing: 'ease', offset: 0.45 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 1 })
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0.45 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, easing: 'ease', offset: 1 })
        ]))
    ])
]));
const DEFAULT_DURATION = 1000;
function bounceOutUpAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceOutUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceOutUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}
function bounceOutUpOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceOutUpOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceOutUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "R89x");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [{
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: [
            { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] }
        ]
    }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "AN6n":
/*!***********************************************!*\
  !*** ./animation-lib/bouncing-exits/index.ts ***!
  \***********************************************/
/*! exports provided: bounceOutDownAnimation, bounceOutDownOnLeaveAnimation, bounceOutLeftAnimation, bounceOutLeftOnLeaveAnimation, bounceOutRightAnimation, bounceOutRightOnLeaveAnimation, bounceOutUpAnimation, bounceOutUpOnLeaveAnimation, bounceOutAnimation, bounceOutOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bounce_out_down_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bounce-out-down.animation */ "2mxj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutDownAnimation", function() { return _bounce_out_down_animation__WEBPACK_IMPORTED_MODULE_0__["bounceOutDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutDownOnLeaveAnimation", function() { return _bounce_out_down_animation__WEBPACK_IMPORTED_MODULE_0__["bounceOutDownOnLeaveAnimation"]; });

/* harmony import */ var _bounce_out_left_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounce-out-left.animation */ "+P3e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutLeftAnimation", function() { return _bounce_out_left_animation__WEBPACK_IMPORTED_MODULE_1__["bounceOutLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutLeftOnLeaveAnimation", function() { return _bounce_out_left_animation__WEBPACK_IMPORTED_MODULE_1__["bounceOutLeftOnLeaveAnimation"]; });

/* harmony import */ var _bounce_out_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bounce-out-right.animation */ "PFRl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutRightAnimation", function() { return _bounce_out_right_animation__WEBPACK_IMPORTED_MODULE_2__["bounceOutRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutRightOnLeaveAnimation", function() { return _bounce_out_right_animation__WEBPACK_IMPORTED_MODULE_2__["bounceOutRightOnLeaveAnimation"]; });

/* harmony import */ var _bounce_out_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bounce-out-up.animation */ "6ii4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutUpAnimation", function() { return _bounce_out_up_animation__WEBPACK_IMPORTED_MODULE_3__["bounceOutUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutUpOnLeaveAnimation", function() { return _bounce_out_up_animation__WEBPACK_IMPORTED_MODULE_3__["bounceOutUpOnLeaveAnimation"]; });

/* harmony import */ var _bounce_out_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bounce-out.animation */ "MNZ0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutAnimation", function() { return _bounce_out_animation__WEBPACK_IMPORTED_MODULE_4__["bounceOutAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutOnLeaveAnimation", function() { return _bounce_out_animation__WEBPACK_IMPORTED_MODULE_4__["bounceOutOnLeaveAnimation"]; });








/***/ }),

/***/ "AoYK":
/*!*****************************************************************!*\
  !*** ./animation-lib/zooming-entrances/zoom-in-up.animation.ts ***!
  \*****************************************************************/
/*! exports provided: zoomInUpAnimation, zoomInUpOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInUpAnimation", function() { return zoomInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInUpOnEnterAnimation", function() { return zoomInUpOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const zoomInUp = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            visibility: 'visible',
            opacity: 0,
            transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
            easing: 'ease',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0.6
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function zoomInUpAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomInUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function zoomInUpOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomInUpOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomInUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "C07I":
/*!******************************************************************!*\
  !*** ./animation-lib/fading-entrances/fade-in-left.animation.ts ***!
  \******************************************************************/
/*! exports provided: fadeInLeftAnimation, fadeInLeftOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftAnimation", function() { return fadeInLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftOnEnterAnimation", function() { return fadeInLeftOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeInLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeInLeftAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function fadeInLeftOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInLeftOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "CTaR":
/*!***************************************************************!*\
  !*** ./animation-lib/fading-exits/fade-out-left.animation.ts ***!
  \***************************************************************/
/*! exports provided: fadeOutLeftAnimation, fadeOutLeftOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftAnimation", function() { return fadeOutLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftOnLeaveAnimation", function() { return fadeOutLeftOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeOutLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeOutLeftAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function fadeOutLeftOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutLeftOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "DADw":
/*!************************************************************!*\
  !*** ./animation-lib/attention-seekers/swing.animation.ts ***!
  \************************************************************/
/*! exports provided: swingAnimation, swingOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swingAnimation", function() { return swingAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swingOnEnterAnimation", function() { return swingOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const swing = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'top center', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 15deg)', easing: 'ease', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, -10deg)', easing: 'ease', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 5deg)', easing: 'ease', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, -5deg)', easing: 'ease', offset: 0.8 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function swingAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'swing', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`0 ${(options && options.direction) || '<=>'} 1`, [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(swing(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function swingOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'swingOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'top center' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(swing(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "DK9Q":
/*!***********************************************************************!*\
  !*** ./animation-lib/rotating-exits/rotate-out-up-right.animation.ts ***!
  \***********************************************************************/
/*! exports provided: rotateOutUpRightAnimation, rotateOutUpRightOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpRightAnimation", function() { return rotateOutUpRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpRightOnLeaveAnimation", function() { return rotateOutUpRightOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const rotateOutUpRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'rotate3d(0, 0, 1, {{degrees}}deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function rotateOutUpRightAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateOutUpRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'right bottom' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateOutUpRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 90
            }
        })
    ]);
}
function rotateOutUpRightOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateOutUpRightOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'right bottom' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateOutUpRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 90
            }
        })
    ]);
}


/***/ }),

/***/ "DLkU":
/*!***********************************************************!*\
  !*** ./animation-lib/zooming-exits/zoom-out.animation.ts ***!
  \***********************************************************/
/*! exports provided: zoomOutAnimation, zoomOutOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutAnimation", function() { return zoomOutAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutOnLeaveAnimation", function() { return zoomOutOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const zoomOut = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, easing: 'ease', offset: 1 })
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0.5 })
    ]))
]));
const DEFAULT_DURATION = 1000;
function zoomOutAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomOut(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function zoomOutOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomOutOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomOut(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "Dmyy":
/*!********************************!*\
  !*** ./animation-lib/index.ts ***!
  \********************************/
/*! exports provided: bounceAnimation, bounceOnEnterAnimation, flashAnimation, flashOnEnterAnimation, headShakeAnimation, headShakeOnEnterAnimation, heartBeatAnimation, heartBeatOnEnterAnimation, jelloAnimation, jelloOnEnterAnimation, pulseAnimation, pulseOnEnterAnimation, rubberBandAnimation, rubberBandOnEnterAnimation, shakeAnimation, shakeOnEnterAnimation, swingAnimation, swingOnEnterAnimation, tadaAnimation, tadaOnEnterAnimation, wobbleAnimation, wobbleOnEnterAnimation, bounceInAnimation, bounceInDownAnimation, bounceInDownOnEnterAnimation, bounceInLeftAnimation, bounceInLeftOnEnterAnimation, bounceInOnEnterAnimation, bounceInRightAnimation, bounceInRightOnEnterAnimation, bounceInUpAnimation, bounceInUpOnEnterAnimation, bounceOutAnimation, bounceOutDownAnimation, bounceOutDownOnLeaveAnimation, bounceOutLeftAnimation, bounceOutLeftOnLeaveAnimation, bounceOutOnLeaveAnimation, bounceOutRightAnimation, bounceOutRightOnLeaveAnimation, bounceOutUpAnimation, bounceOutUpOnLeaveAnimation, fadeInAnimation, fadeInDownAnimation, fadeInDownBigAnimation, fadeInDownBigOnEnterAnimation, fadeInDownOnEnterAnimation, fadeInLeftAnimation, fadeInLeftBigAnimation, fadeInLeftBigOnEnterAnimation, fadeInLeftOnEnterAnimation, fadeInOnEnterAnimation, fadeInRightAnimation, fadeInRightBigAnimation, fadeInRightBigOnEnterAnimation, fadeInRightOnEnterAnimation, fadeInUpAnimation, fadeInUpBigAnimation, fadeInUpBigOnEnterAnimation, fadeInUpOnEnterAnimation, fadeOutAnimation, fadeOutDownAnimation, fadeOutDownBigAnimation, fadeOutDownBigOnLeaveAnimation, fadeOutDownOnLeaveAnimation, fadeOutLeftAnimation, fadeOutLeftBigAnimation, fadeOutLeftBigOnLeaveAnimation, fadeOutLeftOnLeaveAnimation, fadeOutOnLeaveAnimation, fadeOutRightAnimation, fadeOutRightBigAnimation, fadeOutRightBigOnLeaveAnimation, fadeOutRightOnLeaveAnimation, fadeOutUpAnimation, fadeOutUpBigAnimation, fadeOutUpBigOnLeaveAnimation, fadeOutUpOnLeaveAnimation, flipAnimation, flipInXAnimation, flipInXOnEnterAnimation, flipInYAnimation, flipInYOnEnterAnimation, flipOnEnterAnimation, flipOutXAnimation, flipOutXOnLeaveAnimation, flipOutYAnimation, flipOutYOnLeaveAnimation, lightSpeedInAnimation, lightSpeedInOnEnterAnimation, lightSpeedOutAnimation, lightSpeedOutOnLeaveAnimation, rotateInAnimation, rotateInDownLeftAnimation, rotateInDownLeftOnEnterAnimation, rotateInDownRightAnimation, rotateInDownRightOnEnterAnimation, rotateInOnEnterAnimation, rotateInUpLeftAnimation, rotateInUpLeftOnEnterAnimation, rotateInUpRightAnimation, rotateInUpRightOnEnterAnimation, rotateOutAnimation, rotateOutDownLeftAnimation, rotateOutDownLeftOnLeaveAnimation, rotateOutDownRightAnimation, rotateOutDownRightOnLeaveAnimation, rotateOutOnLeaveAnimation, rotateOutUpLeftAnimation, rotateOutUpLeftOnLeaveAnimation, rotateOutUpRightAnimation, rotateOutUpRightOnLeaveAnimation, slideInDownAnimation, slideInDownOnEnterAnimation, slideInLeftAnimation, slideInLeftOnEnterAnimation, slideInRightAnimation, slideInRightOnEnterAnimation, slideInUpAnimation, slideInUpOnEnterAnimation, slideOutDownAnimation, slideOutDownOnLeaveAnimation, slideOutLeftAnimation, slideOutLeftOnLeaveAnimation, slideOutRightAnimation, slideOutRightOnLeaveAnimation, slideOutUpAnimation, slideOutUpOnLeaveAnimation, zoomInAnimation, zoomInDownAnimation, zoomInDownOnEnterAnimation, zoomInLeftAnimation, zoomInLeftOnEnterAnimation, zoomInOnEnterAnimation, zoomInRightAnimation, zoomInRightOnEnterAnimation, zoomInUpAnimation, zoomInUpOnEnterAnimation, zoomOutAnimation, zoomOutDownAnimation, zoomOutDownOnLeaveAnimation, zoomOutLeftAnimation, zoomOutLeftOnLeaveAnimation, zoomOutOnLeaveAnimation, zoomOutRightAnimation, zoomOutRightOnLeaveAnimation, zoomOutUpAnimation, zoomOutUpOnLeaveAnimation, hingeAnimation, hingeOnLeaveAnimation, jackInTheBoxAnimation, jackInTheBoxOnEnterAnimation, rollInAnimation, rollInOnEnterAnimation, rollOutAnimation, rollOutOnLeaveAnimation, animateChildrenOnLeaveAnimation, collapseAnimation, collapseOnLeaveAnimation, expandOnEnterAnimation, fadeInExpandOnEnterAnimation, fadeOutCollapseOnLeaveAnimation, collapseHorizontallyAnimation, collapseLeftOnLeaveAnimation, expandRightOnEnterAnimation, fadeInExpandRightOnEnterAnimation, fadeOutCollapseLeftOnLeaveAnimation, hueRotateAnimation, rotateAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attention_seekers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attention-seekers */ "5Ymq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["bounceAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOnEnterAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["bounceOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flashAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["flashAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flashOnEnterAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["flashOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "headShakeAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["headShakeAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "headShakeOnEnterAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["headShakeOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heartBeatAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["heartBeatAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heartBeatOnEnterAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["heartBeatOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jelloAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["jelloAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jelloOnEnterAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["jelloOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pulseAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["pulseAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pulseOnEnterAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["pulseOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rubberBandAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["rubberBandAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rubberBandOnEnterAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["rubberBandOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shakeAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["shakeAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shakeOnEnterAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["shakeOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swingAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["swingAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swingOnEnterAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["swingOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tadaAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["tadaAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tadaOnEnterAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["tadaOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wobbleAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["wobbleAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wobbleOnEnterAnimation", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["wobbleOnEnterAnimation"]; });

/* harmony import */ var _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bouncing-entrances */ "UZqx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInAnimation", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInDownAnimation", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInDownOnEnterAnimation", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInDownOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInLeftAnimation", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInLeftOnEnterAnimation", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInLeftOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInOnEnterAnimation", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInRightAnimation", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInRightOnEnterAnimation", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInRightOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInUpAnimation", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInUpOnEnterAnimation", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInUpOnEnterAnimation"]; });

/* harmony import */ var _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bouncing-exits */ "AN6n");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutAnimation", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutDownAnimation", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutDownOnLeaveAnimation", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutDownOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutLeftAnimation", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutLeftOnLeaveAnimation", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutLeftOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutOnLeaveAnimation", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutRightAnimation", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutRightOnLeaveAnimation", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutRightOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutUpAnimation", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutUpOnLeaveAnimation", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutUpOnLeaveAnimation"]; });

/* harmony import */ var _fading_entrances__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fading-entrances */ "zXnb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInDownAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInDownBigAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInDownBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInDownBigOnEnterAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInDownBigOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInDownOnEnterAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInDownOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftBigAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInLeftBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftBigOnEnterAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInLeftBigOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftOnEnterAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInLeftOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInOnEnterAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInRightAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInRightBigAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInRightBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInRightBigOnEnterAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInRightBigOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInRightOnEnterAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInRightOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInUpBigAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInUpBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInUpBigOnEnterAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInUpBigOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInUpOnEnterAnimation", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInUpOnEnterAnimation"]; });

/* harmony import */ var _fading_exits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fading-exits */ "Rrqz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownBigAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutDownBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownBigOnLeaveAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutDownBigOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownOnLeaveAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutDownOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftBigAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutLeftBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftBigOnLeaveAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutLeftBigOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftOnLeaveAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutLeftOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutOnLeaveAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightBigAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutRightBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightBigOnLeaveAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutRightBigOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightOnLeaveAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutRightOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpBigAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutUpBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpBigOnLeaveAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutUpBigOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpOnLeaveAnimation", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutUpOnLeaveAnimation"]; });

/* harmony import */ var _flippers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flippers */ "eAqC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipAnimation", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipInXAnimation", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipInXAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipInXOnEnterAnimation", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipInXOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipInYAnimation", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipInYAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipInYOnEnterAnimation", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipInYOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipOnEnterAnimation", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipOutXAnimation", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipOutXAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipOutXOnLeaveAnimation", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipOutXOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipOutYAnimation", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipOutYAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipOutYOnLeaveAnimation", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipOutYOnLeaveAnimation"]; });

/* harmony import */ var _light_speed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./light-speed */ "vIXp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightSpeedInAnimation", function() { return _light_speed__WEBPACK_IMPORTED_MODULE_6__["lightSpeedInAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightSpeedInOnEnterAnimation", function() { return _light_speed__WEBPACK_IMPORTED_MODULE_6__["lightSpeedInOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightSpeedOutAnimation", function() { return _light_speed__WEBPACK_IMPORTED_MODULE_6__["lightSpeedOutAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightSpeedOutOnLeaveAnimation", function() { return _light_speed__WEBPACK_IMPORTED_MODULE_6__["lightSpeedOutOnLeaveAnimation"]; });

/* harmony import */ var _rotating_entrances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rotating-entrances */ "UdQW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInAnimation", function() { return _rotating_entrances__WEBPACK_IMPORTED_MODULE_7__["rotateInAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInDownLeftAnimation", function() { return _rotating_entrances__WEBPACK_IMPORTED_MODULE_7__["rotateInDownLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInDownLeftOnEnterAnimation", function() { return _rotating_entrances__WEBPACK_IMPORTED_MODULE_7__["rotateInDownLeftOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInDownRightAnimation", function() { return _rotating_entrances__WEBPACK_IMPORTED_MODULE_7__["rotateInDownRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInDownRightOnEnterAnimation", function() { return _rotating_entrances__WEBPACK_IMPORTED_MODULE_7__["rotateInDownRightOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInOnEnterAnimation", function() { return _rotating_entrances__WEBPACK_IMPORTED_MODULE_7__["rotateInOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInUpLeftAnimation", function() { return _rotating_entrances__WEBPACK_IMPORTED_MODULE_7__["rotateInUpLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInUpLeftOnEnterAnimation", function() { return _rotating_entrances__WEBPACK_IMPORTED_MODULE_7__["rotateInUpLeftOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInUpRightAnimation", function() { return _rotating_entrances__WEBPACK_IMPORTED_MODULE_7__["rotateInUpRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInUpRightOnEnterAnimation", function() { return _rotating_entrances__WEBPACK_IMPORTED_MODULE_7__["rotateInUpRightOnEnterAnimation"]; });

/* harmony import */ var _rotating_exits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rotating-exits */ "eTI0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutAnimation", function() { return _rotating_exits__WEBPACK_IMPORTED_MODULE_8__["rotateOutAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutDownLeftAnimation", function() { return _rotating_exits__WEBPACK_IMPORTED_MODULE_8__["rotateOutDownLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutDownLeftOnLeaveAnimation", function() { return _rotating_exits__WEBPACK_IMPORTED_MODULE_8__["rotateOutDownLeftOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutDownRightAnimation", function() { return _rotating_exits__WEBPACK_IMPORTED_MODULE_8__["rotateOutDownRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutDownRightOnLeaveAnimation", function() { return _rotating_exits__WEBPACK_IMPORTED_MODULE_8__["rotateOutDownRightOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutOnLeaveAnimation", function() { return _rotating_exits__WEBPACK_IMPORTED_MODULE_8__["rotateOutOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpLeftAnimation", function() { return _rotating_exits__WEBPACK_IMPORTED_MODULE_8__["rotateOutUpLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpLeftOnLeaveAnimation", function() { return _rotating_exits__WEBPACK_IMPORTED_MODULE_8__["rotateOutUpLeftOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpRightAnimation", function() { return _rotating_exits__WEBPACK_IMPORTED_MODULE_8__["rotateOutUpRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpRightOnLeaveAnimation", function() { return _rotating_exits__WEBPACK_IMPORTED_MODULE_8__["rotateOutUpRightOnLeaveAnimation"]; });

/* harmony import */ var _sliding_entrances__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sliding-entrances */ "pzG/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInDownAnimation", function() { return _sliding_entrances__WEBPACK_IMPORTED_MODULE_9__["slideInDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInDownOnEnterAnimation", function() { return _sliding_entrances__WEBPACK_IMPORTED_MODULE_9__["slideInDownOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInLeftAnimation", function() { return _sliding_entrances__WEBPACK_IMPORTED_MODULE_9__["slideInLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInLeftOnEnterAnimation", function() { return _sliding_entrances__WEBPACK_IMPORTED_MODULE_9__["slideInLeftOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInRightAnimation", function() { return _sliding_entrances__WEBPACK_IMPORTED_MODULE_9__["slideInRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInRightOnEnterAnimation", function() { return _sliding_entrances__WEBPACK_IMPORTED_MODULE_9__["slideInRightOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInUpAnimation", function() { return _sliding_entrances__WEBPACK_IMPORTED_MODULE_9__["slideInUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInUpOnEnterAnimation", function() { return _sliding_entrances__WEBPACK_IMPORTED_MODULE_9__["slideInUpOnEnterAnimation"]; });

/* harmony import */ var _sliding_exits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sliding-exits */ "O23B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutDownAnimation", function() { return _sliding_exits__WEBPACK_IMPORTED_MODULE_10__["slideOutDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutDownOnLeaveAnimation", function() { return _sliding_exits__WEBPACK_IMPORTED_MODULE_10__["slideOutDownOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutLeftAnimation", function() { return _sliding_exits__WEBPACK_IMPORTED_MODULE_10__["slideOutLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutLeftOnLeaveAnimation", function() { return _sliding_exits__WEBPACK_IMPORTED_MODULE_10__["slideOutLeftOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutRightAnimation", function() { return _sliding_exits__WEBPACK_IMPORTED_MODULE_10__["slideOutRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutRightOnLeaveAnimation", function() { return _sliding_exits__WEBPACK_IMPORTED_MODULE_10__["slideOutRightOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutUpAnimation", function() { return _sliding_exits__WEBPACK_IMPORTED_MODULE_10__["slideOutUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutUpOnLeaveAnimation", function() { return _sliding_exits__WEBPACK_IMPORTED_MODULE_10__["slideOutUpOnLeaveAnimation"]; });

/* harmony import */ var _zooming_entrances__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zooming-entrances */ "G5sz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInAnimation", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_11__["zoomInAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInDownAnimation", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_11__["zoomInDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInDownOnEnterAnimation", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_11__["zoomInDownOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInLeftAnimation", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_11__["zoomInLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInLeftOnEnterAnimation", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_11__["zoomInLeftOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInOnEnterAnimation", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_11__["zoomInOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInRightAnimation", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_11__["zoomInRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInRightOnEnterAnimation", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_11__["zoomInRightOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInUpAnimation", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_11__["zoomInUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInUpOnEnterAnimation", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_11__["zoomInUpOnEnterAnimation"]; });

/* harmony import */ var _zooming_exits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zooming-exits */ "qvjF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutAnimation", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_12__["zoomOutAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutDownAnimation", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_12__["zoomOutDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutDownOnLeaveAnimation", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_12__["zoomOutDownOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutLeftAnimation", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_12__["zoomOutLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutLeftOnLeaveAnimation", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_12__["zoomOutLeftOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutOnLeaveAnimation", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_12__["zoomOutOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutRightAnimation", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_12__["zoomOutRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutRightOnLeaveAnimation", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_12__["zoomOutRightOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutUpAnimation", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_12__["zoomOutUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutUpOnLeaveAnimation", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_12__["zoomOutUpOnLeaveAnimation"]; });

/* harmony import */ var _specials__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./specials */ "lxRF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hingeAnimation", function() { return _specials__WEBPACK_IMPORTED_MODULE_13__["hingeAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hingeOnLeaveAnimation", function() { return _specials__WEBPACK_IMPORTED_MODULE_13__["hingeOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jackInTheBoxAnimation", function() { return _specials__WEBPACK_IMPORTED_MODULE_13__["jackInTheBoxAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jackInTheBoxOnEnterAnimation", function() { return _specials__WEBPACK_IMPORTED_MODULE_13__["jackInTheBoxOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollInAnimation", function() { return _specials__WEBPACK_IMPORTED_MODULE_13__["rollInAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollInOnEnterAnimation", function() { return _specials__WEBPACK_IMPORTED_MODULE_13__["rollInOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollOutAnimation", function() { return _specials__WEBPACK_IMPORTED_MODULE_13__["rollOutAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollOutOnLeaveAnimation", function() { return _specials__WEBPACK_IMPORTED_MODULE_13__["rollOutOnLeaveAnimation"]; });

/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./other */ "RJPK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animateChildrenOnLeaveAnimation", function() { return _other__WEBPACK_IMPORTED_MODULE_14__["animateChildrenOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseAnimation", function() { return _other__WEBPACK_IMPORTED_MODULE_14__["collapseAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseOnLeaveAnimation", function() { return _other__WEBPACK_IMPORTED_MODULE_14__["collapseOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expandOnEnterAnimation", function() { return _other__WEBPACK_IMPORTED_MODULE_14__["expandOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInExpandOnEnterAnimation", function() { return _other__WEBPACK_IMPORTED_MODULE_14__["fadeInExpandOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutCollapseOnLeaveAnimation", function() { return _other__WEBPACK_IMPORTED_MODULE_14__["fadeOutCollapseOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseHorizontallyAnimation", function() { return _other__WEBPACK_IMPORTED_MODULE_14__["collapseHorizontallyAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseLeftOnLeaveAnimation", function() { return _other__WEBPACK_IMPORTED_MODULE_14__["collapseLeftOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expandRightOnEnterAnimation", function() { return _other__WEBPACK_IMPORTED_MODULE_14__["expandRightOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInExpandRightOnEnterAnimation", function() { return _other__WEBPACK_IMPORTED_MODULE_14__["fadeInExpandRightOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutCollapseLeftOnLeaveAnimation", function() { return _other__WEBPACK_IMPORTED_MODULE_14__["fadeOutCollapseLeftOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hueRotateAnimation", function() { return _other__WEBPACK_IMPORTED_MODULE_14__["hueRotateAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateAnimation", function() { return _other__WEBPACK_IMPORTED_MODULE_14__["rotateAnimation"]; });


















/***/ }),

/***/ "FlM1":
/*!*************************************************************************!*\
  !*** ./animation-lib/rotating-exits/rotate-out-down-right.animation.ts ***!
  \*************************************************************************/
/*! exports provided: rotateOutDownRightAnimation, rotateOutDownRightOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOutDownRightAnimation", function() { return rotateOutDownRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOutDownRightOnLeaveAnimation", function() { return rotateOutDownRightOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const rotateOutDownRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'rotate3d(0, 0, 1, {{degrees}}deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function rotateOutDownRightAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateOutDownRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'right bottom' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateOutDownRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || -45
            }
        })
    ]);
}
function rotateOutDownRightOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateOutDownRightOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'right bottom' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateOutDownRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || -45
            }
        })
    ]);
}


/***/ }),

/***/ "G5sz":
/*!**************************************************!*\
  !*** ./animation-lib/zooming-entrances/index.ts ***!
  \**************************************************/
/*! exports provided: zoomInDownAnimation, zoomInDownOnEnterAnimation, zoomInLeftAnimation, zoomInLeftOnEnterAnimation, zoomInRightAnimation, zoomInRightOnEnterAnimation, zoomInUpAnimation, zoomInUpOnEnterAnimation, zoomInAnimation, zoomInOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zoom_in_down_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom-in-down.animation */ "ig21");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInDownAnimation", function() { return _zoom_in_down_animation__WEBPACK_IMPORTED_MODULE_0__["zoomInDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInDownOnEnterAnimation", function() { return _zoom_in_down_animation__WEBPACK_IMPORTED_MODULE_0__["zoomInDownOnEnterAnimation"]; });

/* harmony import */ var _zoom_in_left_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zoom-in-left.animation */ "lTOO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInLeftAnimation", function() { return _zoom_in_left_animation__WEBPACK_IMPORTED_MODULE_1__["zoomInLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInLeftOnEnterAnimation", function() { return _zoom_in_left_animation__WEBPACK_IMPORTED_MODULE_1__["zoomInLeftOnEnterAnimation"]; });

/* harmony import */ var _zoom_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zoom-in-right.animation */ "r1L9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInRightAnimation", function() { return _zoom_in_right_animation__WEBPACK_IMPORTED_MODULE_2__["zoomInRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInRightOnEnterAnimation", function() { return _zoom_in_right_animation__WEBPACK_IMPORTED_MODULE_2__["zoomInRightOnEnterAnimation"]; });

/* harmony import */ var _zoom_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zoom-in-up.animation */ "AoYK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInUpAnimation", function() { return _zoom_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["zoomInUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInUpOnEnterAnimation", function() { return _zoom_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["zoomInUpOnEnterAnimation"]; });

/* harmony import */ var _zoom_in_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zoom-in.animation */ "qvEJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInAnimation", function() { return _zoom_in_animation__WEBPACK_IMPORTED_MODULE_4__["zoomInAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInOnEnterAnimation", function() { return _zoom_in_animation__WEBPACK_IMPORTED_MODULE_4__["zoomInOnEnterAnimation"]; });








/***/ }),

/***/ "IRbD":
/*!*****************************************************************!*\
  !*** ./animation-lib/bouncing-entrances/bounce-in.animation.ts ***!
  \*****************************************************************/
/*! exports provided: bounceInAnimation, bounceInOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInAnimation", function() { return bounceInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOnEnterAnimation", function() { return bounceInOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const bounceIn = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.9, 0.9, 0.9)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.03, 1.03, 1.03)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.97, 0.97, 0.97)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.8 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
    ]))
]));
const DEFAULT_DURATION = 750;
function bounceInAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceIn(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function bounceInOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceInOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceIn(), options)]), {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "IlgX":
/*!************************************************************!*\
  !*** ./animation-lib/common/animate-including-children.ts ***!
  \************************************************************/
/*! exports provided: animateIncludingChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateIncludingChildren", function() { return animateIncludingChildren; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

function animateIncludingChildren(easing, options) {
    return [
        ...(options && options.animateChildren === 'before' ? [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })] : []),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + easing)]),
            ...(!options || !options.animateChildren || options.animateChildren === 'together'
                ? [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })]
                : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })] : [])
    ];
}


/***/ }),

/***/ "Iy4P":
/*!**********************************************************!*\
  !*** ./animation-lib/fading-exits/fade-out.animation.ts ***!
  \**********************************************************/
/*! exports provided: fadeOutAnimation, fadeOutOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutAnimation", function() { return fadeOutAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutOnLeaveAnimation", function() { return fadeOutOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeOut = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, easing: 'ease', offset: 1 })]))
]);
const DEFAULT_DURATION = 1000;
function fadeOutAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOut(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function fadeOutOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOut(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "JLws":
/*!***********************************************************************!*\
  !*** ./animation-lib/bouncing-entrances/bounce-in-right.animation.ts ***!
  \***********************************************************************/
/*! exports provided: bounceInRightAnimation, bounceInRightOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInRightAnimation", function() { return bounceInRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInRightOnEnterAnimation", function() { return bounceInRightOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const bounceInRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-25px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(10px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-5px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
    ]))
]));
const DEFAULT_DURATION = 1000;
function bounceInRightAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceInRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceInRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '3000px'
            }
        })
    ]);
}
function bounceInRightOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceInRightOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceInRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '3000px'
            }
        })
    ]);
}


/***/ }),

/***/ "JShl":
/*!*******************************************************************!*\
  !*** ./animation-lib/fading-entrances/fade-in-right.animation.ts ***!
  \*******************************************************************/
/*! exports provided: fadeInRightAnimation, fadeInRightOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRightAnimation", function() { return fadeInRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRightOnEnterAnimation", function() { return fadeInRightOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeInRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeInRightAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function fadeInRightOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInRightOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "JjLA":
/*!**********************************************************************!*\
  !*** ./animation-lib/bouncing-entrances/bounce-in-left.animation.ts ***!
  \**********************************************************************/
/*! exports provided: bounceInLeftAnimation, bounceInLeftOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInLeftAnimation", function() { return bounceInLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInLeftOnEnterAnimation", function() { return bounceInLeftOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const bounceInLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(25px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-10px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(5px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
    ]))
]));
const DEFAULT_DURATION = 1000;
function bounceInLeftAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceInLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '3000px'
            }
        })
    ]);
}
function bounceInLeftOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceInLeftOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceInLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '3000px'
            }
        })
    ]);
}


/***/ }),

/***/ "KJx/":
/*!**************************************************************************!*\
  !*** ./animation-lib/rotating-entrances/rotate-in-up-right.animation.ts ***!
  \**************************************************************************/
/*! exports provided: rotateInUpRightAnimation, rotateInUpRightOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateInUpRightAnimation", function() { return rotateInUpRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateInUpRightOnEnterAnimation", function() { return rotateInUpRightOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const rotateInUpRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, transform: 'rotate3d(0, 0, 1, {{degrees}}deg)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function rotateInUpRightAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateInUpRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'right bottom' }),
            ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateInUpRight(), options)
        ], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || -90
            }
        })
    ]);
}
function rotateInUpRightOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateInUpRightOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'right bottom' }),
            ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateInUpRight(), options)
        ], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || -90
            }
        })
    ]);
}


/***/ }),

/***/ "LPu0":
/*!****************************************************************!*\
  !*** ./animation-lib/zooming-exits/zoom-out-left.animation.ts ***!
  \****************************************************************/
/*! exports provided: zoomOutLeftAnimation, zoomOutLeftOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutLeftAnimation", function() { return zoomOutLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutLeftOnLeaveAnimation", function() { return zoomOutLeftOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const zoomOutLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)', easing: 'ease', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-2000px, 0, 0)', easing: 'ease', offset: 1 })
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center center', offset: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'left center', offset: 0.4 })]))
]));
const DEFAULT_DURATION = 1000;
function zoomOutLeftAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomOutLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomOutLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function zoomOutLeftOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomOutLeftOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomOutLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "MNZ0":
/*!**************************************************************!*\
  !*** ./animation-lib/bouncing-exits/bounce-out.animation.ts ***!
  \**************************************************************/
/*! exports provided: bounceOutAnimation, bounceOutOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutAnimation", function() { return bounceOutAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutOnLeaveAnimation", function() { return bounceOutOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const bounceOut = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.9, 0.9, 0.9)', easing: 'ease', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1)', easing: 'ease', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1)', easing: 'ease', offset: 0.55 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 1 })
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0.55 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, easing: 'ease', offset: 1 })
    ]))
]));
const DEFAULT_DURATION = 750;
function bounceOutAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceOut(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function bounceOutOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceOutOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceOut(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "MOuD":
/*!***********************************************************!*\
  !*** ./animation-lib/other/animate-children.animation.ts ***!
  \***********************************************************/
/*! exports provided: animateChildrenOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateChildrenOnLeaveAnimation", function() { return animateChildrenOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

function animateChildrenOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'animateChildrenOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })])
    ]);
}


/***/ }),

/***/ "O23B":
/*!**********************************************!*\
  !*** ./animation-lib/sliding-exits/index.ts ***!
  \**********************************************/
/*! exports provided: slideOutDownAnimation, slideOutDownOnLeaveAnimation, slideOutLeftAnimation, slideOutLeftOnLeaveAnimation, slideOutRightAnimation, slideOutRightOnLeaveAnimation, slideOutUpAnimation, slideOutUpOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slide_out_down_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide-out-down.animation */ "3wzD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutDownAnimation", function() { return _slide_out_down_animation__WEBPACK_IMPORTED_MODULE_0__["slideOutDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutDownOnLeaveAnimation", function() { return _slide_out_down_animation__WEBPACK_IMPORTED_MODULE_0__["slideOutDownOnLeaveAnimation"]; });

/* harmony import */ var _slide_out_left_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide-out-left.animation */ "ckVX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutLeftAnimation", function() { return _slide_out_left_animation__WEBPACK_IMPORTED_MODULE_1__["slideOutLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutLeftOnLeaveAnimation", function() { return _slide_out_left_animation__WEBPACK_IMPORTED_MODULE_1__["slideOutLeftOnLeaveAnimation"]; });

/* harmony import */ var _slide_out_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slide-out-right.animation */ "mwt6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutRightAnimation", function() { return _slide_out_right_animation__WEBPACK_IMPORTED_MODULE_2__["slideOutRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutRightOnLeaveAnimation", function() { return _slide_out_right_animation__WEBPACK_IMPORTED_MODULE_2__["slideOutRightOnLeaveAnimation"]; });

/* harmony import */ var _slide_out_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide-out-up.animation */ "6dmF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutUpAnimation", function() { return _slide_out_up_animation__WEBPACK_IMPORTED_MODULE_3__["slideOutUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutUpOnLeaveAnimation", function() { return _slide_out_up_animation__WEBPACK_IMPORTED_MODULE_3__["slideOutUpOnLeaveAnimation"]; });







/***/ }),

/***/ "Omkp":
/*!**************************************************************!*\
  !*** ./animation-lib/zooming-exits/zoom-out-up.animation.ts ***!
  \**************************************************************/
/*! exports provided: zoomOutUpAnimation, zoomOutUpOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutUpAnimation", function() { return zoomOutUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutUpOnLeaveAnimation", function() { return zoomOutUpOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const zoomOutUp = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'transform-origin': 'center bottom',
            opacity: 1,
            transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
            easing: 'ease',
            offset: 0.4
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'transform-origin': 'center bottom',
            opacity: 0,
            transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 1
        })
    ]))
]);
const DEFAULT_DURATION = 1000;
function zoomOutUpAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomOutUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomOutUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function zoomOutUpOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomOutUpOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomOutUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "OzDx":
/*!***************************************************************************!*\
  !*** ./animation-lib/rotating-entrances/rotate-in-down-left.animation.ts ***!
  \***************************************************************************/
/*! exports provided: rotateInDownLeftAnimation, rotateInDownLeftOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateInDownLeftAnimation", function() { return rotateInDownLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateInDownLeftOnEnterAnimation", function() { return rotateInDownLeftOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const rotateInDownLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, transform: 'rotate3d(0, 0, 1, {{degrees}}deg)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function rotateInDownLeftAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateInDownLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'left bottom' }),
            ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateInDownLeft(), options)
        ], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || -45
            }
        })
    ]);
}
function rotateInDownLeftOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateInDownLeftOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'left bottom' }),
            ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateInDownLeft(), options)
        ], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || -45
            }
        })
    ]);
}


/***/ }),

/***/ "PFRl":
/*!********************************************************************!*\
  !*** ./animation-lib/bouncing-exits/bounce-out-right.animation.ts ***!
  \********************************************************************/
/*! exports provided: bounceOutRightAnimation, bounceOutRightOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutRightAnimation", function() { return bounceOutRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutRightOnLeaveAnimation", function() { return bounceOutRightOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const bounceOutRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', easing: 'ease', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function bounceOutRightAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceOutRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceOutRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}
function bounceOutRightOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceOutRightOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounceOutRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}


/***/ }),

/***/ "PX4q":
/*!*******************************************************************!*\
  !*** ./animation-lib/fading-exits/fade-out-down-big.animation.ts ***!
  \*******************************************************************/
/*! exports provided: fadeOutDownBigAnimation, fadeOutDownBigOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownBigAnimation", function() { return fadeOutDownBigAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownBigOnLeaveAnimation", function() { return fadeOutDownBigOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeOutDownBig = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(0, {{translate}}, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeOutDownBigAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutDownBig', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutDownBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}
function fadeOutDownBigOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutDownBigOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutDownBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}


/***/ }),

/***/ "R89x":
/*!*******************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var animation_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animation-lib */ "Dmyy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = function (a0, a1) { return { duration: a0, delay: a1 }; };
const _c1 = function (a0, a1) { return { value: a0, params: a1 }; };
class DashboardComponent {
    constructor() {
        this.delay = 0;
        this.duration = 2000;
        this.animationState = true;
        this.scale = 1.05;
    }
    ngOnInit() {
    }
    animate() {
        this.animationState = false;
        setTimeout(() => {
            this.animationState = !this.animationState;
        }, 1);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 8, vars: 7, consts: [[2, "height", "200px", "width", "200px"], [3, "click"], ["alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hello dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "TEST Animation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_4_listener() { return ctx.animate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Animate it");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx.duration, ctx.delay)));
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            Object(animation_lib__WEBPACK_IMPORTED_MODULE_0__["pulseAnimation"])({ anchor: 'pulse' }),
            Object(animation_lib__WEBPACK_IMPORTED_MODULE_0__["flipAnimation"])()
        ] } });


/***/ }),

/***/ "RJPK":
/*!**************************************!*\
  !*** ./animation-lib/other/index.ts ***!
  \**************************************/
/*! exports provided: animateChildrenOnLeaveAnimation, collapseAnimation, expandOnEnterAnimation, collapseOnLeaveAnimation, fadeInExpandOnEnterAnimation, fadeOutCollapseOnLeaveAnimation, collapseHorizontallyAnimation, collapseLeftOnLeaveAnimation, expandRightOnEnterAnimation, fadeInExpandRightOnEnterAnimation, fadeOutCollapseLeftOnLeaveAnimation, hueRotateAnimation, rotateAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animate_children_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate-children.animation */ "MOuD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animateChildrenOnLeaveAnimation", function() { return _animate_children_animation__WEBPACK_IMPORTED_MODULE_0__["animateChildrenOnLeaveAnimation"]; });

/* harmony import */ var _collapse_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse.animation */ "nIsS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseAnimation", function() { return _collapse_animation__WEBPACK_IMPORTED_MODULE_1__["collapseAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expandOnEnterAnimation", function() { return _collapse_animation__WEBPACK_IMPORTED_MODULE_1__["expandOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseOnLeaveAnimation", function() { return _collapse_animation__WEBPACK_IMPORTED_MODULE_1__["collapseOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInExpandOnEnterAnimation", function() { return _collapse_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInExpandOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutCollapseOnLeaveAnimation", function() { return _collapse_animation__WEBPACK_IMPORTED_MODULE_1__["fadeOutCollapseOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseHorizontallyAnimation", function() { return _collapse_animation__WEBPACK_IMPORTED_MODULE_1__["collapseHorizontallyAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseLeftOnLeaveAnimation", function() { return _collapse_animation__WEBPACK_IMPORTED_MODULE_1__["collapseLeftOnLeaveAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expandRightOnEnterAnimation", function() { return _collapse_animation__WEBPACK_IMPORTED_MODULE_1__["expandRightOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInExpandRightOnEnterAnimation", function() { return _collapse_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInExpandRightOnEnterAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutCollapseLeftOnLeaveAnimation", function() { return _collapse_animation__WEBPACK_IMPORTED_MODULE_1__["fadeOutCollapseLeftOnLeaveAnimation"]; });

/* harmony import */ var _hue_rotate_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hue-rotate.animation */ "ZL2U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hueRotateAnimation", function() { return _hue_rotate_animation__WEBPACK_IMPORTED_MODULE_2__["hueRotateAnimation"]; });

/* harmony import */ var _rotate_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rotate.animation */ "j967");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateAnimation", function() { return _rotate_animation__WEBPACK_IMPORTED_MODULE_3__["rotateAnimation"]; });







/***/ }),

/***/ "RL1U":
/*!****************************************************************!*\
  !*** ./animation-lib/fading-exits/fade-out-right.animation.ts ***!
  \****************************************************************/
/*! exports provided: fadeOutRightAnimation, fadeOutRightOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightAnimation", function() { return fadeOutRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightOnLeaveAnimation", function() { return fadeOutRightOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeOutRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeOutRightAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function fadeOutRightOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutRightOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "Rrqz":
/*!*********************************************!*\
  !*** ./animation-lib/fading-exits/index.ts ***!
  \*********************************************/
/*! exports provided: fadeOutDownBigAnimation, fadeOutDownBigOnLeaveAnimation, fadeOutDownAnimation, fadeOutDownOnLeaveAnimation, fadeOutLeftBigAnimation, fadeOutLeftBigOnLeaveAnimation, fadeOutLeftAnimation, fadeOutLeftOnLeaveAnimation, fadeOutRightBigAnimation, fadeOutRightBigOnLeaveAnimation, fadeOutRightAnimation, fadeOutRightOnLeaveAnimation, fadeOutUpBigAnimation, fadeOutUpBigOnLeaveAnimation, fadeOutUpAnimation, fadeOutUpOnLeaveAnimation, fadeOutAnimation, fadeOutOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fade_out_down_big_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fade-out-down-big.animation */ "PX4q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownBigAnimation", function() { return _fade_out_down_big_animation__WEBPACK_IMPORTED_MODULE_0__["fadeOutDownBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownBigOnLeaveAnimation", function() { return _fade_out_down_big_animation__WEBPACK_IMPORTED_MODULE_0__["fadeOutDownBigOnLeaveAnimation"]; });

/* harmony import */ var _fade_out_down_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fade-out-down.animation */ "f+3A");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownAnimation", function() { return _fade_out_down_animation__WEBPACK_IMPORTED_MODULE_1__["fadeOutDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownOnLeaveAnimation", function() { return _fade_out_down_animation__WEBPACK_IMPORTED_MODULE_1__["fadeOutDownOnLeaveAnimation"]; });

/* harmony import */ var _fade_out_left_big_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fade-out-left-big.animation */ "XlsU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftBigAnimation", function() { return _fade_out_left_big_animation__WEBPACK_IMPORTED_MODULE_2__["fadeOutLeftBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftBigOnLeaveAnimation", function() { return _fade_out_left_big_animation__WEBPACK_IMPORTED_MODULE_2__["fadeOutLeftBigOnLeaveAnimation"]; });

/* harmony import */ var _fade_out_left_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fade-out-left.animation */ "CTaR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftAnimation", function() { return _fade_out_left_animation__WEBPACK_IMPORTED_MODULE_3__["fadeOutLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftOnLeaveAnimation", function() { return _fade_out_left_animation__WEBPACK_IMPORTED_MODULE_3__["fadeOutLeftOnLeaveAnimation"]; });

/* harmony import */ var _fade_out_right_big_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fade-out-right-big.animation */ "kRow");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightBigAnimation", function() { return _fade_out_right_big_animation__WEBPACK_IMPORTED_MODULE_4__["fadeOutRightBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightBigOnLeaveAnimation", function() { return _fade_out_right_big_animation__WEBPACK_IMPORTED_MODULE_4__["fadeOutRightBigOnLeaveAnimation"]; });

/* harmony import */ var _fade_out_right_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fade-out-right.animation */ "RL1U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightAnimation", function() { return _fade_out_right_animation__WEBPACK_IMPORTED_MODULE_5__["fadeOutRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightOnLeaveAnimation", function() { return _fade_out_right_animation__WEBPACK_IMPORTED_MODULE_5__["fadeOutRightOnLeaveAnimation"]; });

/* harmony import */ var _fade_out_up_big_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fade-out-up-big.animation */ "o0c7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpBigAnimation", function() { return _fade_out_up_big_animation__WEBPACK_IMPORTED_MODULE_6__["fadeOutUpBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpBigOnLeaveAnimation", function() { return _fade_out_up_big_animation__WEBPACK_IMPORTED_MODULE_6__["fadeOutUpBigOnLeaveAnimation"]; });

/* harmony import */ var _fade_out_up_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fade-out-up.animation */ "oRgV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpAnimation", function() { return _fade_out_up_animation__WEBPACK_IMPORTED_MODULE_7__["fadeOutUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpOnLeaveAnimation", function() { return _fade_out_up_animation__WEBPACK_IMPORTED_MODULE_7__["fadeOutUpOnLeaveAnimation"]; });

/* harmony import */ var _fade_out_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fade-out.animation */ "Iy4P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutAnimation", function() { return _fade_out_animation__WEBPACK_IMPORTED_MODULE_8__["fadeOutAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutOnLeaveAnimation", function() { return _fade_out_animation__WEBPACK_IMPORTED_MODULE_8__["fadeOutOnLeaveAnimation"]; });












/***/ }),

/***/ "TC63":
/*!*****************************************************************!*\
  !*** ./animation-lib/zooming-exits/zoom-out-right.animation.ts ***!
  \*****************************************************************/
/*! exports provided: zoomOutRightAnimation, zoomOutRightOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutRightAnimation", function() { return zoomOutRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutRightOnLeaveAnimation", function() { return zoomOutRightOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const zoomOutRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)', easing: 'ease', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(2000px, 0, 0)', easing: 'ease', offset: 1 })
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center center', offset: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'right center', offset: 0.4 })]))
]));
const DEFAULT_DURATION = 1000;
function zoomOutRightAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomOutRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomOutRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function zoomOutRightOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomOutRightOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomOutRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "UBWE":
/*!****************************************************************!*\
  !*** ./animation-lib/zooming-exits/zoom-out-down.animation.ts ***!
  \****************************************************************/
/*! exports provided: zoomOutDownAnimation, zoomOutDownOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutDownAnimation", function() { return zoomOutDownAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutDownOnLeaveAnimation", function() { return zoomOutDownOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const zoomOutDown = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'transform-origin': 'center bottom',
            opacity: 1,
            transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
            easing: 'ease',
            offset: 0.4
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'transform-origin': 'center bottom',
            opacity: 0,
            transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 1
        })
    ]))
]);
const DEFAULT_DURATION = 1000;
function zoomOutDownAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomOutDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomOutDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function zoomOutDownOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomOutDownOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomOutDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "UKAD":
/*!*******************************************************!*\
  !*** ./animation-lib/flippers/flip-in-y.animation.ts ***!
  \*******************************************************/
/*! exports provided: flipInYAnimation, flipInYOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipInYAnimation", function() { return flipInYAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipInYOnEnterAnimation", function() { return flipInYOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const flipInY = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            visibility: 'visible',
            transform: 'perspective(400px) rotate3d(0, 1, 0, {{degrees}}deg)',
            opacity: 0,
            easing: 'ease-in',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: 0.5, easing: 'ease-in', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: 1, easing: 'ease-in', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', easing: 'ease', offset: 0.8 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function flipInYAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'flipInY', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'backface-visibility': 'visible' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(flipInY(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 90
            }
        })
    ]);
}
function flipInYOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'flipInYOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'backface-visibility': 'visible' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(flipInY(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 90
            }
        })
    ]);
}


/***/ }),

/***/ "UZqx":
/*!***************************************************!*\
  !*** ./animation-lib/bouncing-entrances/index.ts ***!
  \***************************************************/
/*! exports provided: bounceInDownAnimation, bounceInDownOnEnterAnimation, bounceInLeftAnimation, bounceInLeftOnEnterAnimation, bounceInRightAnimation, bounceInRightOnEnterAnimation, bounceInUpAnimation, bounceInUpOnEnterAnimation, bounceInAnimation, bounceInOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bounce_in_down_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bounce-in-down.animation */ "5X+j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInDownAnimation", function() { return _bounce_in_down_animation__WEBPACK_IMPORTED_MODULE_0__["bounceInDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInDownOnEnterAnimation", function() { return _bounce_in_down_animation__WEBPACK_IMPORTED_MODULE_0__["bounceInDownOnEnterAnimation"]; });

/* harmony import */ var _bounce_in_left_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounce-in-left.animation */ "JjLA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInLeftAnimation", function() { return _bounce_in_left_animation__WEBPACK_IMPORTED_MODULE_1__["bounceInLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInLeftOnEnterAnimation", function() { return _bounce_in_left_animation__WEBPACK_IMPORTED_MODULE_1__["bounceInLeftOnEnterAnimation"]; });

/* harmony import */ var _bounce_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bounce-in-right.animation */ "JLws");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInRightAnimation", function() { return _bounce_in_right_animation__WEBPACK_IMPORTED_MODULE_2__["bounceInRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInRightOnEnterAnimation", function() { return _bounce_in_right_animation__WEBPACK_IMPORTED_MODULE_2__["bounceInRightOnEnterAnimation"]; });

/* harmony import */ var _bounce_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bounce-in-up.animation */ "38er");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInUpAnimation", function() { return _bounce_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["bounceInUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInUpOnEnterAnimation", function() { return _bounce_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["bounceInUpOnEnterAnimation"]; });

/* harmony import */ var _bounce_in_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bounce-in.animation */ "IRbD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInAnimation", function() { return _bounce_in_animation__WEBPACK_IMPORTED_MODULE_4__["bounceInAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInOnEnterAnimation", function() { return _bounce_in_animation__WEBPACK_IMPORTED_MODULE_4__["bounceInOnEnterAnimation"]; });








/***/ }),

/***/ "UdQW":
/*!***************************************************!*\
  !*** ./animation-lib/rotating-entrances/index.ts ***!
  \***************************************************/
/*! exports provided: rotateInDownLeftAnimation, rotateInDownLeftOnEnterAnimation, rotateInDownRightAnimation, rotateInDownRightOnEnterAnimation, rotateInUpLeftAnimation, rotateInUpLeftOnEnterAnimation, rotateInUpRightAnimation, rotateInUpRightOnEnterAnimation, rotateInAnimation, rotateInOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rotate_in_down_left_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rotate-in-down-left.animation */ "OzDx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInDownLeftAnimation", function() { return _rotate_in_down_left_animation__WEBPACK_IMPORTED_MODULE_0__["rotateInDownLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInDownLeftOnEnterAnimation", function() { return _rotate_in_down_left_animation__WEBPACK_IMPORTED_MODULE_0__["rotateInDownLeftOnEnterAnimation"]; });

/* harmony import */ var _rotate_in_down_right_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rotate-in-down-right.animation */ "poE4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInDownRightAnimation", function() { return _rotate_in_down_right_animation__WEBPACK_IMPORTED_MODULE_1__["rotateInDownRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInDownRightOnEnterAnimation", function() { return _rotate_in_down_right_animation__WEBPACK_IMPORTED_MODULE_1__["rotateInDownRightOnEnterAnimation"]; });

/* harmony import */ var _rotate_in_up_left_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rotate-in-up-left.animation */ "tw/j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInUpLeftAnimation", function() { return _rotate_in_up_left_animation__WEBPACK_IMPORTED_MODULE_2__["rotateInUpLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInUpLeftOnEnterAnimation", function() { return _rotate_in_up_left_animation__WEBPACK_IMPORTED_MODULE_2__["rotateInUpLeftOnEnterAnimation"]; });

/* harmony import */ var _rotate_in_up_right_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rotate-in-up-right.animation */ "KJx/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInUpRightAnimation", function() { return _rotate_in_up_right_animation__WEBPACK_IMPORTED_MODULE_3__["rotateInUpRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInUpRightOnEnterAnimation", function() { return _rotate_in_up_right_animation__WEBPACK_IMPORTED_MODULE_3__["rotateInUpRightOnEnterAnimation"]; });

/* harmony import */ var _rotate_in_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rotate-in.animation */ "rdji");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInAnimation", function() { return _rotate_in_animation__WEBPACK_IMPORTED_MODULE_4__["rotateInAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateInOnEnterAnimation", function() { return _rotate_in_animation__WEBPACK_IMPORTED_MODULE_4__["rotateInOnEnterAnimation"]; });








/***/ }),

/***/ "VEyN":
/*!***************************************************************!*\
  !*** ./animation-lib/light-speed/light-speed-in.animation.ts ***!
  \***************************************************************/
/*! exports provided: lightSpeedInAnimation, lightSpeedInOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightSpeedInAnimation", function() { return lightSpeedInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightSpeedInOnEnterAnimation", function() { return lightSpeedInOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const lightSpeedIn = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            visibility: 'visible',
            opacity: 0,
            transform: 'translate3d({{translate}}, 0, 0) skewX(-30deg)',
            easing: 'ease-out',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'skewX(20deg)', easing: 'ease-out', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'skewX(-5deg)', easing: 'ease-out', offset: 0.8 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease-out', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function lightSpeedInAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'lightSpeedIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(lightSpeedIn(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function lightSpeedInOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'lightSpeedInOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(lightSpeedIn(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "ViJ0":
/*!************************************************************!*\
  !*** ./animation-lib/attention-seekers/flash.animation.ts ***!
  \************************************************************/
/*! exports provided: flashAnimation, flashOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flashAnimation", function() { return flashAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flashOnEnterAnimation", function() { return flashOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const flash = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], opacity: 1, easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, easing: 'ease', offset: 0.25 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, easing: 'ease', offset: 0.75 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function flashAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'flash', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`0 ${(options && options.direction) || '<=>'} 1`, [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(flash(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function flashOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'flashOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(flash(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "X/Mp":
/*!************************************************************!*\
  !*** ./animation-lib/attention-seekers/jello.animation.ts ***!
  \************************************************************/
/*! exports provided: jelloAnimation, jelloOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jelloAnimation", function() { return jelloAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jelloOnEnterAnimation", function() { return jelloOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const jello = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0.111 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', easing: 'ease', offset: 0.222 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(6.25deg) skewY(6.25deg)', easing: 'ease', offset: 0.333 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', easing: 'ease', offset: 0.444 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', easing: 'ease', offset: 0.555 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', easing: 'ease', offset: 0.666 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', easing: 'ease', offset: 0.777 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', easing: 'ease', offset: 0.888 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(0deg) skewY(0deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function jelloAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'jello', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`0 ${(options && options.direction) || '<=>'} 1`, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(jello(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function jelloOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'jelloOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(jello(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "XlsU":
/*!*******************************************************************!*\
  !*** ./animation-lib/fading-exits/fade-out-left-big.animation.ts ***!
  \*******************************************************************/
/*! exports provided: fadeOutLeftBigAnimation, fadeOutLeftBigOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftBigAnimation", function() { return fadeOutLeftBigAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftBigOnLeaveAnimation", function() { return fadeOutLeftBigOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeOutLeftBig = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeOutLeftBigAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutLeftBig', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutLeftBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}
function fadeOutLeftBigOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutLeftBigOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutLeftBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}


/***/ }),

/***/ "XpWQ":
/*!********************************************************!*\
  !*** ./animation-lib/flippers/flip-out-x.animation.ts ***!
  \********************************************************/
/*! exports provided: flipOutXAnimation, flipOutXOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipOutXAnimation", function() { return flipOutXAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipOutXOnLeaveAnimation", function() { return flipOutXOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const flipOutX = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px)', opacity: 1, easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 1, easing: 'ease', offset: 0.3 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(1, 0, 0, {{degrees}}deg)', opacity: 0, easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 750;
function flipOutXAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'flipOutX', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'backface-visibility': 'visible' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(flipOutX(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 90
            }
        })
    ]);
}
function flipOutXOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'flipOutXOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'backface-visibility': 'visible' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(flipOutX(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 90
            }
        })
    ]);
}


/***/ }),

/***/ "YH/L":
/*!****************************************************************!*\
  !*** ./animation-lib/light-speed/light-speed-out.animation.ts ***!
  \****************************************************************/
/*! exports provided: lightSpeedOutAnimation, lightSpeedOutOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightSpeedOutAnimation", function() { return lightSpeedOutAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightSpeedOutOnLeaveAnimation", function() { return lightSpeedOutOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const lightSpeedOut = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease-in', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d({{translate}}, 0, 0) skewX(30deg)', easing: 'ease-in', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function lightSpeedOutAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'lightSpeedOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(lightSpeedOut(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function lightSpeedOutOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'lightSpeedOutOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(lightSpeedOut(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "YKer":
/*!**************************************************************!*\
  !*** ./animation-lib/rotating-exits/rotate-out.animation.ts ***!
  \**************************************************************/
/*! exports provided: rotateOutAnimation, rotateOutOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOutAnimation", function() { return rotateOutAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOutOnLeaveAnimation", function() { return rotateOutOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const rotateOut = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'rotate({{degrees}}deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function rotateOutAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateOut(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 200
            }
        })
    ]);
}
function rotateOutOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateOutOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateOut(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 200
            }
        })
    ]);
}


/***/ }),

/***/ "YkuP":
/*!****************************************************************!*\
  !*** ./animation-lib/fading-entrances/fade-in-up.animation.ts ***!
  \****************************************************************/
/*! exports provided: fadeInUpAnimation, fadeInUpOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return fadeInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpOnEnterAnimation", function() { return fadeInUpOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeInUp = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, transform: 'translate3d(0, {{translate}}, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeInUpAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function fadeInUpOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInUpOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "ZL2U":
/*!*****************************************************!*\
  !*** ./animation-lib/other/hue-rotate.animation.ts ***!
  \*****************************************************/
/*! exports provided: hueRotateAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hueRotateAnimation", function() { return hueRotateAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const hueRotate = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ filter: 'hue-rotate(0deg)', offset: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ filter: 'hue-rotate(-360deg)', offset: 1 })]))
]);
const DEFAULT_DURATION = 3000;
function hueRotateAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'hueRotate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 <=> 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(hueRotate())]), {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "aJPn":
/*!*******************************************************!*\
  !*** ./animation-lib/flippers/flip-in-x.animation.ts ***!
  \*******************************************************/
/*! exports provided: flipInXAnimation, flipInXOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipInXAnimation", function() { return flipInXAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipInXOnEnterAnimation", function() { return flipInXOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const flipInX = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            visibility: 'visible',
            transform: 'perspective(400px) rotate3d(1, 0, 0, {{degrees}}deg)',
            opacity: 0,
            easing: 'ease-in',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 0.5, easing: 'ease-in', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: 1, easing: 'ease-in', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', easing: 'ease', offset: 0.8 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function flipInXAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'flipInX', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'backface-visibility': 'visible' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(flipInX(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 90
            }
        })
    ]);
}
function flipInXOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'flipInXOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'backface-visibility': 'visible' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(flipInX(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 90
            }
        })
    ]);
}


/***/ }),

/***/ "aiOw":
/*!******************************************************************!*\
  !*** ./animation-lib/attention-seekers/rubber-band.animation.ts ***!
  \******************************************************************/
/*! exports provided: rubberBandAnimation, rubberBandOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rubberBandAnimation", function() { return rubberBandAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rubberBandOnEnterAnimation", function() { return rubberBandOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const rubberBand = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.25, 0.75, 1)', easing: 'ease', offset: 0.3 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.75, 1.25, 1)', easing: 'ease', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.15, 0.85, 1)', easing: 'ease', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.95, 1.05, 1)', easing: 'ease', offset: 0.65 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.05, 0.95, 1)', easing: 'ease', offset: 0.75 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function rubberBandAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rubberBand', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`0 ${(options && options.direction) || '<=>'} 1`, [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rubberBand(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function rubberBandOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rubberBandOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rubberBand(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "amXY":
/*!**********************************************************************!*\
  !*** ./animation-lib/fading-entrances/fade-in-left-big.animation.ts ***!
  \**********************************************************************/
/*! exports provided: fadeInLeftBigAnimation, fadeInLeftBigOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftBigAnimation", function() { return fadeInLeftBigAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftBigOnEnterAnimation", function() { return fadeInLeftBigOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeInLeftBig = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeInLeftBigAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInLeftBig', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInLeftBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}
function fadeInLeftBigOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInLeftBigOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInLeftBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}


/***/ }),

/***/ "b4XA":
/*!******************************************************************!*\
  !*** ./animation-lib/fading-entrances/fade-in-down.animation.ts ***!
  \******************************************************************/
/*! exports provided: fadeInDownAnimation, fadeInDownOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInDownAnimation", function() { return fadeInDownAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInDownOnEnterAnimation", function() { return fadeInDownOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeInDown = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeInDownAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function fadeInDownOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInDownOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "cKuO":
/*!********************************************************************!*\
  !*** ./animation-lib/sliding-entrances/slide-in-left.animation.ts ***!
  \********************************************************************/
/*! exports provided: slideInLeftAnimation, slideInLeftOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInLeftAnimation", function() { return slideInLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInLeftOnEnterAnimation", function() { return slideInLeftOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const slideInLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function slideInLeftAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideInLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function slideInLeftOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideInLeftOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideInLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "ckVX":
/*!*****************************************************************!*\
  !*** ./animation-lib/sliding-exits/slide-out-left.animation.ts ***!
  \*****************************************************************/
/*! exports provided: slideOutLeftAnimation, slideOutLeftOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutLeftAnimation", function() { return slideOutLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutLeftOnLeaveAnimation", function() { return slideOutLeftOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const slideOutLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-{{translate}}, 0, 0)', visibility: 'hidden', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function slideOutLeftAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideOutLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideOutLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function slideOutLeftOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideOutLeftOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideOutLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "crdd":
/*!************************************************************************!*\
  !*** ./animation-lib/rotating-exits/rotate-out-down-left.animation.ts ***!
  \************************************************************************/
/*! exports provided: rotateOutDownLeftAnimation, rotateOutDownLeftOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOutDownLeftAnimation", function() { return rotateOutDownLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOutDownLeftOnLeaveAnimation", function() { return rotateOutDownLeftOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const rotateOutDownLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'rotate3d(0, 0, 1, {{degrees}}deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function rotateOutDownLeftAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateOutDownLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'left bottom' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateOutDownLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 45
            }
        })
    ]);
}
function rotateOutDownLeftOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateOutDownLeftOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'left bottom' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateOutDownLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 45
            }
        })
    ]);
}


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "R89x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"]] }); })();


/***/ }),

/***/ "d0gC":
/*!***************************************************!*\
  !*** ./animation-lib/specials/hinge.animation.ts ***!
  \***************************************************/
/*! exports provided: hingeAnimation, hingeOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hingeAnimation", function() { return hingeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hingeOnLeaveAnimation", function() { return hingeOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const hinge = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, 'transform-origin': 'top left', transform: 'translate3d(0, 0, 0)', easing: 'ease-in-out', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', offset: 0.8 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, 'transform-origin': 'top left', transform: 'translate3d(0, 700px, 0)', easing: 'ease-in-out', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 2000;
function hingeAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'hinge', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(hinge(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function hingeOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'hingeOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(hinge(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "eAqC":
/*!*****************************************!*\
  !*** ./animation-lib/flippers/index.ts ***!
  \*****************************************/
/*! exports provided: flipInXAnimation, flipInXOnEnterAnimation, flipInYAnimation, flipInYOnEnterAnimation, flipOutXAnimation, flipOutXOnLeaveAnimation, flipOutYAnimation, flipOutYOnLeaveAnimation, flipAnimation, flipOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flip_in_x_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flip-in-x.animation */ "aJPn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipInXAnimation", function() { return _flip_in_x_animation__WEBPACK_IMPORTED_MODULE_0__["flipInXAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipInXOnEnterAnimation", function() { return _flip_in_x_animation__WEBPACK_IMPORTED_MODULE_0__["flipInXOnEnterAnimation"]; });

/* harmony import */ var _flip_in_y_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flip-in-y.animation */ "UKAD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipInYAnimation", function() { return _flip_in_y_animation__WEBPACK_IMPORTED_MODULE_1__["flipInYAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipInYOnEnterAnimation", function() { return _flip_in_y_animation__WEBPACK_IMPORTED_MODULE_1__["flipInYOnEnterAnimation"]; });

/* harmony import */ var _flip_out_x_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flip-out-x.animation */ "XpWQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipOutXAnimation", function() { return _flip_out_x_animation__WEBPACK_IMPORTED_MODULE_2__["flipOutXAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipOutXOnLeaveAnimation", function() { return _flip_out_x_animation__WEBPACK_IMPORTED_MODULE_2__["flipOutXOnLeaveAnimation"]; });

/* harmony import */ var _flip_out_y_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flip-out-y.animation */ "4c8h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipOutYAnimation", function() { return _flip_out_y_animation__WEBPACK_IMPORTED_MODULE_3__["flipOutYAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipOutYOnLeaveAnimation", function() { return _flip_out_y_animation__WEBPACK_IMPORTED_MODULE_3__["flipOutYOnLeaveAnimation"]; });

/* harmony import */ var _flip_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.animation */ "xww9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipAnimation", function() { return _flip_animation__WEBPACK_IMPORTED_MODULE_4__["flipAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipOnEnterAnimation", function() { return _flip_animation__WEBPACK_IMPORTED_MODULE_4__["flipOnEnterAnimation"]; });








/***/ }),

/***/ "eTI0":
/*!***********************************************!*\
  !*** ./animation-lib/rotating-exits/index.ts ***!
  \***********************************************/
/*! exports provided: rotateOutDownLeftAnimation, rotateOutDownLeftOnLeaveAnimation, rotateOutDownRightAnimation, rotateOutDownRightOnLeaveAnimation, rotateOutUpLeftAnimation, rotateOutUpLeftOnLeaveAnimation, rotateOutUpRightAnimation, rotateOutUpRightOnLeaveAnimation, rotateOutAnimation, rotateOutOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rotate_out_down_left_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rotate-out-down-left.animation */ "crdd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutDownLeftAnimation", function() { return _rotate_out_down_left_animation__WEBPACK_IMPORTED_MODULE_0__["rotateOutDownLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutDownLeftOnLeaveAnimation", function() { return _rotate_out_down_left_animation__WEBPACK_IMPORTED_MODULE_0__["rotateOutDownLeftOnLeaveAnimation"]; });

/* harmony import */ var _rotate_out_down_right_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rotate-out-down-right.animation */ "FlM1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutDownRightAnimation", function() { return _rotate_out_down_right_animation__WEBPACK_IMPORTED_MODULE_1__["rotateOutDownRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutDownRightOnLeaveAnimation", function() { return _rotate_out_down_right_animation__WEBPACK_IMPORTED_MODULE_1__["rotateOutDownRightOnLeaveAnimation"]; });

/* harmony import */ var _rotate_out_up_left_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rotate-out-up-left.animation */ "uw9m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpLeftAnimation", function() { return _rotate_out_up_left_animation__WEBPACK_IMPORTED_MODULE_2__["rotateOutUpLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpLeftOnLeaveAnimation", function() { return _rotate_out_up_left_animation__WEBPACK_IMPORTED_MODULE_2__["rotateOutUpLeftOnLeaveAnimation"]; });

/* harmony import */ var _rotate_out_up_right_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rotate-out-up-right.animation */ "DK9Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpRightAnimation", function() { return _rotate_out_up_right_animation__WEBPACK_IMPORTED_MODULE_3__["rotateOutUpRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpRightOnLeaveAnimation", function() { return _rotate_out_up_right_animation__WEBPACK_IMPORTED_MODULE_3__["rotateOutUpRightOnLeaveAnimation"]; });

/* harmony import */ var _rotate_out_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rotate-out.animation */ "YKer");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutAnimation", function() { return _rotate_out_animation__WEBPACK_IMPORTED_MODULE_4__["rotateOutAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateOutOnLeaveAnimation", function() { return _rotate_out_animation__WEBPACK_IMPORTED_MODULE_4__["rotateOutOnLeaveAnimation"]; });








/***/ }),

/***/ "f+3A":
/*!***************************************************************!*\
  !*** ./animation-lib/fading-exits/fade-out-down.animation.ts ***!
  \***************************************************************/
/*! exports provided: fadeOutDownAnimation, fadeOutDownOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownAnimation", function() { return fadeOutDownAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownOnLeaveAnimation", function() { return fadeOutDownOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeOutDown = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(0, {{translate}}, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeOutDownAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function fadeOutDownOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutDownOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "gc4u":
/*!*************************************************************!*\
  !*** ./animation-lib/specials/jack-in-the-box.animation.ts ***!
  \*************************************************************/
/*! exports provided: jackInTheBoxAnimation, jackInTheBoxOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jackInTheBoxAnimation", function() { return jackInTheBoxAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jackInTheBoxOnEnterAnimation", function() { return jackInTheBoxOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const jackInTheBox = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center bottom', transform: 'scale(0.1) rotate(30deg)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center bottom', transform: 'rotate(-10deg)', easing: 'ease', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center bottom', transform: 'rotate(3deg)', easing: 'ease', offset: 0.7 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center bottom', transform: 'scale(1)', easing: 'ease', offset: 1 })
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, offset: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 1 })]))
]));
const DEFAULT_DURATION = 1000;
function jackInTheBoxAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'jackInTheBox', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(jackInTheBox(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function jackInTheBoxOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'jackInTheBoxOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(jackInTheBox(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "gp/y":
/*!***********************************************************************!*\
  !*** ./animation-lib/fading-entrances/fade-in-right-big.animation.ts ***!
  \***********************************************************************/
/*! exports provided: fadeInRightBigAnimation, fadeInRightBigOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRightBigAnimation", function() { return fadeInRightBigAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRightBigOnEnterAnimation", function() { return fadeInRightBigOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeInRightBig = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeInRightBigAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInRightBig', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInRightBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}
function fadeInRightBigOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInRightBigOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInRightBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}


/***/ }),

/***/ "hIjE":
/*!********************************************************************!*\
  !*** ./animation-lib/sliding-entrances/slide-in-down.animation.ts ***!
  \********************************************************************/
/*! exports provided: slideInDownAnimation, slideInDownOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInDownAnimation", function() { return slideInDownAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInDownOnEnterAnimation", function() { return slideInDownOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const slideInDown = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function slideInDownAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideInDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideInDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function slideInDownOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideInDownOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideInDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "ig21":
/*!*******************************************************************!*\
  !*** ./animation-lib/zooming-entrances/zoom-in-down.animation.ts ***!
  \*******************************************************************/
/*! exports provided: zoomInDownAnimation, zoomInDownOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInDownAnimation", function() { return zoomInDownAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInDownOnEnterAnimation", function() { return zoomInDownOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const zoomInDown = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            visibility: 'visible',
            opacity: 0,
            transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
            easing: 'ease',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0.6
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function zoomInDownAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomInDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomInDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function zoomInDownOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomInDownOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomInDown(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "j967":
/*!*************************************************!*\
  !*** ./animation-lib/other/rotate.animation.ts ***!
  \*************************************************/
/*! exports provided: rotateAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateAnimation", function() { return rotateAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const DEFAULT_DURATION = 200;
function rotateAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(0deg)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(' + '{{degrees}}' + 'deg)'
        }), {
            params: {
                degrees: (options && options.degrees) || 180
            }
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [
            ...(options && options.animateChildren === 'before' ? [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })] : []),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease')]),
                ...(!options || !options.animateChildren || options.animateChildren === 'together'
                    ? [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })]
                    : [])
            ]),
            ...(options && options.animateChildren === 'after' ? [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })] : [])
        ], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', [
            ...(options && options.animateChildren === 'before' ? [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })] : []),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease')]),
                ...(!options || !options.animateChildren || options.animateChildren === 'together'
                    ? [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })]
                    : [])
            ]),
            ...(options && options.animateChildren === 'after' ? [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })] : [])
        ], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "jRSS":
/*!*****************************************************************!*\
  !*** ./animation-lib/attention-seekers/heart-beat.animation.ts ***!
  \*****************************************************************/
/*! exports provided: heartBeatAnimation, heartBeatOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heartBeatAnimation", function() { return heartBeatAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heartBeatOnEnterAnimation", function() { return heartBeatOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const heartBeat = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], transform: 'scale(1)', easing: 'ease-in-out', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale({{scale}})', easing: 'ease-in-out', offset: 0.14 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', easing: 'ease-in-out', offset: 0.28 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale({{scale}})', easing: 'ease-in-out', offset: 0.42 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', easing: 'ease-in-out', offset: 0.7 })
    ]))
]);
const DEFAULT_DURATION = 1300;
const DEFAULT_SCALE = 1.3;
function heartBeatAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'heartBeat', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`0 ${(options && options.direction) || '<=>'} 1`, [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(heartBeat(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                scale: (options && options.scale) || DEFAULT_SCALE
            }
        })
    ]);
}
function heartBeatOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'heartBeatOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(heartBeat(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                scale: (options && options.scale) || DEFAULT_SCALE
            }
        })
    ]);
}


/***/ }),

/***/ "jxK0":
/*!************************************************************!*\
  !*** ./animation-lib/attention-seekers/pulse.animation.ts ***!
  \************************************************************/
/*! exports provided: pulseAnimation, pulseOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pulseAnimation", function() { return pulseAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pulseOnEnterAnimation", function() { return pulseOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const pulse = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d({{scale}}, {{scale}}, {{scale}})', easing: 'ease', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function pulseAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'pulse', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`0 ${(options && options.direction) || '<=>'} 1`, [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(pulse(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                scale: (options && options.scale) || 1.05
            }
        })
    ]);
}
function pulseOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'pulseOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(pulse(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                scale: (options && options.scale) || 1.05
            }
        })
    ]);
}


/***/ }),

/***/ "kRow":
/*!********************************************************************!*\
  !*** ./animation-lib/fading-exits/fade-out-right-big.animation.ts ***!
  \********************************************************************/
/*! exports provided: fadeOutRightBigAnimation, fadeOutRightBigOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightBigAnimation", function() { return fadeOutRightBigAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightBigOnLeaveAnimation", function() { return fadeOutRightBigOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeOutRightBig = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeOutRightBigAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutRightBig', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutRightBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}
function fadeOutRightBigOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutRightBigOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutRightBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}


/***/ }),

/***/ "lTOO":
/*!*******************************************************************!*\
  !*** ./animation-lib/zooming-entrances/zoom-in-left.animation.ts ***!
  \*******************************************************************/
/*! exports provided: zoomInLeftAnimation, zoomInLeftOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInLeftAnimation", function() { return zoomInLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInLeftOnEnterAnimation", function() { return zoomInLeftOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const zoomInLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            visibility: 'visible',
            opacity: 0,
            transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-3000px, 0, 0)',
            easing: 'ease',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0.6
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function zoomInLeftAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomInLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function zoomInLeftOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomInLeftOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomInLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "lxRF":
/*!*****************************************!*\
  !*** ./animation-lib/specials/index.ts ***!
  \*****************************************/
/*! exports provided: hingeAnimation, hingeOnLeaveAnimation, jackInTheBoxAnimation, jackInTheBoxOnEnterAnimation, rollInAnimation, rollInOnEnterAnimation, rollOutAnimation, rollOutOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hinge_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hinge.animation */ "d0gC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hingeAnimation", function() { return _hinge_animation__WEBPACK_IMPORTED_MODULE_0__["hingeAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hingeOnLeaveAnimation", function() { return _hinge_animation__WEBPACK_IMPORTED_MODULE_0__["hingeOnLeaveAnimation"]; });

/* harmony import */ var _jack_in_the_box_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jack-in-the-box.animation */ "gc4u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jackInTheBoxAnimation", function() { return _jack_in_the_box_animation__WEBPACK_IMPORTED_MODULE_1__["jackInTheBoxAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jackInTheBoxOnEnterAnimation", function() { return _jack_in_the_box_animation__WEBPACK_IMPORTED_MODULE_1__["jackInTheBoxOnEnterAnimation"]; });

/* harmony import */ var _roll_in_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roll-in.animation */ "0Y9N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollInAnimation", function() { return _roll_in_animation__WEBPACK_IMPORTED_MODULE_2__["rollInAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollInOnEnterAnimation", function() { return _roll_in_animation__WEBPACK_IMPORTED_MODULE_2__["rollInOnEnterAnimation"]; });

/* harmony import */ var _roll_out_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roll-out.animation */ "veCn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollOutAnimation", function() { return _roll_out_animation__WEBPACK_IMPORTED_MODULE_3__["rollOutAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollOutOnLeaveAnimation", function() { return _roll_out_animation__WEBPACK_IMPORTED_MODULE_3__["rollOutOnLeaveAnimation"]; });







/***/ }),

/***/ "mwt6":
/*!******************************************************************!*\
  !*** ./animation-lib/sliding-exits/slide-out-right.animation.ts ***!
  \******************************************************************/
/*! exports provided: slideOutRightAnimation, slideOutRightOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutRightAnimation", function() { return slideOutRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutRightOnLeaveAnimation", function() { return slideOutRightOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const slideOutRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d({{translate}}, 0, 0)', visibility: 'hidden', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function slideOutRightAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideOutRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideOutRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function slideOutRightOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideOutRightOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideOutRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "nIsS":
/*!***************************************************!*\
  !*** ./animation-lib/other/collapse.animation.ts ***!
  \***************************************************/
/*! exports provided: collapseAnimation, collapseHorizontallyAnimation, expandOnEnterAnimation, expandRightOnEnterAnimation, collapseOnLeaveAnimation, collapseLeftOnLeaveAnimation, fadeInExpandOnEnterAnimation, fadeInExpandRightOnEnterAnimation, fadeOutCollapseOnLeaveAnimation, fadeOutCollapseLeftOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseAnimation", function() { return collapseAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseHorizontallyAnimation", function() { return collapseHorizontallyAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandOnEnterAnimation", function() { return expandOnEnterAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandRightOnEnterAnimation", function() { return expandRightOnEnterAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseOnLeaveAnimation", function() { return collapseOnLeaveAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseLeftOnLeaveAnimation", function() { return collapseLeftOnLeaveAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInExpandOnEnterAnimation", function() { return fadeInExpandOnEnterAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInExpandRightOnEnterAnimation", function() { return fadeInExpandRightOnEnterAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutCollapseOnLeaveAnimation", function() { return fadeOutCollapseOnLeaveAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutCollapseLeftOnLeaveAnimation", function() { return fadeOutCollapseLeftOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");
/* harmony import */ var _common_animate_including_children__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/animate-including-children */ "IlgX");



const DEFAULT_DURATION = 200;
function collapseAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'collapse', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '0',
            visibility: 'hidden',
            overflow: 'hidden'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"],
            visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"],
            overflow: 'hidden'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_animate_including_children__WEBPACK_IMPORTED_MODULE_2__["animateIncludingChildren"])('ease-in', options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', [...Object(_common_animate_including_children__WEBPACK_IMPORTED_MODULE_2__["animateIncludingChildren"])('ease-out', options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function collapseHorizontallyAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'collapseHorizontally', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            width: '0',
            visibility: 'hidden',
            overflow: 'hidden'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            width: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"],
            visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"],
            overflow: 'hidden'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_animate_including_children__WEBPACK_IMPORTED_MODULE_2__["animateIncludingChildren"])('ease-in', options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', [...Object(_common_animate_including_children__WEBPACK_IMPORTED_MODULE_2__["animateIncludingChildren"])('ease-out', options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
const expand = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', visibility: 'hidden', overflow: 'hidden', easing: 'ease-out', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], overflow: 'hidden', easing: 'ease-out', offset: 1 })
])));
const expandRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '0', visibility: 'hidden', overflow: 'hidden', easing: 'ease-out', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], overflow: 'hidden', easing: 'ease-out', offset: 1 })
])));
const fadeInExpand = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', opacity: 0, visibility: 'hidden', overflow: 'hidden', easing: 'ease-out', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], opacity: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], overflow: 'hidden', easing: 'ease-out', offset: 1 })
])));
const fadeInExpandRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '0', opacity: 0, visibility: 'hidden', overflow: 'hidden', easing: 'ease-out', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], opacity: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], overflow: 'hidden', easing: 'ease-out', offset: 1 })
])));
const collapse = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], overflow: 'hidden', easing: 'ease-in', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', visibility: 'hidden', overflow: 'hidden', easing: 'ease-in', offset: 1 })
])));
const collapseLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], overflow: 'hidden', easing: 'ease-in', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '0', visibility: 'hidden', overflow: 'hidden', easing: 'ease-in', offset: 1 })
])));
const fadeOutCollapse = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], opacity: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], overflow: 'hidden', easing: 'ease-in', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', opacity: 0, visibility: 'hidden', overflow: 'hidden', easing: 'ease-in', offset: 1 })
])));
const fadeOutCollapseLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], opacity: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], overflow: 'hidden', easing: 'ease-in', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '0', opacity: 0, visibility: 'hidden', overflow: 'hidden', easing: 'ease-in', offset: 1 })
])));
function expandOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'expandOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(expand(), options)]), {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function expandRightOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'expandRightOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(expandRight(), options)]), {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function collapseOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'collapseOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(collapse(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function collapseLeftOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'collapseLeftOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(collapseLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function fadeInExpandOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInExpandOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInExpand(), options)]), {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function fadeInExpandRightOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInExpandRightOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInExpandRight(), options)]), {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function fadeOutCollapseOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutCollapseOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutCollapse(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function fadeOutCollapseLeftOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutCollapseLeftOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutCollapseLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "o0c7":
/*!*****************************************************************!*\
  !*** ./animation-lib/fading-exits/fade-out-up-big.animation.ts ***!
  \*****************************************************************/
/*! exports provided: fadeOutUpBigAnimation, fadeOutUpBigOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpBigAnimation", function() { return fadeOutUpBigAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpBigOnLeaveAnimation", function() { return fadeOutUpBigOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeOutUpBig = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeOutUpBigAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutUpBig', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutUpBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}
function fadeOutUpBigOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutUpBigOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutUpBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}


/***/ }),

/***/ "oRgV":
/*!*************************************************************!*\
  !*** ./animation-lib/fading-exits/fade-out-up.animation.ts ***!
  \*************************************************************/
/*! exports provided: fadeOutUpAnimation, fadeOutUpOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpAnimation", function() { return fadeOutUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpOnLeaveAnimation", function() { return fadeOutUpOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeOutUp = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeOutUpAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function fadeOutUpOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeOutUpOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeOutUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "pHdD":
/*!***********************************************************!*\
  !*** ./animation-lib/attention-seekers/tada.animation.ts ***!
  \***********************************************************/
/*! exports provided: tadaAnimation, tadaOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tadaAnimation", function() { return tadaAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tadaOnEnterAnimation", function() { return tadaOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const tada = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.3 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.7 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.8 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.9 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function tadaAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'tada', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`0 ${(options && options.direction) || '<=>'} 1`, [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(tada(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function tadaOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'tadaOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(tada(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "peKV":
/*!************************************************************!*\
  !*** ./animation-lib/attention-seekers/shake.animation.ts ***!
  \************************************************************/
/*! exports provided: shakeAnimation, shakeOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shakeAnimation", function() { return shakeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shakeOnEnterAnimation", function() { return shakeOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const shake = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.3 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.7 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0.8 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.9 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function shakeAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'shake', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`0 ${(options && options.direction) || '<=>'} 1`, [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(shake(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '10px'
            }
        })
    ]);
}
function shakeOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'shakeOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(shake(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '10px'
            }
        })
    ]);
}


/***/ }),

/***/ "poE4":
/*!****************************************************************************!*\
  !*** ./animation-lib/rotating-entrances/rotate-in-down-right.animation.ts ***!
  \****************************************************************************/
/*! exports provided: rotateInDownRightAnimation, rotateInDownRightOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateInDownRightAnimation", function() { return rotateInDownRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateInDownRightOnEnterAnimation", function() { return rotateInDownRightOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const rotateInDownRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, transform: 'rotate3d(0, 0, 1, {{degrees}}deg)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function rotateInDownRightAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateInDownRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'right bottom' }),
            ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateInDownRight(), options)
        ], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 45
            }
        })
    ]);
}
function rotateInDownRightOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateInDownRightOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'right bottom' }),
            ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateInDownRight(), options)
        ], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 45
            }
        })
    ]);
}


/***/ }),

/***/ "pzG/":
/*!**************************************************!*\
  !*** ./animation-lib/sliding-entrances/index.ts ***!
  \**************************************************/
/*! exports provided: slideInDownAnimation, slideInDownOnEnterAnimation, slideInLeftAnimation, slideInLeftOnEnterAnimation, slideInRightAnimation, slideInRightOnEnterAnimation, slideInUpAnimation, slideInUpOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slide_in_down_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide-in-down.animation */ "hIjE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInDownAnimation", function() { return _slide_in_down_animation__WEBPACK_IMPORTED_MODULE_0__["slideInDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInDownOnEnterAnimation", function() { return _slide_in_down_animation__WEBPACK_IMPORTED_MODULE_0__["slideInDownOnEnterAnimation"]; });

/* harmony import */ var _slide_in_left_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide-in-left.animation */ "cKuO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInLeftAnimation", function() { return _slide_in_left_animation__WEBPACK_IMPORTED_MODULE_1__["slideInLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInLeftOnEnterAnimation", function() { return _slide_in_left_animation__WEBPACK_IMPORTED_MODULE_1__["slideInLeftOnEnterAnimation"]; });

/* harmony import */ var _slide_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slide-in-right.animation */ "11jG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInRightAnimation", function() { return _slide_in_right_animation__WEBPACK_IMPORTED_MODULE_2__["slideInRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInRightOnEnterAnimation", function() { return _slide_in_right_animation__WEBPACK_IMPORTED_MODULE_2__["slideInRightOnEnterAnimation"]; });

/* harmony import */ var _slide_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide-in-up.animation */ "sGT7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInUpAnimation", function() { return _slide_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["slideInUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInUpOnEnterAnimation", function() { return _slide_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["slideInUpOnEnterAnimation"]; });







/***/ }),

/***/ "qHNY":
/*!*************************************************************!*\
  !*** ./animation-lib/attention-seekers/bounce.animation.ts ***!
  \*************************************************************/
/*! exports provided: bounceAnimation, bounceOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceAnimation", function() { return bounceAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOnEnterAnimation", function() { return bounceOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const bounce = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -30px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -30px, 0)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', offset: 0.43 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', offset: 0.53 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -15px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.7 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', offset: 0.8 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -4px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function bounceAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounce', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`0 ${(options && options.direction) || '<=>'} 1`, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center bottom' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounce(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function bounceOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'bounceOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center bottom' }),
            ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(bounce(), options)
        ], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "qvEJ":
/*!**************************************************************!*\
  !*** ./animation-lib/zooming-entrances/zoom-in.animation.ts ***!
  \**************************************************************/
/*! exports provided: zoomInAnimation, zoomInOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInAnimation", function() { return zoomInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInOnEnterAnimation", function() { return zoomInOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const zoomIn = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 1 })
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
    ]))
]));
const DEFAULT_DURATION = 1000;
function zoomInAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomIn(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function zoomInOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomInOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomIn(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "qvjF":
/*!**********************************************!*\
  !*** ./animation-lib/zooming-exits/index.ts ***!
  \**********************************************/
/*! exports provided: zoomOutDownAnimation, zoomOutDownOnLeaveAnimation, zoomOutLeftAnimation, zoomOutLeftOnLeaveAnimation, zoomOutRightAnimation, zoomOutRightOnLeaveAnimation, zoomOutUpAnimation, zoomOutUpOnLeaveAnimation, zoomOutAnimation, zoomOutOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zoom_out_down_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom-out-down.animation */ "UBWE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutDownAnimation", function() { return _zoom_out_down_animation__WEBPACK_IMPORTED_MODULE_0__["zoomOutDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutDownOnLeaveAnimation", function() { return _zoom_out_down_animation__WEBPACK_IMPORTED_MODULE_0__["zoomOutDownOnLeaveAnimation"]; });

/* harmony import */ var _zoom_out_left_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zoom-out-left.animation */ "LPu0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutLeftAnimation", function() { return _zoom_out_left_animation__WEBPACK_IMPORTED_MODULE_1__["zoomOutLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutLeftOnLeaveAnimation", function() { return _zoom_out_left_animation__WEBPACK_IMPORTED_MODULE_1__["zoomOutLeftOnLeaveAnimation"]; });

/* harmony import */ var _zoom_out_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zoom-out-right.animation */ "TC63");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutRightAnimation", function() { return _zoom_out_right_animation__WEBPACK_IMPORTED_MODULE_2__["zoomOutRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutRightOnLeaveAnimation", function() { return _zoom_out_right_animation__WEBPACK_IMPORTED_MODULE_2__["zoomOutRightOnLeaveAnimation"]; });

/* harmony import */ var _zoom_out_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zoom-out-up.animation */ "Omkp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutUpAnimation", function() { return _zoom_out_up_animation__WEBPACK_IMPORTED_MODULE_3__["zoomOutUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutUpOnLeaveAnimation", function() { return _zoom_out_up_animation__WEBPACK_IMPORTED_MODULE_3__["zoomOutUpOnLeaveAnimation"]; });

/* harmony import */ var _zoom_out_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zoom-out.animation */ "DLkU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutAnimation", function() { return _zoom_out_animation__WEBPACK_IMPORTED_MODULE_4__["zoomOutAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutOnLeaveAnimation", function() { return _zoom_out_animation__WEBPACK_IMPORTED_MODULE_4__["zoomOutOnLeaveAnimation"]; });








/***/ }),

/***/ "r1L9":
/*!********************************************************************!*\
  !*** ./animation-lib/zooming-entrances/zoom-in-right.animation.ts ***!
  \********************************************************************/
/*! exports provided: zoomInRightAnimation, zoomInRightOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInRightAnimation", function() { return zoomInRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInRightOnEnterAnimation", function() { return zoomInRightOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const zoomInRight = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            visibility: 'visible',
            opacity: 0,
            transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
            easing: 'ease',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0.6
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function zoomInRightAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomInRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomInRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function zoomInRightOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'zoomInRightOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(zoomInRight(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "rdji":
/*!*****************************************************************!*\
  !*** ./animation-lib/rotating-entrances/rotate-in.animation.ts ***!
  \*****************************************************************/
/*! exports provided: rotateInAnimation, rotateInOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateInAnimation", function() { return rotateInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateInOnEnterAnimation", function() { return rotateInOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const rotateIn = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, transform: 'rotate({{degrees}}deg)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'rotate(0deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function rotateInAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateIn(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || -200
            }
        })
    ]);
}
function rotateInOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateInOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'center' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateIn(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || -200
            }
        })
    ]);
}


/***/ }),

/***/ "sGT7":
/*!******************************************************************!*\
  !*** ./animation-lib/sliding-entrances/slide-in-up.animation.ts ***!
  \******************************************************************/
/*! exports provided: slideInUpAnimation, slideInUpOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInUpAnimation", function() { return slideInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInUpOnEnterAnimation", function() { return slideInUpOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const slideInUp = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', transform: 'translate3d(0, {{translate}}, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function slideInUpAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideInUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function slideInUpOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'slideInUpOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(slideInUp(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "tw/j":
/*!*************************************************************************!*\
  !*** ./animation-lib/rotating-entrances/rotate-in-up-left.animation.ts ***!
  \*************************************************************************/
/*! exports provided: rotateInUpLeftAnimation, rotateInUpLeftOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateInUpLeftAnimation", function() { return rotateInUpLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateInUpLeftOnEnterAnimation", function() { return rotateInUpLeftOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const rotateInUpLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, transform: 'rotate3d(0, 0, 1, {{degrees}}deg)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function rotateInUpLeftAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateInUpLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'left bottom' }),
            ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateInUpLeft(), options)
        ], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 45
            }
        })
    ]);
}
function rotateInUpLeftOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateInUpLeftOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'left bottom' }),
            ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateInUpLeft(), options)
        ], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 45
            }
        })
    ]);
}


/***/ }),

/***/ "u+je":
/*!**********************************************************************!*\
  !*** ./animation-lib/fading-entrances/fade-in-down-big.animation.ts ***!
  \**********************************************************************/
/*! exports provided: fadeInDownBigAnimation, fadeInDownBigOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInDownBigAnimation", function() { return fadeInDownBigAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInDownBigOnEnterAnimation", function() { return fadeInDownBigOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeInDownBig = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeInDownBigAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInDownBig', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInDownBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}
function fadeInDownBigOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInDownBigOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInDownBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}


/***/ }),

/***/ "uw9m":
/*!**********************************************************************!*\
  !*** ./animation-lib/rotating-exits/rotate-out-up-left.animation.ts ***!
  \**********************************************************************/
/*! exports provided: rotateOutUpLeftAnimation, rotateOutUpLeftOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpLeftAnimation", function() { return rotateOutUpLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpLeftOnLeaveAnimation", function() { return rotateOutUpLeftOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const rotateOutUpLeft = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'rotate3d(0, 0, 1, {{degrees}}deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function rotateOutUpLeftAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateOutUpLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'left bottom' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateOutUpLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || -45
            }
        })
    ]);
}
function rotateOutUpLeftOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rotateOutUpLeftOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform-origin': 'left bottom' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rotateOutUpLeft(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || -45
            }
        })
    ]);
}


/***/ }),

/***/ "vIXp":
/*!********************************************!*\
  !*** ./animation-lib/light-speed/index.ts ***!
  \********************************************/
/*! exports provided: lightSpeedInAnimation, lightSpeedInOnEnterAnimation, lightSpeedOutAnimation, lightSpeedOutOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _light_speed_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./light-speed-in.animation */ "VEyN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightSpeedInAnimation", function() { return _light_speed_in_animation__WEBPACK_IMPORTED_MODULE_0__["lightSpeedInAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightSpeedInOnEnterAnimation", function() { return _light_speed_in_animation__WEBPACK_IMPORTED_MODULE_0__["lightSpeedInOnEnterAnimation"]; });

/* harmony import */ var _light_speed_out_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light-speed-out.animation */ "YH/L");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightSpeedOutAnimation", function() { return _light_speed_out_animation__WEBPACK_IMPORTED_MODULE_1__["lightSpeedOutAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightSpeedOutOnLeaveAnimation", function() { return _light_speed_out_animation__WEBPACK_IMPORTED_MODULE_1__["lightSpeedOutOnLeaveAnimation"]; });





/***/ }),

/***/ "veCn":
/*!******************************************************!*\
  !*** ./animation-lib/specials/roll-out.animation.ts ***!
  \******************************************************/
/*! exports provided: rollOutAnimation, rollOutOnLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollOutAnimation", function() { return rollOutAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollOutOnLeaveAnimation", function() { return rollOutOnLeaveAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const rollOut = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d({{translate}}, 0, 0) rotate3d(0, 0, 1, {{degrees}}deg)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function rollOutAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rollOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rollOut(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 120,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}
function rollOutOnLeaveAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'rollOutOnLeave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(rollOut(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                degrees: (options && options.degrees) || 120,
                translate: (options && options.translate) || '100%'
            }
        })
    ]);
}


/***/ }),

/***/ "xSgM":
/*!*************************************************************!*\
  !*** ./animation-lib/fading-entrances/fade-in.animation.ts ***!
  \*************************************************************/
/*! exports provided: fadeInAnimation, fadeInOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return fadeInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOnEnterAnimation", function() { return fadeInOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeIn = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, easing: 'ease', offset: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, easing: 'ease', offset: 1 })]))
]);
const DEFAULT_DURATION = 1000;
function fadeInAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeIn(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function fadeInOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeIn(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "xww9":
/*!**************************************************!*\
  !*** ./animation-lib/flippers/flip.animation.ts ***!
  \**************************************************/
/*! exports provided: flipAnimation, flipOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipAnimation", function() { return flipAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipOnEnterAnimation", function() { return flipOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const flip = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
            easing: 'ease-out',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
            easing: 'ease-out',
            offset: 0.4
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
            easing: 'ease-out',
            offset: 0.5
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
            easing: 'ease-in',
            offset: 0.8
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
            easing: 'ease-in',
            offset: 1
        })
    ]))
]);
const DEFAULT_DURATION = 1000;
function flipAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'flip', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 <=> 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'backface-visibility': 'visible' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(flip(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}
function flipOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'flipOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'backface-visibility': 'visible' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(flip(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
    ]);
}


/***/ }),

/***/ "y56q":
/*!******************************************************************!*\
  !*** ./animation-lib/common/use-animation-including-children.ts ***!
  \******************************************************************/
/*! exports provided: useAnimationIncludingChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimationIncludingChildren", function() { return useAnimationIncludingChildren; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

function useAnimationIncludingChildren(animation, options) {
    return [
        ...(options && options.animateChildren === 'before' ? [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })] : []),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(animation),
            ...(!options || !options.animateChildren || options.animateChildren === 'together'
                ? [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })]
                : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })] : [])
    ];
}


/***/ }),

/***/ "z8Ed":
/*!********************************************************************!*\
  !*** ./animation-lib/fading-entrances/fade-in-up-big.animation.ts ***!
  \********************************************************************/
/*! exports provided: fadeInUpBigAnimation, fadeInUpBigOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpBigAnimation", function() { return fadeInUpBigAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpBigOnEnterAnimation", function() { return fadeInUpBigOnEnterAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/use-animation-including-children */ "y56q");


const fadeInUpBig = () => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}}ms {{delay}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', opacity: 0, transform: 'translate3d(0, {{translate}}, 0)', easing: 'ease', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ]))
]);
const DEFAULT_DURATION = 1000;
function fadeInUpBigAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInUpBig', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInUpBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}
function fadeInUpBigOnEnterAnimation(options) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])((options && options.anchor) || 'fadeInUpBigOnEnter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden' }), ...Object(_common_use_animation_including_children__WEBPACK_IMPORTED_MODULE_1__["useAnimationIncludingChildren"])(fadeInUpBig(), options)], {
            params: {
                delay: (options && options.delay) || 0,
                duration: (options && options.duration) || DEFAULT_DURATION,
                translate: (options && options.translate) || '2000px'
            }
        })
    ]);
}


/***/ }),

/***/ "zXnb":
/*!*************************************************!*\
  !*** ./animation-lib/fading-entrances/index.ts ***!
  \*************************************************/
/*! exports provided: fadeInDownBigAnimation, fadeInDownBigOnEnterAnimation, fadeInDownAnimation, fadeInDownOnEnterAnimation, fadeInLeftBigAnimation, fadeInLeftBigOnEnterAnimation, fadeInLeftAnimation, fadeInLeftOnEnterAnimation, fadeInRightBigAnimation, fadeInRightBigOnEnterAnimation, fadeInRightAnimation, fadeInRightOnEnterAnimation, fadeInUpBigAnimation, fadeInUpBigOnEnterAnimation, fadeInUpAnimation, fadeInUpOnEnterAnimation, fadeInAnimation, fadeInOnEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fade_in_down_big_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fade-in-down-big.animation */ "u+je");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInDownBigAnimation", function() { return _fade_in_down_big_animation__WEBPACK_IMPORTED_MODULE_0__["fadeInDownBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInDownBigOnEnterAnimation", function() { return _fade_in_down_big_animation__WEBPACK_IMPORTED_MODULE_0__["fadeInDownBigOnEnterAnimation"]; });

/* harmony import */ var _fade_in_down_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fade-in-down.animation */ "b4XA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInDownAnimation", function() { return _fade_in_down_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInDownAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInDownOnEnterAnimation", function() { return _fade_in_down_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInDownOnEnterAnimation"]; });

/* harmony import */ var _fade_in_left_big_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fade-in-left-big.animation */ "amXY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftBigAnimation", function() { return _fade_in_left_big_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInLeftBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftBigOnEnterAnimation", function() { return _fade_in_left_big_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInLeftBigOnEnterAnimation"]; });

/* harmony import */ var _fade_in_left_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fade-in-left.animation */ "C07I");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftAnimation", function() { return _fade_in_left_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInLeftAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftOnEnterAnimation", function() { return _fade_in_left_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInLeftOnEnterAnimation"]; });

/* harmony import */ var _fade_in_right_big_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fade-in-right-big.animation */ "gp/y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInRightBigAnimation", function() { return _fade_in_right_big_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInRightBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInRightBigOnEnterAnimation", function() { return _fade_in_right_big_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInRightBigOnEnterAnimation"]; });

/* harmony import */ var _fade_in_right_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fade-in-right.animation */ "JShl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInRightAnimation", function() { return _fade_in_right_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInRightAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInRightOnEnterAnimation", function() { return _fade_in_right_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInRightOnEnterAnimation"]; });

/* harmony import */ var _fade_in_up_big_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fade-in-up-big.animation */ "z8Ed");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInUpBigAnimation", function() { return _fade_in_up_big_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInUpBigAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInUpBigOnEnterAnimation", function() { return _fade_in_up_big_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInUpBigOnEnterAnimation"]; });

/* harmony import */ var _fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fade-in-up.animation */ "YkuP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return _fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__["fadeInUpAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInUpOnEnterAnimation", function() { return _fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__["fadeInUpOnEnterAnimation"]; });

/* harmony import */ var _fade_in_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fade-in.animation */ "xSgM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return _fade_in_animation__WEBPACK_IMPORTED_MODULE_8__["fadeInAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInOnEnterAnimation", function() { return _fade_in_animation__WEBPACK_IMPORTED_MODULE_8__["fadeInOnEnterAnimation"]; });












/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map