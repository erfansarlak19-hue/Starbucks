import type { product } from "../menu/Menu";

type cartProps = {
	cartItems: {product:product, count: number}[];
}

export default function Cart({cartItems}: cartProps ) {
  return (
		<div className="flex flex-col gap-3">
			<p className="text-center text-xl font-semibold">Bill</p>
			<div className="">
				<div className="flex gap-3">
					{cartItems.map(({ product, count }) => (
						<div
							key={product.id}
							className="bg-[#1e3932] flex flex-col w-fit p-3 rounded-xl gap-3"
						>
							<img src={product.img} alt={product.name} className="w-30" />
							<div className="flex flex-col gap-3">
								<p className="text-white font-semibold">{product.name}</p>
								<p className="text-[#f8d1ad] font-bold">
									${count * product.price}
								</p>
								<p className="text-white font-semibold">Qty: {count}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
