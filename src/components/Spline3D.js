import React, { useEffect } from "react";
import { Application } from "https://esm.sh/@splinetool/runtime";

const Spline3D = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);

    const fileName = "0eI7JO23zWEe8FiA";
    app.load(`https://prod.spline.design/${fileName}/scene.splinecode`);

    // Cleanup function to handle unmounting
    return () => {
      // You can add any necessary cleanup for the app instance if needed
    };
  }, []);

  return (
    <div id="container" className="flex justify-center items-start min-h-screen">
      <canvas id="canvas3d" className="min-h-screen"></canvas>
    </div>
  );
};

export default Spline3D;
