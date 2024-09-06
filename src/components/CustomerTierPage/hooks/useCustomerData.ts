import { useState, useEffect } from "react";
import axios from "axios";

export interface CustomerTierData {
  name: string;
  tier: string;
  totalSpent: number;
  amountToNextTier: number;
  startOfTierCalculation: string;
  downgradeTier: string | null;
  downgradeDate: string;
  amountToAvoidDowngrade: number;
}

export const useCustomerData = (id: string) => {
  const [customerData, setCustomerData] = useState<CustomerTierData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/customer/${id}`
        );
        setCustomerData(response.data);
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setError("Failed to fetch customer data");
      }
    };

    fetchCustomerData();
  }, [id]);

  return { customerData, error };
};
