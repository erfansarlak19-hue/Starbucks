import { useState } from "react";

type ProductCardProps = {
  id: number;
	name: string;
	img: string;
	price: number;
	quantity: number;
	handelClick?: () => void;
};

export default function ProductCard(props: ProductCardProps) {
  const { name, img, price, } = props
	const [qty, setQty] = useState<number>(0);
	return (
		<div className="bg-[#1e3932] flex flex-col w-fit p-3 rounded-xl gap-3">
			<img src={img} alt={name} className="w-30" />
			<h1 className="text-white font-semibold text-">{name}</h1>
			<p className="text-[#f8d1ad] font-bold">${price}</p>
			<div className="flex justify-center">
				<button
					onClick={() => setQty((q) => q + 1)}
					className="bg-[#f8d1ad] w-8 h-8 cursor-pointer"
				>
					+
				</button>
				<p className="bg-white w-8 h-8 flex items-center justify-center ">{qty}</p>
				<button
					onClick={() => setQty((q) => Math.max(0, q - 1))}
					className="bg-[#f8d1ad] w-8 h-8 cursor-pointer"
				>
					-
				</button>
			</div>
		</div>
	);
}
