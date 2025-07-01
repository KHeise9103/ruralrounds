document.addEventListener("DOMContentLoaded", () => {
  const include = (file, targetId) => {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        return response.text();
      })
      .then(data => {
        document.getElementById(targetId).innerHTML = data;
      })
      .catch(err => console.error(err));
  };

  include("includes/header.html", "header");
  include("includes/footer.html", "footer");
});
