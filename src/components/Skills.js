import "./Skills.css";
import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import { DefaultLoadingManager } from "three";

export default function Skills(props) {
  const skillArray = props.data.main.bio.split(" - ");
  //make cloud rotate around y axis

  return (
    <>
      

      <div className="skills">
        {
          //console.log(props.data.abilities.abs[0].ab)
          props.data.abilities.abs.map((abs) => {
            return (
              <div className="skill">
                <h1>{abs.ab}</h1>
                <h2>{abs.desc}</h2>

              
                
                
              </div>
            );
          })
          
        }
      </div>
    </>
  );
}
