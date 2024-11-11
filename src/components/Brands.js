import React, { useEffect, useState } from 'react'

function Brands() {
  const [brands, setBrands] = useState([]);

  const fetchBrands = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/brand/all');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setBrands(data.data);
    } catch (error) {
      console.error('Error fetching categories:', error.message);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);
  return (
  //   <section className="my-12 flex  justify-center">
  //   <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between p-0 px-20">
  //     {/* Brand Cards */}
  //     <div className="text-white text-center w-40">
  //       <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2022/08/client-logo-5.png" alt="Brand" className="w-24 h-12 object-contain p-2" />
  //     </div>
  //     <div className="text-white text-center w-40">
  //       <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png" alt="Brand" className="w-24 h-12 object-contain p-2" />
  //     </div>
  //     <div className="text-white text-center w-40">
  //       <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt="Brand" className="w-24 h-12 object-contain p-2" />
  //     </div>
  //     {/* Repeat Brand Cards */}
  //   </div>
  // </section>

  <section className="my-12 flex justify-center py-10">
  <div className=" flex flex-wrap justify-center gap-10 px-8 md:px-4">
    {/* Brand Cards */}
    {brands.map((deal, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg text-center p-4 w-32 h-24 flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-xl">
      <img src={deal.image} alt={deal.name} className="w-full h-full object-contain" />
    </div>
            ))}

    
  </div>
</section>



  )
}

export default Brands
