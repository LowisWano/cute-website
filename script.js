$(function() {
    const messages = [
      "Pislita yes, don't press no plsplsplspls",
      "Are you sure you don't want to press yes?",
      "Maybe you should reconsider pressing no",
      "Pressing no might not be the best choice",
      "Mangluod ko ron hmp",
      "yeleul keullighae juseyo",
      "'예'를 누르지 않으시겠어요?",
      "cute lage imong makita if mo press kag yes, promise!",
      "jeog-i uli salm-e michineun yeonghyang-e daehae yaegihaebobsida",
      "Ang dili mo click ug yes hagbong sa calc",
      "Magabaan ang mo click ug no!",
      "cute lage imong makita if mo press kag yes, promise!",
      "Mangluod ko ron hmp",
      "Mangluod ko ron hmp",
      "Ang dili mo click ug yes hagbong sa calc",
      "Ang dili mo click ug yes hagbong sa calc",
      "yeoboseyo ?? I told u to click yes > . < ",
      "chuckles lightly (⁠ ⁠◜⁠‿⁠◝⁠ ⁠)⁠♡ oh arasso, i mean okay ah .... ne",
      "chuckles lightly (⁠ ⁠◜⁠‿⁠◝⁠ ⁠)⁠♡ oh arasso, i mean okay ah .... ne",
      "chuckles lightly (⁠ ⁠◜⁠‿⁠◝⁠ ⁠)⁠♡ oh arasso, i mean okay ah .... ne",
      "aish...ottoke"
    ];

    $(".no").on({
        mouseover: function() {
            $(this).css({
                left: (Math.random() * 200) + "px",
                top: (Math.random() * 200) + "px",
            });
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            $("p").text(randomMessage);
        }
    });
});

document.querySelector('.yes').addEventListener("click", ()=>{
    window.location.href = "happyBday.html";
})


    tsParticles.load("tsparticles", {
        "fullScreen": {
            "zIndex": 1
        },
        "emitters": [
            {
                "position": {
                    "x": 0,
                    "y": 30
                },
                "rate": {
                    "quantity": 5,
                    "delay": 0.15
                },
                "particles": {
                    "move": {
                        "direction": "top-right",
                        "outModes": {
                            "top": "none",
                            "left": "none",
                            "default": "destroy"
                        }
                    }
                }
            },
            {
                "position": {
                    "x": 100,
                    "y": 30
                },
                "rate": {
                    "quantity": 5,
                    "delay": 0.15
                },
                "particles": {
                    "move": {
                        "direction": "top-left",
                        "outModes": {
                            "top": "none",
                            "right": "none",
                            "default": "destroy"
                        }
                    }
                }
            }
        ],
        "particles": {
            "color": {
                "value": [
                    "#ffffff",
                    "#FF0000"
                ]
            },
            "move": {
                "decay": 0.05,
                "direction": "top",
                "enable": true,
                "gravity": {
                    "enable": true
                },
                "outModes": {
                    "top": "none",
                    "default": "destroy"
                },
                "speed": {
                    "min": 10,
                    "max": 50
                }
            },
            "number": {
                "value": 0
            },
            "opacity": {
                "value": 1
            },
            "rotate": {
                "value": {
                    "min": 0,
                    "max": 360
                },
                "direction": "random",
                "animation": {
                    "enable": true,
                    "speed": 30
                }
            },
            "tilt": {
                "direction": "random",
                "enable": true,
                "value": {
                    "min": 0,
                    "max": 360
                },
                "animation": {
                    "enable": true,
                    "speed": 30
                }
            },
            "size": {
                "value": {
                    "min": 0,
                    "max": 2
                },
                "animation": {
                    "enable": true,
                    "startValue": "min",
                    "count": 1,
                    "speed": 16,
                    "sync": true
                }
            },
            "roll": {
                "darken": {
                    "enable": true,
                    "value": 25
                },
                "enable": true,
                "speed": {
                    "min": 5,
                    "max": 15
                }
            },
            "wobble": {
                "distance": 30,
                "enable": true,
                "speed": {
                    "min": -7,
                    "max": 7
                }
            },
            "shape": {
                "type": [
                    "circle",
                    "square",
                    "triangle",
                    "polygon"
                ],
                "options": {
                    "polygon": [
                        {
                            "sides": 5
                        },
                        {
                            "sides": 6
                        }
                    ]
                }
            }
        }
    });

