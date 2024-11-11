import React from 'react';

function PendingOrders() {
    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold mb-6 text-blue-800">Pending Orders</h2>
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
                            {/* Dummy data */}
                            <tr className="border-b">
                                <td className="py-2 px-4">67890</td>
                                <td className="py-2 px-4">Jane Smith</td>
                                <td className="py-2 px-4">$75.00</td>
                                <td className="py-2 px-4">
                                    <button className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-500">
                                        Mark as Completed
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PendingOrders;
