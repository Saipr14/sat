document.addEventListener("DOMContentLoaded", function () {
    const teamNameInput = document.getElementById("teamName");
    const addTeamButton = document.getElementById("addTeam");
    const teamTable = document.getElementById("teamTable");
    let serialNumber = 1;
    const teamLogos = ["images/team_logo.png", "images/team_logo1.png", "images/team_logo2.png"];
    let currentLogoIndex = 0;

    addTeamButton.addEventListener("click", addTeam);

    teamNameInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTeam();
        }
    });

    function addTeam() {
        const teamName = teamNameInput.value.trim();

        if (teamName) {
            const row = teamTable.querySelector("tbody").insertRow();

            const serialNoCell = row.insertCell(0);
            serialNoCell.textContent = serialNumber;

            const logoCell = row.insertCell(1);
            const logoImage = document.createElement("img");
            logoImage.src = teamLogos[currentLogoIndex];
            logoImage.alt = "Team Logo";
            logoImage.style.maxWidth = "50px"; // Adjust the maximum width as needed
            logoImage.style.maxHeight = "50px";
            logoCell.appendChild(logoImage);

            const teamNameCell = row.insertCell(2);
            teamNameCell.textContent = teamName;

            const addPlayersCell = row.insertCell(3);
            const addPlayersButton = document.createElement("button");
            addPlayersButton.textContent = "Add Players";
            addPlayersButton.addEventListener("click", function () {
                alert("Add players for " + teamName);
            });
            addPlayersCell.appendChild(addPlayersButton);

            teamNameInput.value = "";
            serialNumber++;
            currentLogoIndex = (currentLogoIndex + 1) % teamLogos.length;
        }
    }
});
