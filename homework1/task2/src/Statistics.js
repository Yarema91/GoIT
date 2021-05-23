import statisticalData from './Statistic-data.json';


const Statistics = ({stats}) => {
    return (
        <div>
            <section className="statistics">
                <h2 className="title">Upload stats</h2>

                <ul className="stat-list" >
                    {stats.map(stat =>(<li className="item">
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}</span>
                    </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Statistics;