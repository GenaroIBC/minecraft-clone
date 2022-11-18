import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import {
  dirtImg,
  glassImg,
  grassImg,
  logImg,
  woodImg
} from "../assets/img/images";
import { useKeyboard } from "../hooks/useKeyboard";
import { Texture } from "../reducers/worldReducer/types";

const images = { dirtImg, glassImg, grassImg, woodImg, logImg };

type Props = {
  setTexture: (texture: Texture) => void;
  texture: Texture;
};

export function TextureSelector({ setTexture, texture }: Props) {
  const { dirt, grass, glass, log, wood } = useKeyboard();

  const textureOptions = { dirt, grass, glass, log, wood };

  useEffect(() => {
    const selectedTexture = Object.entries(textureOptions).find(
      ([texture, isSelected]) => isSelected
    );

    if (selectedTexture) {
      setTexture(selectedTexture[0] as Texture);
    }
  }, [textureOptions]);

  return (
    <nav className="select-texture-bar">
      {Object.entries(images).map(([textureName, textureUrl]) => (
        <img
          className={
            texture === textureName.replace("Img", "") ? "selected" : ""
          }
          key={uuid()}
          src={textureUrl}
        />
      ))}
    </nav>
  );
}
