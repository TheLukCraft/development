// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        // Ustawienia kolorów dla jasnego motywu
        background: "#F2F2F2", // Tło
        sectionBackground: "#D2F2C9", // Tło sekcji
        primary: "#6BA65B", // Przyciski i akcenty
        secondary: "#5AA646", // Alternatywny kolor dla akcentów (można użyć dla ważnych elementów)
        accent: "#1E403C", // Nagłówki i ważne elementy, alternatywnie może być użyty dla tekstu
        info: "#1E403C", // Kolor tekstu (możesz dostosować do potrzeb)
      },
    },
  },
});
