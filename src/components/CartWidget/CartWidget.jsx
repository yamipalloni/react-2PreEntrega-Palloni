import { CiShoppingCart } from "react-icons/ci";

const CartWidget = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "20px",
        alignItems: "center",
        width: "30%",
        justifyContent: "space-between",
      }}
    >
      <CiShoppingCart size={30} />
      10
    </div>
  );
};

export default CartWidget;