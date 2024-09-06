import React from "react";
import { useParams } from "react-router-dom";
import { CustomerTierData, useCustomerData } from "./hooks";
import "./styles/CustomerTierPage.css";
import { formatCurrency, formatDate } from "../../Utils";
import { ErrorMessage, LoadingMessage } from "../MessageComponent";

const CustomerTierPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { customerData, error } = useCustomerData(id || "");

  if (error) return <ErrorMessage message={error} />;
  if (!customerData) return <LoadingMessage />;

  const progress = calculateProgress(customerData);

  return (
    <div className="customer-tier">
      <h1 className="customer-tier__title">Customer Tier Information</h1>
      <CustomerInfoCard customerData={customerData} />
      <ProgressBar progress={progress} />
    </div>
  );
};

const CustomerInfoCard: React.FC<{ customerData: CustomerTierData }> = ({
  customerData,
}) => (
  <div className="customer-tier__card">
    <h2 className="customer-tier__tier-title">
      {customerData.name} - {getTierEmoji(customerData.tier)}{" "}
      {customerData.tier}
    </h2>
    <div className="customer-tier__info-grid">
      <InfoItem
        label="Total Spent"
        value={formatCurrency(customerData.totalSpent)}
      />
      <InfoItem
        label="Amount to Next Tier"
        value={formatCurrency(customerData.amountToNextTier)}
      />
      {customerData.downgradeTier && (
        <InfoItem label="Downgrade Tier" value={customerData.downgradeTier} />
      )}
      <InfoItem
        label="Downgrade Date"
        value={formatDate(customerData.downgradeDate)}
      />
      <InfoItem
        label="Amount to Avoid Downgrade"
        value={formatCurrency(customerData.amountToAvoidDowngrade)}
      />
    </div>
  </div>
);

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="customer-tier__progress-container">
    <h2 className="customer-tier__progress-title">Progress to Next Tier</h2>
    <div className="customer-tier__progress-bar">
      <div
        className="customer-tier__progress-fill"
        style={{ width: `${progress}%` }}
      >
        <span className="customer-tier__progress-text">{`${progress.toFixed(
          0
        )}%`}</span>
      </div>
    </div>
  </div>
);

const InfoItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="customer-tier__info-item">
    <span className="customer-tier__info-label">{label}:</span>
    <span className="customer-tier__info-value">{value}</span>
  </div>
);

const calculateProgress = (customerData: CustomerTierData): number => {
  if (customerData.amountToNextTier === 0) return 100;
  return (
    (customerData.totalSpent /
      (customerData.totalSpent + customerData.amountToNextTier)) *
    100
  );
};

const getTierEmoji = (tier: string): string => {
  const emojis: { [key: string]: string } = {
    bronze: "🥉",
    silver: "🥈",
    gold: "🥇",
  };
  return emojis[tier.toLowerCase()] || "";
};

export default CustomerTierPage;
