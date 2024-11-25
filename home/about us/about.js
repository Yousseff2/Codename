document.addEventListener("DOMContentLoaded", function () {
  const titleContainer = document.getElementById("aboutusTitleContainer");
  const titleSection = document.getElementById("aboutusTitleSection");
  const scrollImage = document.getElementById("aboutusScrollImage");
  const typingText = document.getElementById("aboutusTypingText");
  const buttonContainer = document.getElementById("buttonContainer");

  const aboutUsText = `We are a creative agency driven by bold ideas. Our mission is to transform dreams into reality, combining creativity, strategy, and innovation. With passion and dedication, we design experiences that inspire and leave a lasting impact.`;

  let isTyping = false;
  let charIndex = 0;

  function typeText() {
    if (charIndex < aboutUsText.length) {
      typingText.textContent = aboutUsText.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeText, 25); // Slightly faster typing speed (was 50 before)
    } else {
      buttonContainer.style.opacity = 1; // Show buttons after typing is complete
    }
  }

  function handleScroll() {
    const rect = titleSection.getBoundingClientRect();
    const titleRect = titleContainer.getBoundingClientRect();

    // Title parallax effect
    if (rect.top <= 0) {
      const targetStop = rect.height / 2.5; // Move until half the title overlaps content
      const progress = Math.abs(rect.top);
      const moveAmount = Math.min(progress, targetStop);

      // Apply movement
      titleContainer.style.transform = `translate(-50%, calc(-50% + ${moveAmount}px))`;
    } else {
      // Ensure the title remains in center if not scrolling past
      titleContainer.style.transform = "translate(-50%, -50%)";
    }

    // Side image animation
    const scrollProgress =
      (window.scrollY - rect.height) / (window.innerHeight / 2);
    if (scrollProgress >= 0) {
      const translateY = Math.max(0, 100 - scrollProgress * 100);
      scrollImage.style.transform = `translateY(${translateY}%)`;
    }

    // Start typing animation
    if (scrollProgress >= 0.5 && !isTyping) {
      isTyping = true;
      typingText.style.opacity = 1;
      typeText();
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);
});
