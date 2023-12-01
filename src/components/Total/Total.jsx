import { useSelector } from "react-redux";

export default function Total() {
    const checkoutOrder = useSelector(store => store.savePizza);
    const collectionOfPizzas = useSelector(store => store.pizzaDatabaseData);


    // This function goes through our checkout order, and collects the ids
    //  to compare to the collection of pizza's id to get the price.
    const getTotal = () => {
        // The sum to return
        let sum = 0;

        // The loop through each individual item of checkout order.
        for (let index of checkoutOrder) {
            
            // Numifies the one filtered number we are grabbing.
            sum += Number(collectionOfPizzas.filter((newIndex) => {
                // Filters through the collectionOfPizzas and asks if their ID
                // is equal to our first loop id.
                return (
                    newIndex.id === index.id
                );
            })
            [0].price)
            // the above then enters the array which should only contain 1 item,
            // and grabs the price of it. Which is added to the sum.
        }
        console.log('Sum:', sum);
        return sum;
    }

    return (
        <h1 id="total">Total: {getTotal()}</h1>
    );
}