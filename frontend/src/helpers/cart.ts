import showToast from "./showToast";

// Update cart items
export const updateCart = async (actionName: string, productId: number) => {
  // Get cart
  console.log(...document.cookie.split(";"));
  fetch(
    `${
      import.meta.env.PUBLIC_SERVER_URL
    }/api/users/me/?populate[cart][populate][0]=image`,
    {
      headers: new Headers({
        Authorization: `Bearer ${document.cookie
          .split(";")
          .at(0)
          .split("=")
          .at(1)}`,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    }
  )
    .then((res) => {
      if (res.ok === false) {
        showToast("Error", "OOPS :( Maybe you haven't SIGN IN 😬 1");
        return;
      }
      return res.json();
    })
    .then((data) => {
      let isAlreadyInCart = false;
      let updatedCart = data.cart ?? [];

      // Updated cart after deleting cartItem
      if (actionName === "delete") {
        // Update user cart, need only product ids --> example [3, 4, 6]
        updatedCart = updatedCart
          .filter((cartItem: { id: number }) => cartItem.id !== productId)
          .map((cartItem: { id: number }) => cartItem.id);
      }

      // Updated cart after adding cartItem
      if (actionName === "add") {
        // Update user cart, need only product ids --> example [3, 4, 6]
        updatedCart = updatedCart.map(
          (cartItem: { id: number }) => cartItem.id
        );

        // Check if item is already in the cart
        if (updatedCart.indexOf(productId) !== -1) {
          // If yes, show toast notification
          showToast("Cart", "Product is already in your cart!");
          isAlreadyInCart = true;
        }
        if (updatedCart.indexOf(productId) === -1) {
          // If not, add it to the cart
          updatedCart.push(productId);
        }
      }

      if (!isAlreadyInCart) {
        fetch(`${import.meta.env.PUBLIC_SERVER_URL}/api/users/${data.id}`, {
          method: "PUT",
          headers: new Headers({
            Authorization: `Bearer ${document.cookie
              .split(";")
              .at(0)
              .split("=")
              .at(1)}`,
            "Content-Type": "application/json",
          }),
          body: JSON.stringify({ cart: [...updatedCart] }),
        }).then((res) => {
          if (res.ok === false) {
            showToast("Error", "OOPS :( Maybe you haven't SIGN IN 😬 2");
          }
          if (res.ok === true) {
            showToast("Success", "Update the page to see the difference!");
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      showToast("Error", "OOPS :( Maybe you haven't SIGN IN 😬 4");
    });
};
