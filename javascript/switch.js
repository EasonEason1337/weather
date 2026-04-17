let a = 2 + 2;

switch (a) {
  case 3:
    console.log("Too small");
    break;
  case 4:
    console.log("Exactly!");
    break;
  case 5:
    console.log("Too large");
    break;
    defualt: console.log("I don't know such values");
}

switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;

  default:
    alert("We hope that this page looks ok!");
}

if (browser == "Edge") {
  console.log("You've got the Edge!");
} else {
  console.log("Okay we support these browsers too");
}
