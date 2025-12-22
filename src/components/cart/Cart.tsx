import type { product } from "../menu/Menu";
import ProductCard from "../productCard/ProductCard";

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
						<div key={product.id}>
							<ProductCard
								id={product.id}
								name={product.name}
								img={product.img}
								price={count * product.price}
								quantity={product.quantity}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
