 
const createRoomBtn = document.getElementById("sender-start-con-btn");
const selectedFile = document.getElementById("file-input");
const allFiles = document.querySelector(".files-list");
const receiverButton = document.getElementById("receiver-start-con-btn");
const socket = io();
let receiverId;
 
function randomIdGenerator() {
  return `${Math.trunc(Math.random() * 999)}-${Math.trunc(
    Math.random() * 999
  )}-${Math.trunc(Math.random() * 999)}`;
}
function shareFile(metadata, buffer, progress_node) { 
  socket.emit("file-meta", {
    uid: receiverId,
    metadata: metadata,
  });
  socket.on("fs-share", () => {
    let chunk = buffer.slice(0, metadata.buffer_size);
    buffer = buffer.slice(metadata.buffer_size, buffer.length);
    progress_node.innerText =
      Math.trunc(
        ((metadata.total_buffer_size - buffer.length) /
          metadata.total_buffer_size) *
          100
      ) + "%";
    if (chunk.length != 0) {
      socket.emit("file-raw", {
        uid: receiverId,
        buffer: chunk,
      });
    }
  });
}
 
function roomIdSetup() {
  const joinId = randomIdGenerator(); 
  document.querySelector("#join-id").innerHTML = `
  <b>Room Id</b>
  <span>${joinId}</span>
  `; 
  socket.emit("sender-join", {
    uid: joinId,
  }); 
  socket.on("init", (uid) => {
    receiverId = uid; 
    document.querySelector(".join-screen").classList.remove("active");
    document.querySelector(".fs-screen").classList.add("active");
  });
} 
function fileSelector(e) {
  let file = e.target.files[0];
  if (!file) return;
 
  let reader = new FileReader(); 
  reader.onload = function () { 
    let buffer = new Uint8Array(reader.result); 

    let el = document.createElement("div");
    el.classList.add("item");
    el.innerHTML = `
    <div class="progress">0%</div>
    <div class="filename">${file.name}</div>
    `;
 
    allFiles.appendChild(el);

    shareFile(
      {
        filename: file.name,
        total_buffer_size: buffer.length,
        buffer_size: 2048,
      },
      buffer,
      el.querySelector(".progress")
    );
  };
 
  reader.readAsArrayBuffer(file);
} 
createRoomBtn.addEventListener("click", roomIdSetup);
selectedFile.addEventListener("change", fileSelector);
receiverButton.addEventListener("click", function () { 
  window.location.href = "./receiver.html";
});
