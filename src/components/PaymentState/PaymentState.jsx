import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import postOrder from "../../redux/Actions/Order/postOrder";
import cleanCart from "../../redux/Actions/ShoppingCart/cleanCart";
import { NavLink } from "react-router-dom";

const PaymentState = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);
  const products = useSelector((state) => state.cart);

  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get("data");
  const mpId = parsedData.id;
  const totalAmount = parsedData.totalAmount;
  const parsedData = JSON.parse(decodeURIComponent(data));

  console.log(parsedData);

  useEffect(() => {
    // necesitamos despachar la orden al back primero
    if (parsedData.status === "approved") {
      const paymentApproved = async () => {
        if (userId.length) {
          // una vez tenemos el success
          // despachamos el envio de informacion como : payment status, order ID
          //despachar /purchase/add userId y products list para agregar la compra a la lista de compras del usuario
          const response = await dispatch(
            postOrder({ userId, products, mpId, totalAmount })
          );
          if (response == 200) {
            console.log("order added");
            //despachar limpiar el carrito
            dispatchEvent(cleanCart());
          }
          // - The payment gateway responds with a unique payment URL or an order ID.
        }
      };
    }
    // }, [dispatch, userId, cart, parsedData]);
  }, [parsedData]);
  return (
    <div>
      <h2>Compra realizada con exito!</h2>
      <NavLink>Ir al detalle de compra</NavLink>
      <NavLink>Volver al inicio</NavLink>
    </div>
  );
};

export default PaymentState;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import postOrder from "../../redux/Actions/Purchase/PostPurchase";

// const PaymentState = () => {
//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.userId);
//   const cart = useSelector((state) => state.cart);
//   const location = useLocation();

//   const queryParams = new URLSearchParams(location.search);
//   const data = queryParams.get("data");
//   const parsedData = JSON.parse(decodeURIComponent(data));

//   useEffect(() => {
//     if (parsedData.status === "approved") {
//       const paymentApproved = async () => {
//         if (userId && cart.length > 0) {
//           try {
//             // Dispatch an action to create an order and get the payment URL
//             const response = await dispatch(postOrder(cart));
//             const paymentURL = response.data.paymentURL;
//             // userId , orderStatus , currency, totalOrder (suma),  productos, paymentId, paymentStatus

//             // Redirect the user to the payment gateway's page
//             window.location.href = paymentURL;
//           } catch (error) {
//             console.error("Error initiating payment:", error);
//           }
//         }
//       };
//       paymentApproved();
//     }
//   }, [parsedData]);

//   return <div></div>;
// };

// export default PaymentState;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom"; // Import useHistory for redirection
// import postPurchase from "../../redux/Actions/Purchase/PostPurchase";

// const PaymentState = () => {
//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.userId);
//   const cart = useSelector((state) => state.cart);
//   const history = useHistory();

//   const queryParams = new URLSearchParams(location.search);
//   const data = queryParams.get("data");
//   const parsedData = JSON.parse(decodeURIComponent(data));

//   useEffect(() => {
//     if (parsedData.status === "approved") {
//       const paymentApproved = async () => {
//         if (userId && cart.length > 0) {
//           try {
//             // Dispatch an action to create an order and get the payment URL
//             const response = await dispatch(postPurchase(cart));
//             const paymentURL = response.data.paymentURL;

//             // Redirect the user to the payment gateway's page
//             window.location.href = paymentURL;
//           } catch (error) {
//             console.error("Error initiating payment:", error);
//           }
//         }
//       };
//       paymentApproved();
//     }
//   }, [dispatch, userId, cart, parsedData]);

//   return <div></div>;
// };

// export default PaymentState;

// In your backend, you should have a route (e.g., /payment/createOrder) that receives the list of products from your frontend, creates an order with Mercado Pago, and returns the payment URL.
// You should not mark the order as successful or clean the cart at this stage. These actions should be performed only after receiving payment confirmation from Mercado Pago.
