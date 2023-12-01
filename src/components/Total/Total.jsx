import { useSelector } from "react-redux";

export default function Total() {
    const checkoutOrder = useSelector(store => store.savePizza);
    const collectionOfPizzas = useSelector(store => store.pizzaDatabaseData);

    console.log('Hello');
    const getTotal = () => {
        let sum = 0;
        for (let index of checkoutOrder) {
            sum += Number(collectionOfPizzas.filter((newIndex) => {
                return (
                    newIndex.id === index.id
                );
            })
            [0].price)
        }
        console.log('Sum:', sum);
        return sum;
    }

    return (
        <h1 id="total">Total: {getTotal()}</h1>
    );
}