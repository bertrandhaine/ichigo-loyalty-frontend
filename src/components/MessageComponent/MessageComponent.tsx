import React from "react";
import "./styles/MessageComponent.css";

export const LoadingMessage: React.FC = () => (
  <div className="message loading-message">Loading...</div>
);

export const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="message error-message">{message}</div>
);
