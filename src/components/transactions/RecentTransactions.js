import React from "react";
import RecentUi from "./RecentUi";

const RecentTransactions = () => {
  //fetch from the db and save it to a const and passing it as props
  //adding dummy data from now
  const transactions = [
    { user: "user1", title: "Registration", amount: "-3000", date: "12/10" },
    { user: "Admin", title: "Sales", amount: "+2000", date: "2/10" },
    { user: "Admin", title: "Sales", amount: "+2000", date: "2/10" },
    { user: "Admin", title: "Sales", amount: "+2000", date: "2/10" },
    { user: "Admin", title: "Sales", amount: "+2000", date: "2/10" },
    { user: "Admin", title: "Sales", amount: "+2000", date: "2/10" },
    { user: "Admin", title: "Sales", amount: "+2000", date: "2/10" },
    { user: "Admin", title: "Sales", amount: "+2000", date: "2/10" },
    { user: "Admin", title: "Sales", amount: "+2000", date: "2/10" },
  ];

  const recentList = transactions.map((transaction) => {
    return (
      <RecentUi
        title={transaction.title}
        user={transaction.user}
        amount={transaction.amount}
        date={transaction.date}
      />
    );
  });
  return (
    <div className="p-2" style={{ borderRadius: "7px", backgroundColor: "" }}>
      <h2>Recent</h2>
      <div>{recentList}</div>
    </div>
  );
};

export default RecentTransactions;
