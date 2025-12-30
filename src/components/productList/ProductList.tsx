import { useState } from "react";
import type { product } from "../menu/Menu";
import ProductCard from "../productCard/ProductCard";

const productList = [
	{
		id: 1,
		name: "Cappuccino",
		img: "./public/png/Cappuccino.png",
		price: 3.5,
		quantity: 0,
	},
	{
		id: 2,
		name: "Latte",
		img: "./public/png/Latte.png",
		price: 4,
		quantity: 0,
	},
	{
		id: 3,
		name: "Espresso",
		img: "./public/png/Espresso.png",
		price: 2.5,
		quantity: 0,
	},
	{
		id: 4,
		name: "Mocha",
		img: "./public/png/Mocha.png",
		price: 4.5,
		quantity: 0,
	},
	{
		id: 5,
		name: "Americano",
		img: "./public/png/Americano.png",
		price: 3,
		quantity: 0,
	},
];

type productListProps = {
	addToCart: (item: product) => void;
};

export default function ProductList(props: productListProps) {
	const { addToCart } = props;

	const [products, setProducts] = useState(productList);

	const handlePlus = (id: number) => {
		setProducts((prev) =>
			prev.map((item) => {
				if (item.id === id) {
					const newQty = item.quantity + 1;
					const updated = { ...item, quantity: newQty };
					addToCart(updated);
					return updated;
				}
				return item;
			})
		);
	};

const handleMinus = (id: number) => {
	setProducts((prev) =>
		prev.map((item) => {
			if (item.id === id) {
				const newQty = item.quantity > 0 ? item.quantity - 1 : 0;
				const updated = { ...item, quantity: newQty };
				addToCart(updated);
				return updated;
			}
			return item;
		})
	);
};

	return (
		<div className="flex gap-3">
			{products.map((item) => (
				<ProductCard
					key={item.id}
					id={item.id}
					name={item.name}
					img={item.img}
					price={item.price}
					quantity={item.quantity}
					onIncrease={handlePlus}
					onDecrease={handleMinus}
				/>
			))}
		</div>
	);
}