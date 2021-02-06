var playerAnswer = {
    playerInput: ["r", "p", "s"]
    promptPlayer: function() {
        window.prompt("Enter 'r' for rock, 'p' for paper or 's' for scissors")
    }
}

if (playerAnswer="r" and computerAnswer="r") {
    window.alert("It's a tie!");
} else
if (playerAnswer="r" and computerAnswer="p") {
    window.alert("Sorry, you lose.");
} else
if (playerAnswer="r" and computerAnswer="s") {
    window.alert("Congrats, you win!");
} else
if (playerAnswer="p" and computerAnswer="p") {
    window.alert("It's a tie!");
} else
if (playerAnswer="p" and computerAnswer="s") {
    window.alert("Sorry, you lose.");
} else
if (playerAnswer="p" and computerAnswer="r") {
    window.alert("Congrats, you win!");
} else
if (playerAnswer="s" and computerAnswer="s") {
    window.alert("It's a tie!");
} else
if (playerAnswer="s" and computerAnswer="r") {
    window.alert("Sorry, you lose.");
} else
if (playerAnswer="s" and computerAnswer="p") {
    window.alert("Congrats, you win!");
}