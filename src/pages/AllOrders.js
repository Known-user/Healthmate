import React from 'react';

function AllOrders() {
    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold mb-6 text-blue-800">All Orders</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
                {/* Orders Table */}
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
                            {/* Dummy data */}
                            <tr className="border-b">
                                <td className="py-2 px-4">12345</td>
                                <td className="py-2 px-4">John Doe</td>
                                <td className="py-2 px-4">Shipped</td>
                                <td className="py-2 px-4">$120.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AllOrders;
