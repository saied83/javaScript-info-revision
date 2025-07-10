result = a !== null && a !== undefined ? a : b;

result = a ?? b;

// example 01
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// example 02
// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

// Historically, the OR || operator was there first. It’s been there since the beginning of JavaScript, so developers were using it for such purposes for a long time.

// On the other hand, the nullish coalescing operator ?? was added to JavaScript only recently, and the reason for that was that people weren’t quite happy with ||.

// The important difference between them is that:

// || returns the first truthy value.
// ?? returns the first defined value.
