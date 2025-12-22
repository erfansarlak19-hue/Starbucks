type ProductCardProps = {
  id: number;
	name: string;
	img: string;
	price: number;
	quantity: number;
};

export default function ProductCard(props: ProductCardProps) {
  const { name, img, price } = props
	return (
		<div>
			<div className="bg-[#1e3932] flex flex-col w-fit p-3 rounded-xl gap-3">
				<img
					src={img}
					alt={name}
					className="w-30"
				/>
				<h1 className="text-white font-semibold text-">{name}</h1>
				<p className="text-[#f8d1ad] font-bold">{price}</p>
				<div className="flex justify-center">
					<button className="bg-[#f8d1ad] w-8 h-8 cursor-pointer">+</button>
					<p className="bg-white w-8 h-8 flex items-center justify-center ">
						0
					</p>
					<button className="bg-[#f8d1ad] w-8 h-8 cursor-pointer">-</button>
				</div>
			</div>
		</div>
	);
}
