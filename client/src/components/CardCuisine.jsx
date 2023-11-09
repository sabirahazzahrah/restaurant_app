const CardCuisine = ({perData}) => {
    return (
        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={perData.imgUrl}/>
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{perData.name}</h3>
                <span className="text-xs dark:text-gray-400">January 22, 2021</span>
                <p>{perData.description}</p>
            </div>
		</a>
    )
}

export default CardCuisine