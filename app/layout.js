import "./globals.css";
// import {GlobalProvider} from './globalContext'
import { ThemeProvider } from "next-themes";
import Sidebar from "../components/sidebar/sidebar";
export const metadata = {
  title: "Kacademia",
  description: "A platform for teachers and students to enhance the education experience ",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({ children }) {
  return (
    // <GlobalProvider>
      <html lang="en"> 
          <body>
            <ThemeProvider attribute="user-theme" defaultTheme="purple" enableSystem={false}>
              <Sidebar/>
              {children}
            </ThemeProvider>
          </body>
      </html>
    // </GlobalProvider>
  );
}
