// Assuming 'loadingLeaderboard' is a valid DOM element
loadingLeaderboard.style.display = 'block'; // Show the leaderboard

// Additional optimization could include checking if the element is already visible
// to avoid unnecessary reflows or repaints
if (loadingLeaderboard.style.display === 'none') {
  loadingLeaderboard.style.display = 'block';
}
