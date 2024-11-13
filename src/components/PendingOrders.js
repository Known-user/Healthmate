import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function PendingOrders() {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [newStatus, setNewStatus] = useState("");

  const fetchPendingOrders = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/admin/pendingOrders"
      );
      const data = await response.json();
      console.log(data);
      if (data?.success) setPendingOrders(data.data);
    } catch (error) {
      console.error("Failed to fetch pending orders:", error);
    }
  };

  const updateOrderStatus = async (id, status) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/admin/order/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        }
      );
      const data = await response.json();
      if (data?.success) {
        fetchPendingOrders();
      }
    } catch (error) {
      console.error("Failed to update order status:", error);
    }
  };

  useEffect(() => {
    fetchPendingOrders();
  }, []);

  return (
    <section id="orders" className="p-6">
      <h2 className="text-4xl font-bold mb-6 text-red-600">Pending Orders</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-gray-700 mb-4">
          View and update all pending orders here.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="py-3 px-4 text-center">Order ID</th>
                <th className="py-3 px-4 text-center">Customer</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Total</th>
                <th className="py-3 px-4 text-center">Update Status</th>
              </tr>
            </thead>
            <tbody>
              {pendingOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-100">
                  <td className="py-2 text-center px-4">{order.id}</td>
                  <td className="py-2 text-center px-4">{order.userId}</td>
                  <td className="py-2 text-center px-4">{order.status}</td>
                  <td className="py-2 text-center px-4">{order.totalPrice}</td>
                  <td className="py-2 text-center px-4">
                    <div className="flex flex-col items-center">
                      <select
                        id="status"
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                        className="mt-2 bg-white text-blue-700 py-2 px-4 rounded-md shadow-md focus:outline-none"
                      >
                        {["pending", "completed", "canceled", "refunded"].map(
                          (status) => (
                            status !== order.status && (
                              <option key={status} value={status}>
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                              </option>
                            )
                          )
                        )}
                      </select>
                      <button
                        onClick={() => updateOrderStatus(order.id, newStatus)}
                        className="mt-4 bg-green-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-green-500 transition-all"
                      >
                        Update Status
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default PendingOrders;
