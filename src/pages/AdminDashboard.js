import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddNewProduct from '../components/AddNewProduct';
import AllOrders from '../components/AllOrders';
import PendingOrders from '../components/PendingOrders';

function AdminDashboard() {
    const navigate = useNavigate();
    const { isAdmin } = useSelector((state) => state.first);
    const [activeSection, setActiveSection] = useState('orders');
    const [pendingOrders, setPendingOrders] = useState([]);
    const [orderDetails, setOrderDetails] = useState(null);
    const [showOrderModal, setShowOrderModal] = useState(false);

    // Redirect if admin is not logged in
    useEffect(() => {
        if (!isAdmin) {
            navigate('/adminlogin');
        } else {
            fetchPendingOrders();
        }
    }, [isAdmin]);

    // Fetch pending orders
    const fetchPendingOrders = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/admin/pendingOrders');
            const data = await response.json();
            console.log(data)
            if (data?.success) setPendingOrders(data.data);
        } catch (error) {
            console.error('Failed to fetch pending orders:', error);
        }
    };


    return (
        <div className="flex h-[calc(100vh-80px)] mt-[80px]">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-800 text-white flex flex-col p-6">
                <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
                <nav>
                    <a
                        href="#orders"
                        onClick={() => setActiveSection('orders')}
                        className={`block py-2 mb-2 hover:bg-blue-700 rounded-lg ${
                            activeSection === 'orders' ? 'bg-blue-700' : ''
                        }`}
                    >
                        All Orders
                    </a>
                    <a
                        href="#pending"
                        onClick={() => setActiveSection('pending')}
                        className={`block py-2 mb-2 hover:bg-blue-700 rounded-lg ${
                            activeSection === 'pending' ? 'bg-blue-700' : ''
                        }`}
                    >
                        Pending Orders
                    </a>
                    <a
                        href="#new-product"
                        onClick={() => setActiveSection('newProduct')}
                        className={`block py-2 mb-2 hover:bg-blue-700 rounded-lg ${
                            activeSection === 'newProduct' ? 'bg-blue-700' : ''
                        }`}
                    >
                        Add New Product
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto bg-gray-100">
                {/* Conditionally Render Sections */}
                {activeSection === 'orders' && (
                    <AllOrders/>
                )}

                {activeSection === 'pending' && (
                    // <section id="pending">
                    //     <h2 className="text-4xl font-bold mb-6 text-red-600">Pending Orders</h2>
                    //     <div className="bg-white shadow-md rounded-lg p-6">
                    //         <p className="text-gray-700 mb-4">View and update all pending orders here.</p>
                    //         <div className="overflow-x-auto">
                    //             <table className="w-full border border-gray-200">
                    //                 <thead>
                    //                     <tr className="bg-red-600 text-white">
                    //                         <th className="py-3 px-4">Order ID</th>
                    //                         <th className="py-3 px-4">Customer</th>
                    //                         <th className="py-3 px-4">Total</th>
                    //                         <th className="py-3 px-4">Action</th>
                    //                     </tr>
                    //                 </thead>
                    //                 <tbody>
                    //                     {pendingOrders.map((order) => (
                    //                         <tr key={order.id} className="border-b">
                    //                             <td className="py-2 px-4">{order.id}</td>
                    //                             <td className="py-2 px-4">{order.customer}</td>
                    //                             <td className="py-2 px-4">{order.total}</td>
                    //                             <td className="py-2 px-4">
                    //                                 <button
                    //                                     // onClick={() => updateOrderStatus(order.id, 'completed')}
                    //                                     className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-500"
                    //                                 >
                    //                                     Mark as Completed
                    //                                 </button>
                    //                             </td>
                    //                         </tr>
                    //                     ))}
                    //                 </tbody>
                    //             </table>
                    //         </div>
                    //     </div>
                    // </section>
                    <PendingOrders/>
                )}

                {activeSection === 'newProduct' && (
                    <AddNewProduct/>
                )}
            </main>
        </div>
    );
}

export default AdminDashboard;
