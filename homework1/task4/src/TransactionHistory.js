import transactions from './transactions.json';
import styleApp from './App.css';

// {
//     "id": "1e0700a2-5183-4291-85cc-2065a036a683",
//     "type": "invoice",
//     "amount": "964.82",
//     "currency": "LRD"
//   },

const TransactionHistory = ({items}) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                 {items.map(item =>(
                    <tr>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default TransactionHistory;