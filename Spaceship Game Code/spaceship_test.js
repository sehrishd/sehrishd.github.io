// JavaScript file to:
//   Read joystick x and y values from Arduino
//   Move spaceship on canvas according to the joystick values
//   Send '1' to Arduino when spaceship collides with an object (LED ON)
//   Send '0 to Arduino when spaceship is not colliding (LED OFF)
 
// Serial variables
let port = null;           // SerialPort object
let reader = null;         // Read stream reader
let writer = null;         // Write stream writer
let readBuffer = "";       // Buffer for incoming serial text
let textDecoder = new TextDecoder(); // For decoding Uint8Array chunks

// avoid spamming Arduino: only write when change
let lastSent = null;

// Joystick and game state 
let xVal = 512;
let yVal = 512;
let shipX, shipY;
let collision = false;

// p5 setup function to create game canvas
// and set initial position of the spaceship
function setup() {
  createCanvas(600, 400);
  shipX = width / 2;
  shipY = height / 2;

  // connect button to arduino on 'click'
  const btn = document.getElementById("connectButton");
  btn.addEventListener("click", connectSerial);

  updateStatus("Not connected");
}

function draw() {
  background(0);

  // map joystick values to screen coordinates
  shipX = map(xVal, 0, 1023, 0, width);
  shipY = map(yVal, 0, 1023, 0, height);

  // draw spaceship
  fill(0, 255, 0);
  noStroke();
  ellipse(shipX, shipY, 30, 30);

  // obstacle
  fill(255, 0, 0);
  rect(250, 150, 100, 100);

  // collision detection (simple bounding box)
  if (shipX > 250 && shipX < 350 && shipY > 150 && shipY < 250) {
    collision = true;
  } else {
    collision = false;
  }

  // send LED command only on change to reduce serial traffic
  const toSend = collision ? "1" : "0";
  if (toSend !== lastSent) {
    sendToArduino(toSend);
    lastSent = toSend;
  }

  // HUD
  fill(255);
  textAlign(LEFT, TOP);
  textSize(14);
  text(`X: ${xVal}  Y: ${yVal}`, 10, 10);
  text(collision ? "💥 Collision!" : "All clear", 10, 30);
}

// ---------- Serial functions ----------

async function connectSerial() {
  try {
    // request the serial port (shows the Chrome device chooser)
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });

    // setup reader from port.readable
    reader = port.readable.getReader();

    // setup writer to send messages
    writer = port.writable.getWriter();

    updateStatus("Connected");

    // start the read loop (asynchronous)
    readLoop();
  } catch (err) {
    console.error("Error opening serial port:", err);
    updateStatus("Connection failed");
  }
}

async function readLoop() {
  // keep reading until stream closes
  try {
    while (port && port.readable) {
      const { value, done } = await reader.read(); // value is Uint8Array
      if (done) {
        // stream closed
        break;
      }
      if (value) {
        // decode incoming bytes and append to buffer
        readBuffer += textDecoder.decode(value);
        // split complete lines
        const lines = readBuffer.split("\n");
        readBuffer = lines.pop(); // leftover partial line stays in buffer

        for (let line of lines) {
          line = line.trim();
          if (line.length === 0) continue;
          // Arduino sends "x,y" => parse
          const parts = line.split(",");
          if (parts.length === 2) {
            const a = parseInt(parts[0]);
            const b = parseInt(parts[1]);
            if (!isNaN(a) && !isNaN(b)) {
              xVal = a;
              yVal = b;
            }
          } else {
            // If not the expected format, log for debugging
            console.log("Serial line (unexpected):", line);
          }
        }
      }
    }
  } catch (err) {
    console.error("Read loop error:", err);
  } finally {
    // cleanup when disconnected
    closeSerial();
  }
}

async function sendToArduino(msg) {
  if (!writer || !port || !port.writable) return;
  try {
    const data = new TextEncoder().encode(msg);
    await writer.write(data);
    // note: not awaiting drain here to keep UI responsive
  } catch (err) {
    console.error("Write error:", err);
  }
}

async function closeSerial() {
  updateStatus("Disconnected");
  try {
    if (reader) {
      await reader.cancel();
      reader.releaseLock();
      reader = null;
    }
  } catch (err) {
    console.warn("Error closing reader:", err);
  }

  try {
    if (writer) {
      writer.releaseLock();
      writer = null;
    }
  } catch (err) {
    console.warn("Error closing writer:", err);
  }

  try {
    if (port) {
      await port.close();
      port = null;
    }
  } catch (err) {
    console.warn("Error closing port:", err);
  }
}

// helper to change the status text
function updateStatus(txt) {
  const el = document.getElementById("status");
  if (el) el.textContent = txt;
}
