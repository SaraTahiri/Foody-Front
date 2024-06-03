/* JSX */
import React from 'react';

const Customer = () => {
    // Sample data
    const data = [
        { id: 1, joinDate: "2020-01-01", name: "John", location: "New York", totalSpent: "$1,000.00", lastOrder: "$200.00" },
        { id: 2, joinDate: "2020-02-01", name: "Jane", location: "Chicago", totalSpent: "$2,000.00", lastOrder: "$400.00" },
        { id: 3, joinDate: "2020-03-01", name: "Mike", location: "Los Angeles", totalSpent: "$3,000.00", lastOrder: "$600.00" },
        { id: 4, joinDate: "2020-04-01", name: "Emma", location: "San Francisco", totalSpent: "$4,000.00", lastOrder: "$800.00" },
        { id: 5, joinDate: "2020-05-01", name: "Oliver", location: "Seattle", totalSpent: "$5,000.00", lastOrder: "$1,000.00" },
        { id: 6, joinDate: "2020-06-01", name: "Harry", location: "Boston", totalSpent: "$6,000.00", lastOrder: "$1,200.00" },
        { id: 7, joinDate: "2020-07-01", name: "Liam", location: "Dallas", totalSpent: "$7,000.00", lastOrder: "$1,400.00" },
        { id: 8, joinDate: "2020-08-01", name: "Lucas", location: "Miami", totalSpent: "$8,000.00", lastOrder: "$1,600.00" },
        { id: 9, joinDate: "2020-09-01", name: "Mason", location: "Orlando", totalSpent: "$9,000.00", lastOrder: "$1,800.00" },
        { id: 10, joinDate: "2020-10-01", name: "Ethan", location: "Denver", totalSpent: "$10,000.00", lastOrder: "$2,000.00" }
    ];

    return (
        <table className="table-auto" style={{ width: '1350px' }}>
            <thead>
                <tr style={{ backgroundColor: '#87A922' }}>
                    <th className="px-4 py-3" style={{ color: '#FFFFFF', textAlign: 'center' }}>Customer ID</th>
                    <th className="px-4 py-3" style={{ color: '#FFFFFF', textAlign: 'center' }}>Join Date</th>
                    <th className="px-4 py-3" style={{ color: '#FFFFFF', textAlign: 'center' }}>Customer Name</th>
                    <th className="px-4 py-3" style={{ color: '#FFFFFF', textAlign: 'center' }}>Location</th>
                    <th className="px-4 py-3" style={{ color: '#FFFFFF', textAlign: 'center' }}>Total Spent</th>
                    <th className="px-4 py-3" style={{ color: '#FFFFFF', borderTopRightRadius: '5px', borderBottomRightRadius: '5px', textAlign: 'center' }}>Last Order</th>
                </tr>
            </thead>
            <tbody className="rounded-table">
                <tr style={{ height: '20px' }}></tr>
                {data.map((row, index) => (
                    <tr key={index} className="tableRow">
                        <td className="px-4 py-8" style={{ textAlign: 'center' }}>{row.id}</td>
                        <td className="px-4 py-8" style={{ textAlign: 'center' }}>{row.joinDate}</td>
                        <td className="px-4 py-8" style={{ textAlign: 'center' }}>{row.name}</td>
                        <td className="px-4 py-8" style={{ textAlign: 'center' }}>{row.location}</td>
                        <td className="px-4 py-8" style={{ textAlign: 'center' }}>{row.totalSpent}</td>
                        <td className="px-4 py-8" style={{ textAlign: 'center' }}>
    <div style={{ backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px' }}>
        {row.lastOrder}
    </div>
</td>                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Customer;