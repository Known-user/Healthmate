
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// function AllOrders() {
//     const [orders, setOrders] = useState([]);
//     const [selectedOrder, setSelectedOrder] = useState(null); 
//     const dispatch = useDispatch();
//     const navigate = useNavigate();  

//     const fetchOrders = async () => {
//         try {
//             const response = await fetch('http://localhost:3001/api/admin/orders');
//             const output = await response.json();
//             setOrders([output.data]);  // Ensure it's directly an array of orders
//         } catch (error) {
//             console.error('Failed to fetch orders:', error);
//         }
//     };

//     const fetchOrderDetails = (order) => {
//         setSelectedOrder(order); 
//     };

//     const closeOrderDetails = () => {
//         setSelectedOrder(null); 
//     };

//     const viewProductDetails = (product) => {
//         console.log(product);
//         dispatch({ type: 'PRODUCT', payload: product });
//         navigate('/description');  
//     };

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     // Disable background scroll when popup is open
//     useEffect(() => {
//         if (selectedOrder) {
//             document.body.style.overflow = 'hidden'; // Disable background scrolling
//         } else {
//             document.body.style.overflow = ''; // Re-enable scrolling when modal is closed
//         }
//     }, [selectedOrder]);

//     // Close the popup if clicked outside the modal content
//     const handleOutsideClick = (e) => {
//         if (e.target.classList.contains('popup-overlay')) {
//             closeOrderDetails();
//         }
//     };

//     return (
//         <section id="orders" className="p-6">
//             <h2 className="text-4xl font-bold mb-6 text-blue-800">All Orders</h2>
//             <div className="bg-white shadow-md rounded-lg p-6">
//                 <p className="text-gray-700 mb-4">Here you can view and manage all orders.</p>
//                 <div className="overflow-x-auto">
//                     <table className="w-full border border-gray-200">
//                         <thead>
//                             <tr className="bg-blue-700 text-white">
//                                 <th className="py-3 px-4">Order ID</th>
//                                 <th className="py-3 px-4">Customer</th>
//                                 <th className="py-3 px-4">Status</th>
//                                 <th className="py-3 px-4">Total</th>
//                                 <th className="py-3 px-4">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orders.map((order) => (
//                                 <tr key={order.id} className="border-b">
//                                     <td className="py-2 text-center px-4">{order.id}</td>
//                                     <td className="py-2 text-center px-4">{order.userId}</td>
//                                     <td className="py-2 text-center px-4">{order.status}</td>
//                                     <td className="py-2 text-center px-4">{order.totalPrice}</td>
//                                     <td className="py-2 text-center px-4">
//                                         <button
//                                             onClick={() => fetchOrderDetails(order)}
//                                             className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-500"
//                                         >
//                                             View Order
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {selectedOrder && (
//                 <div
//                     className="popup-overlay fixed inset-0 bg-gray-600 bg-opacity-70 flex items-center justify-center z-50"
//                     onClick={handleOutsideClick}
//                 >
//                     <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 max-w-4xl w-full relative shadow-lg transform transition-all duration-300"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <button
//     onClick={closeOrderDetails}
//     className="absolute top-4 right-4 w-10 h-10 bg-transparent text-white p-2 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-blue-700 transition-colors focus:outline-none"
// >
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         strokeWidth="2"
//     >
//         <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6 18L18 6M6 6l12 12"
//         />
//     </svg>
// </button>


//                         <h3 className="text-3xl font-bold text-white mb-6">Order Details</h3>
//                         <div className="text-white mb-6">
//                             <p><strong>Order ID:</strong> {selectedOrder.orderId}</p>
//                             <p><strong>Status:</strong> {selectedOrder.status}</p>
//                             <p><strong>Total Price:</strong> {selectedOrder.totalPrice}</p>
//                         </div>

//                         <h4 className="text-2xl font-semibold text-white mb-4">Products:</h4>
//                         <div className="space-y-4">
//                             {selectedOrder.orderItems.map((item, index) => (
//                                 <div key={index} className="flex items-center border-t pt-4">
//                                     <div className="flex-shrink-0 w-40 h-40 bg-gray-100 rounded-lg overflow-hidden shadow-md">
//                                         <img
//                                             src={item.product.imageLink[0]} 
//                                             alt={item.product.name}
//                                             className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
//                                         />
//                                     </div>
//                                     <div className="ml-6 flex-grow">
//                                         <p className="text-lg font-semibold text-white">{item.product.name}</p>
//                                         <p className="text-gray-300 mb-2">{item.product.description}</p>
//                                         <p className="text-gray-300"><strong>Quantity:</strong> {item.quantity}</p>
//                                         <p className="text-gray-300"><strong>Price:</strong> ${item.product.price}</p>
//                                         <button
//                                             onClick={() => viewProductDetails(item.product)}
//                                             className="bg-white text-blue-700 py-2 px-4 rounded-full mt-3 shadow-md hover:bg-blue-100 transition-all"
//                                         >
//                                             View Product
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// }

// export default AllOrders;





//                                                                                    BEST CODE
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AllOrders() {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [newStatus, setNewStatus] = useState(""); // State for selected new status
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/admin/orders');
            const output = await response.json();
            setOrders([output.data]);  // Ensure it's directly an array of orders
        } catch (error) {
            console.error('Failed to fetch orders:', error);
        }
    };

    const fetchOrderDetails = (order) => {
        setSelectedOrder(order);
        setNewStatus(order.status);  // Set the current status as default for the update
    };

    const closeOrderDetails = () => {
        setSelectedOrder(null);
    };

    const viewProductDetails = (product) => {
        dispatch({ type: 'PRODUCT', payload: product });
        navigate('/description');
    };

    const updateOrderStatus = async (id, status) => {
        try {
            const response = await fetch(`http://localhost:3001/api/admin/order/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status }),
            });
            const data = await response.json();
            if (data?.success) {
                fetchOrders();  // Refresh the order list after updating
                closeOrderDetails();  // Close the modal after updating
            }
        } catch (error) {
            console.error('Failed to update order status:', error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    useEffect(() => {
        if (selectedOrder) {
            document.body.style.overflow = 'hidden'; // Disable background scrolling
        } else {
            document.body.style.overflow = ''; // Re-enable scrolling when modal is closed
        }
    }, [selectedOrder]);

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
            closeOrderDetails();
        }
    };

    return (
        <section id="orders" className="p-6">
            <h2 className="text-4xl font-bold mb-6 text-blue-800">All Orders</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-700 mb-4">Here you can view and manage all orders.</p>
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="bg-blue-700 text-white">
                                <th className="py-3 px-4">Order ID</th>
                                <th className="py-3 px-4">Customer</th>
                                <th className="py-3 px-4">Status</th>
                                <th className="py-3 px-4">Total</th>
                                <th className="py-3 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="border-b hover:bg-gray-50">
                                    <td className="py-2 text-center px-4">{order.id}</td>
                                    <td className="py-2 text-center px-4">{order.userId}</td>
                                    <td className="py-2 text-center px-4">{order.status}</td>
                                    <td className="py-2 text-center px-4">{order.totalPrice}</td>
                                    <td className="py-2 text-center px-4">
                                        <button
                                            onClick={() => fetchOrderDetails(order)}
                                            className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-500"
                                        >
                                            View Order
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedOrder && (
                <div
                    className="popup-overlay fixed inset-0 bg-gray-600 bg-opacity-70 flex items-center justify-center z-50"
                    onClick={handleOutsideClick}
                >
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 max-w-4xl w-full relative shadow-lg transform transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeOrderDetails}
                            className="absolute top-4 right-4 w-10 h-10 bg-transparent text-white p-2 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-blue-700 transition-colors focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <h3 className="text-3xl font-bold text-white mb-6">Order Details</h3>
                        <div className="text-white mb-6">
                            <p><strong>Order ID:</strong> {selectedOrder.orderId}</p>
                            <p><strong>Status:</strong> {selectedOrder.status}</p>
                            <p><strong>Total Price:</strong> {selectedOrder.totalPrice}</p>
                        </div>

                        {/* Status Update Dropdown */}
                        <div className="mb-6">
                            <label htmlFor="status" className="text-white font-semibold mr-6">Update Status:</label>
                            <select
                                id="status"
                                value={newStatus}
                                onChange={(e) => setNewStatus(e.target.value)}
                                className="mt-2 bg-white text-blue-700 py-2 px-4 rounded-md shadow-md"
                            >
                                {['pending', 'completed', 'canceled', 'refunded'].map((option) => {
                                    return option !== selectedOrder.status ? (
                                        <option key={option} value={option}>
                                            {option.charAt(0).toUpperCase() + option.slice(1)}
                                        </option>
                                    ) : null;
                                })}
                            </select>
                            <button
                                onClick={() => updateOrderStatus(selectedOrder.id, newStatus)}
                                className="mt-4 ml-4 bg-green-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-green-500 transition-all"
                            >
                                Update Status
                            </button>
                        </div>

                        <h4 className="text-2xl font-semibold text-white mb-4">Products:</h4>
                        <div className="space-y-4">
                            {selectedOrder.orderItems.map((item, index) => (
                                <div key={index} className="flex items-center border-t pt-4">
                                    <div className="flex-shrink-0 w-40 h-40 bg-gray-100 rounded-lg overflow-hidden shadow-md">
                                        <img
                                            src={item.product.imageLink[0]}
                                            alt={item.product.name}
                                            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                                        />
                                    </div>
                                    <div className="ml-6 flex-grow">
                                        <p className="text-lg font-semibold text-white">{item.product.name}</p>
                                        <p className="text-gray-300 mb-2">{item.product.description}</p>
                                        <p className="text-gray-300"><strong>Quantity:</strong> {item.quantity}</p>
                                        <p className="text-gray-300"><strong>Price:</strong> ${item.product.price}</p>
                                        <button
                                            onClick={() => viewProductDetails(item.product)}
                                            className="bg-white text-blue-700 py-2 px-4 rounded-full mt-3 shadow-md hover:bg-blue-100 transition-all"
                                        >
                                            View Product
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default AllOrders;
