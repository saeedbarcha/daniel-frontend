import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./TransactionCard.css";

const TransactionsCard = ({ userData, isLoading }) => {
  const payout = userData?.payout_amount || 0;

  const data = [
    { year: "", value: 0 },
    { year: "2023", value: payout * 0.2 },
    { year: "2024", value: payout * 0.5 },
    { year: "2025", value: payout },
  ];

  const CustomDot = ({ cx, cy }) => (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={18}
        fill="#B22222"
        stroke="#FFD700"
        strokeWidth={3}
      />
      <text
        x={cx}
        y={cy + 5}
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="gold"
      >
        $
      </text>
    </g>
  );

  // Generate Y ticks based on payout amount
  const step = Math.ceil(payout / 3);
  const yTicks = [step, step * 2, payout];

  return (
    <div className="transaction-wrapper">
      <div
        className="transaction-left"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <h1
          className="org-title"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem",
            color: "#FFD700",
            margin: 0,
            textAlign: "center",
          }}
        >
          THE TRUMP <br /> ORGANIZATION
        </h1>
        <h2
          className="org-subtitle"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "2rem",
            color: "#FFD700",
            marginTop: "0.5rem",
            textAlign: "center",
          }}
        >
          2025 FINAL CASHOUT <br /> PROJECTION
        </h2>
      </div>

      <div className="transaction-right">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 40, left: 10, bottom: 20 }}
          >
            <CartesianGrid vertical horizontal strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              tick={{ fill: "white", fontWeight: "bold" }}
              axisLine={{ stroke: "#FFD700", strokeWidth: 2 }}
              tickLine={false}
            />
            <YAxis
              //   domain={[0, payout]}
              ticks={yTicks}
              tickFormatter={(v) => `$${v.toLocaleString()}`}
              tick={{ fill: "white", fontWeight: "bold" }}
              axisLine={{ stroke: "#FFD700", strokeWidth: 2 }}
              //   tickLine={false}
            />
            <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ff0000"
              strokeWidth={4}
              dot={<CustomDot />}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionsCard;
