import ProductList from "../productList/ProductList";
import Cart from "../cart/Cart";
import { useState } from "react";

export type product = {
	id: number;
	name: string;
	img: string;
	price: number;
	quantity: number;
};


export default function Menu() {
	const [cartItems, setCartItems] = useState<
		{ product: product; count: number }[]
	>([]);

	const handelAddToCart = (item:product) => {
		const index = cartItems.findIndex((cartItem)=> cartItem.product.id===item.id);
		if (index === -1) {
			setCartItems([...cartItems, { product: item, count: 1 }]);
		} else {
			setCartItems(
				cartItems.map((cartItem) =>
					cartItem.product.id === item.id
						? { product: item, count: cartItem.count + 1 }
						: cartItem
				)
			);
		}
	};
  return (
		<div className="bg-[#ececec] flex flex-col gap-3 pt-3 justify-center items-center pl-3 pr-3">
			<div className="flex flex-col gap-2 ">
				<div className="flex items-center gap-3 ">
					<img src="./public/logo/logo.png" alt="logo" className="w-17" />
					<h1 className="text-4xl font-bold">Starbucks</h1>
				</div>
				<h2 className="text-xl font-semibold">Starbucks Online Coffee Order</h2>
			</div>
			<ProductList addToCart={handelAddToCart}/>
			<Cart cartItems={cartItems}/>
			<p className="text-xl font-semibold">Total:$0</p>
			<button className="bg-[#e9c9a2] w-full rounded-sm text-white font-semibold p-2 cursor-pointer">
				Submit Order
			</button>
		</div>
	);
}
