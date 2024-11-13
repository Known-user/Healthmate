// import React, { useEffect } from "react";
// import { Application } from "https://esm.sh/@splinetool/runtime";

// const Spline3D = () => {
//   useEffect(() => {
//     const canvas = document.getElementById("canvas3d");
//     const app = new Application(canvas);

//     const fileName = "0eI7JO23zWEe8FiA";
//     app.load(`https://prod.spline.design/${fileName}/scene.splinecode`);

//     // Cleanup function to handle unmounting
//     return () => {
//       // You can add any necessary cleanup for the app instance if needed
//     };
//   }, []);

//   return (
//     <div id="container" className="flex justify-center items-start min-h-screen">
//       <canvas id="canvas3d" className="min-h-screen"></canvas>
//     </div>
//   );
// };

// export default Spline3D;











import React, { useEffect } from "react";
import { Application } from "https://esm.sh/@splinetool/runtime";

const Spline3D = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);

    const fileName = "0eI7JO23zWEe8FiA";
    app.load(`https://prod.spline.design/${fileName}/scene.splinecode`);

    // Disable zoom with mouse wheel by preventing the wheel event
    canvas.addEventListener("wheel", (event) => {
      event.preventDefault(); // Prevent zooming with mouse wheel
    });

    // Cleanup function to handle unmounting
    return () => {
      canvas.removeEventListener("wheel", (event) => {
        event.preventDefault();
      });
    };
  }, []);

  return (
    <div className="px-32 bg-blue-50 py-16">
      <div className="relative h-[50vh] flex justify-center items-start">
        {/* Text Content */}
        <div className="absolute top-40 left-40 transform text-white z-10">
          <p className="text-lg leading-none">AI-Powered Symptom Check</p>
          <h3 className="text-5xl py-3 font-bold">Assess Your Health Now</h3>
          <p className="text-lg leading-none">
            Get insights into your symptoms with our AI-powered tool.
          </p>
          <p className="text-lg leading-none">
            Use the AI Symptom Checker to understand your health better.
          </p>
          <a href="https://symptomate.com/interview/0" className="bg-white inline-block text-black px-4 py-2 mt-5 transition duration-300 hover:bg-black hover:text-white">
            Check Symptoms Now
          </a>
        </div>

        {/* Spline 3D Canvas */}
        <canvas
          id="canvas3d"
          className="w-[80%] h-[80vh] sm:w-[70%] sm:h-[70vh] md:w-[60%] md:h-[60vh]"
        ></canvas>
      </div>
    </div>
  );
};

export default Spline3D;
