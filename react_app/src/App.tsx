import { useState } from "react";
import { ExpandbleText } from "./components/ExpandbleText";

function App() {
  return (
    <div>
      <ExpandbleText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aut
        quisquam doloribus aliquid accusamus excepturi harum soluta, debitis
        minima itaque quis sint expedita magnam sequi est iure omnis voluptas!
        Minima, quam ut deserunt ad dolor cumque dicta inventore maxime at
        laboriosam quia, nam earum necessitatibus nemo saepe adipisci iste
        explicabo hic error libero! Odio vel beatae reiciendis? Tenetur minus
        consectetur consequatur impedit laboriosam doloremque, doloribus et
        sequi, perspiciatis eos voluptatibus, dolor ex officia! Porro eaque quos
        ipsum deserunt expedita totam, suscipit enim. Eveniet officia corporis
        exercitationem magnam sit molestiae, fugiat, porro omnis in similique
        placeat eaque commodi quaerat at qui.
      </ExpandbleText>
    </div>
  );
}

export default App;
