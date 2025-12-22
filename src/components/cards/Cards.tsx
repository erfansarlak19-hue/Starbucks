export default function Cards() {
  return (
		<div>
			<div className="flex ml-3 gap-3 justify-center">
				<div className="bg-[#1e3932] flex flex-col w-fit p-3 rounded-xl gap-3">
					<img
						src="./public/png/Cappuccino.png"
						alt="Cappuccino"
						className="w-30"
					/>
					<h1 className="text-white font-semibold text-">Cappuccino</h1>
					<p className="text-[#f8d1ad] font-bold">$3.5</p>
					<div className="flex justify-center">
						<button className="bg-[#f8d1ad] w-8 h-8">+</button>
						<p className="bg-white w-8 h-8 flex items-center justify-center ">
							0
						</p>
						<button className="bg-[#f8d1ad] w-8 h-8">-</button>
					</div>
				</div>
			</div>
		</div>
	);
}
