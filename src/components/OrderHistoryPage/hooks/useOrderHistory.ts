import { useState, useEffect } from "react";
import axios from "axios";
import { Order } from "../types";

interface OrderHistoryResponse {
  orders: Order[];
  currentPage: number;
  totalPages: number;
}

export const useOrderHistory = (
  customerId: string,
  initialPage: number = 1
) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get<OrderHistoryResponse>(
          `${process.env.REACT_APP_BACKEND_API_URL}/customer/${customerId}/orders`,
          { params: { page: currentPage } }
        );
        setOrders(response.data.orders);
        setCurrentPage(response.data.currentPage);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to fetch orders. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [customerId, currentPage]);

  return { orders, currentPage, totalPages, isLoading, error, setCurrentPage };
};
