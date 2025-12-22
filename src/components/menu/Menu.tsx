import ProductList from "../productList/ProductList";
import Cart from "../cart/Cart";

export default function Home() {
  return (
		<div className="bg-[#ececec] flex flex-col gap-3 pt-3 justify-center items-center pl-3 pr-3">
			<div className="flex flex-col gap-2 ">
				<div className="flex items-center gap-3 ">
					<img src="./public/logo/logo.png" alt="logo" className="w-17" />
					<h1 className="text-4xl font-bold">Starbucks</h1>
				</div>
				<h2 className="text-xl font-semibold">Starbucks Online Coffee Order</h2>
			</div>
			<ProductList />
			<Cart />
			<p className="text-xl font-semibold">Total:$0</p>
			<button className="bg-[#e9c9a2] w-full rounded-sm text-white font-semibold p-2 cursor-pointer">
				Submit Order
			</button>
		</div>
	);
}
