import styles from "./Table.module.scss"

type CarsType = {
    cars: {
        manufacturer: string,
        model: string
    }[]
}

export const Table = (props: CarsType) => {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Id</th>
                <th>Car</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {props.cars.map((el, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}