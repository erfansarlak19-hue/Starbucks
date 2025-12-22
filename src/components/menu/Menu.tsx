import Cards from "../cards/Cards";

export default function Home() {
  return (
		<div className="bg-[#ececec] flex flex-col">
			<div className="flex flex-col justify-items-center items-center pb-3">
				<div className="flex items-center gap-3 ">
					<img src="./public/logo/logo.png" alt="logo" className="w-17" />
					<h1 className="text-4xl font-bold">Starbucks</h1>
				</div>
				<h2 className="text-xl font-semibold">Starbucks Online Coffee Order</h2>
			</div>
      <Cards/>
      <div></div>
		</div>
	);
}
