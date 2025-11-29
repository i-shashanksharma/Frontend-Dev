const searchBox = document.getElementById("searchBox");
const studentsTable = document.getElementById("studentsTable");
const noResults = document.getElementById("noResults");
const tableRows = studentsTable.querySelectorAll("tbody tr");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.trim().toLowerCase();
  let visible = 0;

  tableRows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    const match = Array.from(cells).some((cell) =>
      cell.textContent.toLowerCase().includes(query)
    );

    if (match || query === "") {
      row.style.display = "";
      visible++;
    } else {
      row.style.display = "none";
    }
  });

  noResults.style.display = visible === 0 ? "block" : "none";
});
