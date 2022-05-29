import { useContext } from "react";
import { ProductContext } from "../context";

function FilterBar() {
	const { handleFilter } = useContext(ProductContext);

	return(
		<div  className="flex flex-col items-center space-y-2 sm:block bg-sky-400 px-6 py-2 space-x-4">
			<label className="size-lg text-white font-semibold">Filter products by: </label>
			<select className="rounded-xl px-4 py-1" onChange={(e) => handleFilter(e)}>
				<option value="default">--Please choose an option--</option>
			   	<option value="lth">Price: Low to high</option>
			   	<option value="htl">Price: Hight to Low</option>
			</select>
		</div>
	);
}

export default FilterBar;