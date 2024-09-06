# Loyalty Frontend

This project is a frontend application for a loyalty program, built with React and TypeScript.

## Technologies Used

- React
- TypeScript
- React Router
- Axios

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- [Ichigo Loyalty Backend](https://github.com/bertrandhaine/ichigo-loyalty-be) running on a different port

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/bertrandhaine/ichigo-loyalty-frontend
   cd ichigo-loyalty-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file or use the `.env.example` file in the root directory and add the following:
   ```
   REACT_APP_BACKEND_API_URL=http://localhost:8080
   ```
   Replace `8080` with the port number where your Ichigo Loyalty Backend is running.

4. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `npm start` or `yarn start`: Runs the app in development mode
- `npm test` or `yarn test`: Launches the test runner
- `npm run build` or `yarn build`: Builds the app for production

## Project Structure
- `src/Utils`: Utility functions
- `src/components`: React components
- `src/components/COMPONENTS_NAME/hooks`: Custom React hooks
- `src/components/COMPONENTS_NAME/styles`: CSS files

## Pages

The application consists of two main pages:

1. Customer Tier Page:
   - Route: `/customer/:id/tier`
   - Component: `CustomerTierPage`
   - Description: Displays detailed information about a customer's loyalty tier status, including current tier, total spent, amount needed for the next tier, and potential downgrade information. It also includes a progress bar visualizing the customer's progress towards the next tier.

2. Order History Page:
   - Route: `/customer/:id/order-history`
   - Component: `OrderHistoryPage`
   - Description: Shows a paginated table of the customer's order history, including order ID, total amount spent, and date of each order. The page includes pagination controls for navigating through multiple pages of orders.

Both pages use the customer's ID from the URL parameters to fetch and display relevant information, and include error handling and loading states for improved user experience.

## API Documentation

For detailed API documentation, please refer to the [Ichigo Loyalty Backend repository](https://github.com/bertrandhaine/ichigo-loyalty-be).

Key endpoints used in this frontend:

- `GET /customer/{id}`: Fetch customer tier information
- `GET /customer/{id}/orders`: Fetch customer order history

## License

This project is licensed under the MIT License.
