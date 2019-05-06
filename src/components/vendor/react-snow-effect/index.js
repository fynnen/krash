"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var DEFAULT_HEIGHT = 500;
var DEFAULT_WIDTH = 1600;

var Snow = function(_Component) {
    _inherits(Snow, _Component);

    function Snow(props, context) {
        _classCallCheck(this, Snow);

        var _this = _possibleConstructorReturn(this, (Snow.__proto__ || Object.getPrototypeOf(Snow)).call(this, props, context));

        _this.state = {
            intervalTracker: null,
            canvasCtx: null,
            height: props.height || window.innerHeight || DEFAULT_HEIGHT,
            width: props.width || window.innerWidth || DEFAULT_WIDTH
        };
        return _this;
    }

    _createClass(Snow, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //canvas init
            var canvas = document.getElementsByClassName("react-snow-effect-canvas");
            var ctx = canvas[0].getContext("2d");

            this.setState({
                canvasCtx: ctx
            });

            //canvas dimensions
            var W = this.state.width;
            var H = this.state.height;

            //snowflake particles
            var mp = 25; //max particles
            var particles = [];
            for (var i = 0; i < mp; i++) {
                particles.push({
                    x: Math.random() * W, //x-coordinate
                    y: Math.random() * H, //y-coordinate
                    r: Math.random() * 4 + 1, //radius
                    d: Math.random() * mp //density
                });
            }

            //Lets draw the flakes
            function draw() {
                /*
                ctx.clearRect(0, 0, W, H);

                ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
                ctx.beginPath();
                for (var _i = 0; _i < mp; _i++) {
                    var p = particles[_i];
                    ctx.moveTo(p.x, p.y);
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
                }
                ctx.fill();
                update();
                */
               
               const data='iVBORw0KGgoAAAANSUhEUgAAACYAAAAiCAYAAAAzrKu4AAABeWlDQ1BIRCA3MDktQQAAKM+tkbFKI1EUhr+bxFUxYFiCWohcUMRiItEtNNEmRjCKhUSFJN1kMsaFSXKZXFEfwM5GC9FGUV9BtLGwFAstBEEIPoMgCCIyFlNMs+w2+1Xf+YvD4fwQ0qZSTgSo1bWbn5uRhWJJtrfoIspP0vSaVlNllpYW+TMC3p8QAI8JUylnbf7jeXpn8+Tix8LRQFob/J2uit20QHQAVqVp1UA4gGEpV4M4BBKbWmkQt0DcLRRLIFpAvOr7KxAvF4olCEWAuLuSz0KoD4iVfR8BYlXfJ4GYtW5WIJQDDP8GADpzs3IimUpk+M/UnA0r+BlRu766DMSAfnLMIpkgSYoEGW1vaYBsQ227v6vrWmaUcmyZbdTUhrZdQ87XrVFDjifHkgCFYkn6q9/yCED0PARZ4xRSgxDeDbLyAVxdQ99dkA0dQ/cUXN4r0zWDht8j/5qba7/GfY/OQNuL570NQ/s+fO153ueZ532dQ7gFN843Jqhp4Z43DPMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAX3aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wNS0wNlQxNDoxNTozMi0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNS0wNlQxNDoxNTozMi0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDUtMDZUMTQ6MTU6MzItMDQ6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZjQ2MDFiYzEtNmI4Yy00ODg5LThkOWEtNWZhMmJlNjFmY2UzIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA0ODRkMDEtYjgzNy1jYzQ4LTg1MTEtNWRhY2EzN2Y1NjY0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YjM4Yzk3ZWItNjk1YS00YjJhLWJlMzktOTY5Mzg2NzdlNzUwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkhEIDcwOS1BIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMzhjOTdlYi02OTVhLTRiMmEtYmUzOS05NjkzODY3N2U3NTAiIHN0RXZ0OndoZW49IjIwMTktMDUtMDZUMTQ6MTU6MzItMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmNDYwMWJjMS02YjhjLTQ4ODktOGQ5YS01ZmEyYmU2MWZjZTMiIHN0RXZ0OndoZW49IjIwMTktMDUtMDZUMTQ6MTU6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';

               let EasterIcon = new Image();
               EasterIcon.src = `data:image/jpeg;base64,${data}`;

               ctx.clearRect(0, 0, W, H);
               for (var _i = 0; _i < mp; _i++) {
                var p = particles[_i];
                ctx.drawImage(EasterIcon, p.x, p.y);
              }

              
               update();
/*

               ctx.clearRect(0, 0, W, H);

                ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
                ctx.beginPath();
                for (var _i = 0; _i < mp; _i++) {
                    var p = particles[_i];
                    ctx.moveTo(p.x, p.y);
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
                }
                ctx.fill();
                update();
*/
            }

            //Function to move the snowflakes
            //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
            var angle = 0;

            function update() {
                angle += 0.01;
                for (var _i2 = 0; _i2 < mp; _i2++) {
                    var p = particles[_i2];
                    //Updating X and Y coordinates
                    //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
                    //Every particle has its own density which can be used to make the downward movement different for each flake
                    //Lets make it more random by adding in the radius
                    p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
                    p.x += Math.sin(angle) * 2;

                    //Sending flakes back from the top when it exits
                    //Lets make it a bit more organic and let flakes enter from the left and right also.
                    if (p.x > W + 5 || p.x < -5 || p.y > H) {
                        if (_i2 % 3 > 0) //66.67% of the flakes
                        {
                            particles[_i2] = {
                                x: Math.random() * W,
                                y: -10,
                                r: p.r,
                                d: p.d
                            };
                        } else {
                            //If the flake is exitting from the right
                            if (Math.sin(angle) > 0) {
                                //Enter from the left
                                particles[_i2] = {
                                    x: -5,
                                    y: Math.random() * H,
                                    r: p.r,
                                    d: p.d
                                };
                            } else {
                                //Enter from the right
                                particles[_i2] = {
                                    x: W + 5,
                                    y: Math.random() * H,
                                    r: p.r,
                                    d: p.d
                                };
                            }
                        }
                    }
                }
            }

            this.setState({
                intervalTracker: setInterval(draw, 33)
            });

            //animation loop
            // eslint-disable-next-line no-unused-expressions
            this.state.intervalTracker;
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.state.canvasCtx.clearRect(0, 0, this.state.width, this.state.height);
            clearInterval(this.state.intervalTracker);
        }
    }, {
        key: "render",
        value: function render() {
            var snowStyles = {
                margin: 0,
                padding: 0,
                pointerEvents: 'none',
                position: 'fixed',
                top: 0,
                zIndex: 1
            };

            return _react2.default.createElement("canvas", {
                className: "react-snow-effect-canvas",
                style: snowStyles,
                width: this.state.width,
                height: this.state.height
            });
        }
    }]);

    return Snow;
}(_react.Component);

exports.default = Snow;;
module.exports = exports['default'];