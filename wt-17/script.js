// Select elements
const form = document.getElementById("github-form");
const profile = document.getElementById("profile");
const errorMessage = document.getElementById("error-message");
const historyDiv = document.getElementById("history");
const historyList = document.getElementById("history-list");

// Store search history
let searchHistory = [];

// Event listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;

  // Fetch GitHub profile data
  fetchProfile(username);
});

// Fetch profile data from GitHub API
function fetchProfile(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then((data) => {
      displayProfile(data);
      addToHistory(username); // Add to search history
    })
    .catch((error) => {
      displayError(error.message);
    });
}

// Display the GitHub profile
function displayProfile(data) {
  profile.classList.remove("hidden");
  errorMessage.classList.add("hidden");
  document.getElementById("avatar").src = data.avatar_url;
  document.getElementById("name").textContent =
    data.name || "No name available";
  document.getElementById("bio").textContent = data.bio || "No bio available";
  document.getElementById("repos").textContent = data.public_repos;
  document.getElementById("followers").textContent = data.followers;
  document.getElementById("following").textContent = data.following;
}

// Display an error message if user is not found
function displayError(message) {
  profile.classList.add("hidden");
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}

// Add username to search history
function addToHistory(username) {
  if (!searchHistory.includes(username)) {
    searchHistory.push(username);
    updateHistoryUI();
  }
}

// Update search history UI
function updateHistoryUI() {
  historyList.innerHTML = ""; // Clear previous history
  searchHistory.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user;
    li.addEventListener("click", () => {
      fetchProfile(user); // Fetch profile when clicking on history item
    });
    historyList.appendChild(li);
  });
  historyDiv.classList.remove("hidden"); // Show history section
}
