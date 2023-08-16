import TableElement from "./TableElement";

const InvestTable = (props) => {
    let tableRow = props.table.map((row) => {
        return <tr key={row.yearNum}>
            <TableElement data={row.year} />
            <TableElement data={row.savingsEndOfYear} />
            <TableElement data={row.yearlyInterest} />
            <TableElement data={0} />
            <TableElement data={row.yearlyContribution} />
        </tr>;;
    });

    console.log(tableRow);

    return <table className="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {tableRow}
        </tbody>
    </table>;
}

export default InvestTable;