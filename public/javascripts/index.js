function setEventListeners() {
    document
       .querySelector("#chatbox")
       .addEventListener("submit", function (event) {
        event.preventDefault();
   
        const message = document.querySelector("#message").value;
   
        fetch("/chats", {
          method: "post", 
          headers: new Headers({ "content-type": "application/json" }),
          body: JSON.stringify({ message }),
        })
          .then(async function () {
           document.querySelector("#message").value = "";
   
            const messages = await getMessages();
            renderMessages(messages);
          });
      });
   }
   
   async function getMessages() {
    const fetchResponse = await fetch("/chats", { method: "get" });
    const response = await fetchResponse.json();
    return response.messages;
   }
   
   function renderMessages(messages) {
    const root = document.querySelector("#messages");
   
    const listItems = messages
      .map((message) => {
        return `<li>${message.message}</li>`;
      })
      .join("");
   
    root.innerHTML = listItems;
   }
   
   async function init() {
    setEventListeners();
    const messages = await getMessages();
    renderMessages(messages);
   }
  document.addEventListener("DOMContentLoaded", init);
   