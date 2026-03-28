function createLoginTracker(userInfo) {
  // Initialize Attempt Count
  let attemptCount = 0;

  // Create and return arrow function
  return (passwordAttempt) => {
    // Increment attemptCount by 1
    attemptCount++;

    // Check if password matches and attempts are 3 or less
    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      return "Login successful";
    } 
    // If they don't match, but they haven't exceeded 3 attempts yet
    else if (attemptCount <= 3) {
      return `Attempt ${attemptCount}: Login failed`;
    } 
    // If they have exceeded 3 attempts
    else {
      return "Account locked due to too many failed login attempts";
    }
  };
}
