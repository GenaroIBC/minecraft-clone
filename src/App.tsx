import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { FirstPersonView } from "./components/FirstPersonView";
import { Player } from "./components/Player";
import Cubes from "./components/Cubes";
import { useWorldReducer } from "./reducers/worldReducer/worldReducer";
import { TextureSelector } from "./components/TextureSelector";
import { NavBar } from "./components/NavBar";

export default function App() {
  const { addCube, worldState, removeCube, saveWorld, setTexture, resetWorld } =
    useWorldReducer();

  return (
    <>
      <Canvas>
        <Sky sunPosition={[1, 0, 1]} />
        <ambientLight intensity={0.5} />
        <FirstPersonView />
        <Physics>
          <Cubes
            addCube={addCube}
            removeCube={removeCube}
            cubes={worldState.cubes}
          />
          <Player />
          <Ground addCube={addCube} />
        </Physics>
      </Canvas>
      <TextureSelector setTexture={setTexture} texture={worldState.texture} />
      <NavBar />
    </>
  );
}
