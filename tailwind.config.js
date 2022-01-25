module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#000033",
        secondary: "#FDD25A",
        darkGray: "rgba(48, 48, 48, 255)",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundImage: {
        seller: "url(../assets/seller-bg.png)",
        drawer: "url(../assets/bg-drawer.png)"
      }
    },
  },
}
