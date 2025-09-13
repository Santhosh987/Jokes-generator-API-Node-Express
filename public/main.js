document.addEventListener("DOMContentLoaded", () => {
      const btn = document.getElementById("showAnswerBtn");
      const answer = document.getElementById("answer");

      btn.addEventListener("click", () => {
        answer.style.display = "block";
        btn.style.display = "none";
      });
    });