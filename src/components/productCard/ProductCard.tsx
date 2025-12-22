type ProductCardProps = {
	id: number;
	name: string;
	img: string;
	price: number;
	quantity: number;
	onIncrease: (id: number) => void;
	onDecrease: (id: number) => void;
};

export default function ProductCard(props: ProductCardProps) {
	const { id, name, img, price, quantity, onIncrease, onDecrease } = props;
	return (
		<div className="bg-[#1e3932] flex flex-col w-fit p-3 rounded-xl gap-3">
			<img src={img} alt={name} className="w-30" />
			<h1 className="text-white font-semibold">{name}</h1>
			<p className="text-[#f8d1ad] font-bold">${price}</p>
			<div className="flex justify-center">
				<button
					onClick={() => onIncrease(id)}
					className="bg-[#f8d1ad] w-8 h-8 cursor-pointer"
				>
					+
				</button>
				<p className="bg-white w-8 h-8 flex items-center justify-center ">
					{quantity}
				</p>
				<button
					onClick={() => onDecrease(id)}
					className="bg-[#f8d1ad] w-8 h-8 cursor-pointer"
				>
					-
				</button>
			</div>
		</div>
	);
}
