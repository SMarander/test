document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const partySize = document.getElementById("party-size").value;

    // Perform validation here (e.g., check if date and time are valid)

    // Display confirmation
    const confirmationMessage = `Thank you, ${name}! Your table for ${partySize} has been booked on ${date} at ${time}. We will send a confirmation email to ${email}.`;
    document.getElementById("confirmation").textContent = confirmationMessage;
});
