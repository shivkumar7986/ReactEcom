import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const theme = {
    colors: {
      heading: "#3b0d60", // Deep Purple for headings
      text: "rgba(47, 54, 64, 0.9)", // Slightly muted gray for text
      white: "#ffffff", // Pure white
      black: "#121212", // Dark black for contrast
      helper: "#ff6f61", // Coral Orange for CTA and highlights
      bg: "#fafafa", // Light neutral background
      footer_bg: "#2c1e4b", // Rich Purple for footer
      btn: "#8a4af3", // Vibrant Purple for buttons
      border: "rgba(138, 74, 243, 0.5)", // Matching border for buttons
      hr: "#eaeaea", // Soft gray for horizontal lines
      gradient:
        "linear-gradient(90deg, #8a4af3 0%, #ff6f61 100%)", // Gradient from Purple to Coral
      shadow:
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px", // Soft shadow for elements
      shadowSupport: "rgba(0, 0, 0, 0.15) 0px 6px 12px", // Heavier shadow for emphasis
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
