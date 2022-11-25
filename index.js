document.addEventListener("click", (event) => {
  // <----- opens up social links --------->
  if (event.target.className.includes("fa-brands")) {
    if (event.target.className.includes("linkedin")) {
      window.open("https://www.linkedin.com/in/sydneycnoh/", "_blank");
    } else if (event.target.className.includes("github")) {
      window.open("https://github.com/simplesnoh", "_blank");
    } else if (event.target.className.includes("youtube")) {
      window.open(
        "https://www.youtube.com/channel/UCA0rRIcZyVqryplyPB85KKw",
        "_blank"
      );
    }
    // <----- opens up Notion pages --------->
  } else if (event.target.className.includes("nav-text")) {
    if (event.target.className.includes("FAQ-container")) {
      window.open(
        "https://languid-soup-a6b.notion.site/FAQ-e66659423ec140bc9e06a155c3011a10",
        "_blank"
      );
    } else if (event.target.className.includes("about-container")) {
      window.open(
        "hhttps://languid-soup-a6b.notion.site/About-Me-31c14ae02e414f809eaf28bc85c82681",
        "_blank"
      );
    } else if (event.target.className.includes("stoof-container")) {
      window.open(
        "https://languid-soup-a6b.notion.site/My-Stoof-fb7481d0aeee474bae01ec397d5d8f77",
        "_blank"
      );
    } else if (event.target.className.includes("resources-container")) {
      window.open(
        "https://languid-soup-a6b.notion.site/Resources-9f089e67734642f6b87c79cdebadc38d",
        "_blank"
      );
    }
  }
});
