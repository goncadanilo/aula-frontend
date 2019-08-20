if (localStorage.length > 0) {
  for (let i = 0; i < localStorage.length; i++) {
    const user = localStorage.getItem(i + 1).split(";");
    document.getElementById("list").innerHTML +=
      "<tr>" +
      "<td>" +
      user[0] +
      "</td>" +
      "<td>" +
      user[1] +
      "</td>" +
      "<td>" +
      user[2] +
      "</td>" +
      "<td>" +
      user[3] +
      "</td>" +
      "<td>" +
      user[4] +
      "</td>" +
      "</tr>";
  }
}
