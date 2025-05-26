function generateGreeting() {
  const name = document.getElementById("nameInput").value;
  const messageContainer = document.getElementById("greetingMessage");

  if (name.trim() === "") {
    messageContainer.innerText = "من فضلك أدخل اسمك أولاً 😊";
    return;
  }

  messageContainer.innerText = `🎉استاذ فهد يتمنى لك عيد اضحى سعيذ يا${name} 🎉`;
}
