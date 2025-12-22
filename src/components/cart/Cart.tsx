export default function Cart() {
  return (
		<div className="flex flex-col gap-3">
      <p className="text-center text-xl font-semibold">Bill</p>
			<div className="flex gap-3">
				<div className="bg-[#1e3932] flex flex-col w-fit p-3 rounded-xl gap-3">
					<img
						src="./public/png/Cappuccino.png"
						alt="Cappuccino"
						className="w-30"
					/>
					<h1 className="text-white font-semibold text-">Cappuccino</h1>
					<p className="text-[#f8d1ad] font-bold">$3.5</p>
					<p className="text-white">Qty: 0</p>
				</div>
			</div>
		</div>
	);
}
