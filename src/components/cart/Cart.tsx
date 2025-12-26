import type { product } from "../menu/Menu";

type cartProps = {
	cartItems: {product:product, count: number}[];
}

const allProducts: product[] = [
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

export default function Cart({cartItems}: cartProps ) {
  return (
		<div className="flex flex-col gap-3">
			<p className="text-center text-xl font-semibold">Bill</p>
			<div className="">
				<div className="flex gap-3">
					{allProducts.map((p) => {
						const found = cartItems.find((x) => x.product.id === p.id);
						const count = found?.count ?? 0;
						return (
							<div
								key={p.id}
								className="bg-[#1e3932] flex flex-col w-fit p-3 rounded-xl gap-3"
							>
								<img src={p.img} alt={p.name} className="w-30" />
								<div className="flex flex-col gap-3">
									<p className="text-white font-semibold">{p.name}</p>
									<p className="text-[#f8d1ad] font-bold">
										${count * p.price}
									</p>
									<p className="text-white font-semibold">Qty: {count}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
