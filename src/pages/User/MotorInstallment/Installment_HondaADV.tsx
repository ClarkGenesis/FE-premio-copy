import { useState } from "react";

import Breadcrumb from "../../../components/UserBreadcrums";
import Header from "../../../layouts/UserLayouts/UserHeader";
import Sidemenu from "../../../layouts/UserLayouts/UserSidemenu";

function HondaADV() {
    // State variables to manage user inputs and calculated results
    const [income, setIncome] = useState(""); // Customer's estimated income
    const [downPayment, setDownPayment] = useState(""); // Down payment input
    const [interestRate, setInterestRate] = useState(5); // Default interest rate (5%)
    const [approvableLoan, setApprovableLoan] = useState(0); // Loan amount that can be approved
    const [totalCashout, setTotalCashout] = useState(0); // Total cash out required
    const [monthlyPayments, setMonthlyPayments] = useState<{ term: number; monthlyPayment: string }[]>([]); // Monthly payment plans

    // Constants for the motorcycle price and additional fees
    const hondaADV160Price = 164900; // Price of Honda ADV 160 in PHP
    const registrationFee = 1500; // Registration fee
    const docsStampFee = 600; // Documentary stamp fee

    // Financing options with different interest rates
    const financingOptions = [
        { label: "Standard Bank Loan", rate: 5 }, // 5% interest rate
        { label: "Flexible Financing", rate: 4.5 }, // 4.5% interest rate
        { label: "Premium Financing", rate: 6 }, // 6% interest rate
    ];

    // Function to calculate the installment details
    const calculateInstallment = () => {
        const downPaymentValue = Number(downPayment) || 0; // Convert down payment to a number
        if (downPaymentValue <= 0) {
            alert("Please enter a valid down payment."); // Validate down payment
            return;
        }

        if (downPaymentValue > hondaADV160Price) {
            alert("Down payment cannot exceed the motorcycle price."); // Ensure down payment is not greater than the price
            return;
        }

        // Calculate the loan amount
        const loanAmount = hondaADV160Price - downPaymentValue;
        setApprovableLoan(loanAmount); // Update approvable loan state

        // Calculate the total cash out (down payment + fees)
        const cashOut = downPaymentValue + registrationFee + docsStampFee;
        setTotalCashout(cashOut); // Update total cash out state

        // Define loan terms in months
        const terms = [12, 18, 24, 30, 36]; // Loan terms in months
        const monthlyInterest = (interestRate / 100) / 12; // Convert annual interest rate to monthly rate

        // Calculate monthly payments for each term
        const payments = terms.map((term) => {
            const monthlyPayment = loanAmount > 0
                ? (loanAmount * monthlyInterest) /
                  (1 - Math.pow(1 + monthlyInterest, -term)) // Formula for monthly payment
                : 0; 
            return { term, monthlyPayment: monthlyPayment.toFixed(2) }; // Format monthly payment to 2 decimal places
        });

        setMonthlyPayments(payments); // Update monthly payments state
    };

    return (
        <>
            <Header />
            <Sidemenu />
            <div className="main-content app-content">
            <Breadcrumb
                        title="Installment Calculator"
                        links={[{ text: "Honda ADV 160", link: "/HondaADV" }]}
                        active="Installment Carculator"/> 
                <div className="container-fluid">
                    <div className="p-4">
                        <p className="mt-2">
                            The calculator will help you determine the estimated monthly payments for your desired motorcycle loan.
                            Please visit our branch to get a final computation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {/* Left Section - Input Fields */}
                            <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-50">
                                <h5 className="text-md font-semibold mb-4">Input Details</h5>

                                {/* Income Input */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Customer Estimated Income:</label>
                                    <input
                                        type="number"
                                        className="w-full border border-gray-300 p-2 rounded"
                                        placeholder="Enter estimated income"
                                        value={income}
                                        onChange={(e) => setIncome(e.target.value)}
                                    />
                                </div>

                                {/* Down Payment Input */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Down Payment:</label>
                                    <input
                                        type="number"
                                        className="w-full border border-gray-300 p-2 rounded"
                                        placeholder="Enter down payment"
                                        value={downPayment}
                                        onChange={(e) => setDownPayment(e.target.value)}
                                    />
                                </div>

                                {/* Interest Rate Selection */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Select Financing Plan:</label>
                                    <select
                                        className="w-full border border-gray-300 p-2 rounded"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(Number(e.target.value))}
                                    >
                                        {financingOptions.map((option) => (
                                            <option key={option.label} value={option.rate}>
                                                {option.label} - {option.rate}% Interest
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Calculate Button */}
                                <button
                                    onClick={calculateInstallment}
                                    className="bg-red-500 text-white py-2 px-6 rounded-lg border border-blue-600 shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 active:scale-95"
                                >
                                    Calculate
                                </button>

                            </div>

                            {/* Right Section - Results */}
                            <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-50">
                                <h5 className="text-md font-semibold">Results</h5>
                                <p className="mt-4">Approvable Loan Amount: <span className="font-bold">₱{approvableLoan.toLocaleString()}</span></p>
                                <p>Total Cash Out: <span className="font-bold">₱{totalCashout.toLocaleString()}</span></p>

                                <h5 className="text-md font-semibold mt-4 border-b-2 pb-2 border-gray-300">
                                    Estimated Monthly Payments:
                                </h5>
                                <div className="border border-gray-300 rounded-lg p-4 mt-4 shadow-sm bg-white">
                                    <ul>
                                        {monthlyPayments.length > 0 ? (
                                            monthlyPayments.map((payment, index) => (
                                                <li
                                                    key={index}
                                                    className="border border-gray-300 rounded-lg p-3 mb-2 shadow-sm bg-gray-50"
                                                >
                                                    {payment.term} Months:{" "}
                                                    <span className="inline-block font-bold text-blue-600">
                                                        ₱{payment.monthlyPayment}
                                                    </span>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="text-gray-500">No installment plans available</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HondaADV;
