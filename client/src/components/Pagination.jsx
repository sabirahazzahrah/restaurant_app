const Pagination = () => {
    return (
        <div className="flex justify-center">
			<div className="items-center space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex">
				<span className="block">Page 2 of 4</span>
				<div className="space-x-1">
					<button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow">
						<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="w-4">
							<polyline points="15 18 9 12 15 6"></polyline>
						</svg>
					</button>
					<button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow">
						<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="w-4">
							<polyline points="9 18 15 12 9 6"></polyline>
						</svg>
					</button>
				</div>
			</div>
		</div>
    )
}

export default Pagination