import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!totalQuantity) return null;

  return (
    <div className="sm:p flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 sm:px-6 md:text-base ">
      <p className="space-x-4 font-semibold  text-stone-300 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart" href="#">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
