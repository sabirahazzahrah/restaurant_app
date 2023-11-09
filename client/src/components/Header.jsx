const Header = () => {
    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
				<div className="container flex justify-between h-16 mx-auto">
					<ul className="items-stretch hidden space-x-3 lg:flex">
						<li className="flex">
							<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Link</a>
						</li>
						<li className="flex">
							<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</a>
						</li>
						<li className="flex">
							<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</a>
						</li>
					</ul>
					<div className="flex items-center md:space-x-4">
						<div className="relative">
							<span className="absolute inset-y-0 left-0 flex items-center pl-2">
								<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
									<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
										<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
									</svg>
								</button>
							</span>
							<input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900"/>
						</div>
						<button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-gray-900">Log in</button>
					</div>
					<button title="Open menu" type="button" className="p-4 lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>
                <div>
			<div className="relative flex items-center justify-center w-full dark:text-gray-50">
				<button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ri focus:ri focus:ri">
					<svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
						<path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					</svg>
				</button>
				<div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
					<div className="relative flex flex-shrink-0 w-full sm:w-auto">
						<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://source.unsplash.com/random/240x360/?1" alt="Image 1"/>
					</div>
					<div className="relative flex flex-shrink-0 w-full sm:w-auto">
						<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://source.unsplash.com/random/240x360/?2" alt="Image 2"/>
					</div>
					<div className="relative flex flex-shrink-0 w-full sm:w-auto">
						<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://source.unsplash.com/random/240x360/?3" alt="Image 3"/>
					</div>
					<div className="relative flex flex-shrink-0 w-full sm:w-auto">
						<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://source.unsplash.com/random/240x360/?4" alt="Image 4"/>
					</div>
					<div className="relative flex flex-shrink-0 w-full sm:w-auto">
						<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://source.unsplash.com/random/240x360/?5" alt="Image 5"/>
					</div>
				</div>
				<button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ri focus:ri focus:ri">
					<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
						<path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					</svg>
				</button>
			</div>
		</div>
			</header>
    )
}

export default Header