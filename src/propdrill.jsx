
function App() {
  const [theme, setTheme] = useState("light");
  return <Page theme={theme} setTheme={setTheme} />;
}
function Page({ theme, setTheme }) {
  return <Sidebar theme={theme} setTheme={setTheme} />; 
}
function Sidebar({ theme, setTheme }) {
  return <ToggleButton theme={theme} setTheme={setTheme} />; 
}
function ToggleButton({ theme, setTheme }) {
  return <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme}</button>;
}

export default App;