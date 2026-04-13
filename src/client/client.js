let socket, uid, ctx;
let state = { clients: {}, count: 0 };

window.onload = () => {
  discon.style.display = "none";

  socket = io("https://cursores-server.onrender.com/");

  let username = prompt("Introduce tu nombre de usuario:");
  if (!username) username = "Usuario";

  socket.on("uid", (id) => {
    uid = id;
    socket.emit("setName", username);
  });

  socket.on("update", (data) => {
    state = data;
    draw();
  });

  socket.on("connect", () => {
    connect.style.display = "none";
    setInterval(() => socket.emit("get"), 20);
  });

  socket.on("disconnect", () => {
    discon.style.display = "block";
  });

  canvas.width = innerWidth;
  canvas.height = innerHeight;
  ctx = canvas.getContext("2d");

  canvas.onmousemove = (e) => {
    socket.emit("move", {
      x: e.pageX - canvas.offsetLeft,
      y: e.pageY - canvas.offsetTop
    });
  };

  canvas.onmousedown = () => socket.emit("mouseDown");
  canvas.onmouseup = () => socket.emit("mouseUp");
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  usercount.innerText = "Usuarios conectados: " + state.count;

  for (const id in state.clients) {
    const [x, y, isDown, name, color] = state.clients[id];

    ctx.fillStyle = color;
    ctx.fillRect(x, y, 10, 10);

    ctx.fillStyle = "#000";
    ctx.font = "14px Arial";
    ctx.fillText(name, x, y - 8);
  }
}