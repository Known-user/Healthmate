import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const navigate = useNavigate();
    const { isAdmin } = useSelector((state) => state.first);
    const [activeSection, setActiveSection] = useState('orders');
    const [orders, setOrders] = useState([]);
    const [pendingOrders, setPendingOrders] = useState([]);
    const [orderDetails, setOrderDetails] = useState(null);
    const [showOrderModal, setShowOrderModal] = useState(false);

    // Redirect if admin is not logged in
    useEffect(() => {
        if (!isAdmin) {
            navigate('/admin');
        } else {
            fetchOrders();
            fetchPendingOrders();
        }
    }, [isAdmin]);

    // Fetch all orders
    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/admin/orders');
            const data = await response.json();
            if (data?.success) setOrders(data.data);
        } catch (error) {
            console.error('Failed to fetch orders:', error);
        }
    };

    // Fetch pending orders
    const fetchPendingOrders = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/admin/pendingOrders');
            const data = await response.json();
            if (data?.success) setPendingOrders(data.data);
        } catch (error) {
            console.error('Failed to fetch pending orders:', error);
        }
    };

    // Fetch order details by ID
    const fetchOrderDetails = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/admin/order/${id}`);
            const data = await response.json();
            if (data?.success) {
                setOrderDetails(data.data);
                setShowOrderModal(true);
            }
        } catch (error) {
            console.error('Failed to fetch order details:', error);
        }
    };

    // Update order status (e.g., mark as completed)
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
            }
        } catch (error) {
            console.error('Failed to update order status:', error);
        }
    };

    // Add new product
    const addNewProduct = async (productData) => {
        try {
            const response = await fetch('http://localhost:3001/api/admin/new', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData),
            });
            const data = await response.json();
            if (data?.success) {
                alert('Product added successfully!');
                fetchOrders(); // Optionally, refresh the orders
            } else {
                alert('Failed to add product');
            }
        } catch (error) {
            console.error('Failed to add new product:', error);
        }
    };

    return (
        <div className="flex h-screen">
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
                    <section id="orders">
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <tr key={order.id} className="border-b">
                                                <td className="py-2 px-4">{order.id}</td>
                                                <td className="py-2 px-4">{order.customer}</td>
                                                <td className="py-2 px-4">{order.status}</td>
                                                <td className="py-2 px-4">{order.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                )}

                {activeSection === 'pending' && (
                    <section id="pending">
                        <h2 className="text-4xl font-bold mb-6 text-red-600">Pending Orders</h2>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <p className="text-gray-700 mb-4">View and update all pending orders here.</p>
                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-200">
                                    <thead>
                                        <tr className="bg-red-600 text-white">
                                            <th className="py-3 px-4">Order ID</th>
                                            <th className="py-3 px-4">Customer</th>
                                            <th className="py-3 px-4">Total</th>
                                            <th className="py-3 px-4">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pendingOrders.map((order) => (
                                            <tr key={order.id} className="border-b">
                                                <td className="py-2 px-4">{order.id}</td>
                                                <td className="py-2 px-4">{order.customer}</td>
                                                <td className="py-2 px-4">{order.total}</td>
                                                <td className="py-2 px-4">
                                                    <button
                                                        onClick={() => updateOrderStatus(order.id, 'completed')}
                                                        className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-500"
                                                    >
                                                        Mark as Completed
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                )}

                {activeSection === 'newProduct' && (
                    <section id="new-product">
                        <h2 className="text-4xl font-bold mb-6 text-blue-800">Add New Product</h2>
                        {/* Form to add new product */}
                        {/* You can create a form here to collect product data */}
                    </section>
                )}
            </main>
        </div>
    );
}

export default AdminDashboard;
