function generateGreeting() {
  const name = document.getElementById("nameInput").value;
  const canvas = document.getElementById("greetingCanvas");
  const ctx = canvas.getContext("2d");

  const image = new Image();
  image.src = 'greeting.jpg'; 

  image.onload = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    ctx.font = "40px Arial";
    ctx.fillStyle = "#ff0000";
    ctx.textAlign = "center";
    ctx.fillText("كل سنة وانت طيب يا " + name, canvas.width / 2, 350);
  };
}
