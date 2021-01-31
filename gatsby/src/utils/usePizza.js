import { useContext } from "react";
import OrderContext from "../components/OrderContext";

export default function usePizza({ pizzas, inputs }) {
  const [order, setOrder] = useContext(OrderContext);
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }

  function removeFromOrder(index) {
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
  }
  return { order, addToOrder, removeFromOrder };
}
