import React from "react";
import { useParams } from "react-router-dom";
import { useOrderHistory } from "./hooks/useOrderHistory";
import "./styles/OrderHistoryPage.css";
import { Order } from "./types";
import { ErrorMessage, LoadingMessage } from "../MessageComponent";
import { formatCurrency, formatDate } from "../../Utils";

const OrderHistoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { orders, currentPage, totalPages, isLoading, error, setCurrentPage } =
    useOrderHistory(id || "");

  if (isLoading) return <LoadingMessage />;
  if (error) return <ErrorMessage message={error} />;
  if (orders.length === 0) return <NoOrdersMessage />;

  return (
    <div className="order-history">
      <h2 className="order-history__title">Order History</h2>
      <div className="order-history__card">
        <OrderTable orders={orders} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

const NoOrdersMessage: React.FC = () => (
  <div className="order-history__message">No orders found.</div>
);

const OrderTable: React.FC<{ orders: Order[] }> = ({ orders }) => (
  <table className="order-history__table">
    <thead className="order-history__table-header">
      <tr>
        <th>Order ID</th>
        <th>Total</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order) => (
        <OrderRow key={order.id} order={order} />
      ))}
    </tbody>
  </table>
);

const OrderRow: React.FC<{ order: Order }> = ({ order }) => (
  <tr className="order-history__table-row">
    <td className="order-history__table-cell">{order.orderId}</td>
    <td className="order-history__table-cell">
      {formatCurrency(order.totalInCents)}
    </td>
    <td className="order-history__table-cell">{formatDate(order.date)}</td>
  </tr>
);

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => (
  <div className="order-history__pagination">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        className={`order-history__page-button ${
          index + 1 === currentPage ? "order-history__page-button--active" : ""
        }`}
        onClick={() => onPageChange(index + 1)}
        disabled={index + 1 === currentPage}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

export default OrderHistoryPage;
