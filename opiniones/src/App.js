import Theme from "./Theme/Theme";
import OpinionDetailEdit from "./ui/components/opinions/OpinionDetailEdit";
import NavMenu from "./ui/components/navMenu/NavMenu";

function App() {

  return (
    <Theme>
      <NavMenu />
      <OpinionDetailEdit/>
    </Theme>
  );
}

export default App;
