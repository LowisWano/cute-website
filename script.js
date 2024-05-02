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