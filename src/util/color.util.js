// Function to select color for Navbar
export const navbarColor = (pathName) => {
  let color = "";
  let backgroundColor = "";
  switch (pathName) {
    case "/":
      color = "var(--text-white)";
      backgroundColor = "#1848BF";
      break;

    case "/portfolio":
      color = "var(--text-white)";
      backgroundColor = "#FA6543";
      break;

    case "/services":
      color = "var(--text-black)";
      backgroundColor = "#FEE934";
      break;

    case "/resources":
      color = "var(--text-black)";
      backgroundColor = "#F7F7F7";
      break;

    case "/about":
      color = "var(--text-black)";
      backgroundColor = "#E6EFED";
      break;

    default:
      color = "#F86449";
      backgroundColor = "#E6EFED";
      break;
  }

  return [color, backgroundColor];
};

// Function to select color for ServiceCard
export const serviceCardColor = (pathName) => {
  let headerColor = "";
  let textColor = "";
  switch (pathName) {
    case "/":
      headerColor = "#96FECB";
      textColor = "var(--text-white)";
      break;

    case "/services":
      headerColor = "var(--text-black)";
      textColor = "var(--text-black)";
      break;

    default:
      headerColor = "var(--text-black)";
      textColor = "var(--text-black)";
      break;
  }

  return [headerColor, textColor];
};

// Function to select color for PortfolioCard
export const portfolioCardColor = (pathName) => {
  let headerColor = "";
  let textColor = "";
  switch (pathName) {
    case "/":
      headerColor = "#1544C0";
      textColor = "var(--text-black)";
      break;
    case "/services":
      headerColor = "var(--text-white)";
      textColor = "var(--text-white)";
      break;
    default:
      headerColor = "var(--text-white)";
      textColor = "var(--text-white)";
      break;
  }

  return [headerColor, textColor];
};

// Function to select color for spinner background
export const spinnerBackgroundColor = (pathName) => {
  let backgroundColor = "";
  switch (pathName) {
    case "/":
      backgroundColor = "#1848BF";
      break;

    case "/portfolio":
      backgroundColor = "#FA6543";
      break;

    case "/services":
      backgroundColor = "#FEE934";
      break;

    case "/resources":
      backgroundColor = "#F7F7F7";
      break;

    case "/about":
      backgroundColor = "#E6EFED";
      break;

    default:
      backgroundColor = "#E6EFED";
      break;
  }

  return backgroundColor;
};
