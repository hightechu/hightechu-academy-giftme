function updateChat(chat) {
    document.getElementById('chatarea').innerHTML = document.getElementById('chatarea').innerHTML + "<br>" + chat;
    document.getElementById("message").value = "";
}
function updateChat2(chat) {
    if(event.keyCode === 13) {
         document.getElementById('chatarea').innerHTML = document.getElementById('chatarea').innerHTML + "<br>" + chat;
         document.getElementById("message").value = "";
    }
}