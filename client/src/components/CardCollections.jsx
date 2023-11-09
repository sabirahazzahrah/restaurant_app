import { useState } from "react"
import CardCuisine from "./CardCuisine"

const CardCollections = () => {
    const [data, setData] = useState([
        {
            id : 1,
            name : 'Nasi Kebuli',
            description : 'Nasi kebuli merupakan sajian nasi khas Timur Tengah. memakai banyak rempah kering dan segar yang dimasak bersama dengan nasi hingga meresap',
            price : 95000,
            imgUrl : 'https://th.bing.com/th/id/OIP.3fhf89ZZgmj5eEfcRmkV2wHaFQ?w=266&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            id : 2,
            name : 'Nasi Kebuli',
            description : 'Nasi kebuli merupakan sajian nasi khas Timur Tengah. memakai banyak rempah kering dan segar yang dimasak bersama dengan nasi hingga meresap',
            price : 95000,
            imgUrl : 'https://th.bing.com/th/id/OIP.3fhf89ZZgmj5eEfcRmkV2wHaFQ?w=266&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            id : 3,
            name : 'Nasi Kebuli',
            description : 'Nasi kebuli merupakan sajian nasi khas Timur Tengah. memakai banyak rempah kering dan segar yang dimasak bersama dengan nasi hingga meresap',
            price : 95000,
            imgUrl : 'https://th.bing.com/th/id/OIP.3fhf89ZZgmj5eEfcRmkV2wHaFQ?w=266&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            id : 4,
            name : 'Nasi Kebuli',
            description : 'Nasi kebuli merupakan sajian nasi khas Timur Tengah. memakai banyak rempah kering dan segar yang dimasak bersama dengan nasi hingga meresap',
            price : 95000,
            imgUrl : 'https://th.bing.com/th/id/OIP.3fhf89ZZgmj5eEfcRmkV2wHaFQ?w=266&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            id : 5,
            name : 'Nasi Kebuli',
            description : 'Nasi kebuli merupakan sajian nasi khas Timur Tengah. memakai banyak rempah kering dan segar yang dimasak bersama dengan nasi hingga meresap',
            price : 95000,
            imgUrl : 'https://th.bing.com/th/id/OIP.3fhf89ZZgmj5eEfcRmkV2wHaFQ?w=266&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            id : 6,
            name : 'Nasi Kebuli',
            description : 'Nasi kebuli merupakan sajian nasi khas Timur Tengah. memakai banyak rempah kering dan segar yang dimasak bersama dengan nasi hingga meresap',
            price : 95000,
            imgUrl : 'https://th.bing.com/th/id/OIP.3fhf89ZZgmj5eEfcRmkV2wHaFQ?w=266&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            id : 7,
            name : 'Nasi Kebuli',
            description : 'Nasi kebuli merupakan sajian nasi khas Timur Tengah. memakai banyak rempah kering dan segar yang dimasak bersama dengan nasi hingga meresap',
            price : 95000,
            imgUrl : 'https://th.bing.com/th/id/OIP.3fhf89ZZgmj5eEfcRmkV2wHaFQ?w=266&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            id : 8,
            name : 'Nasi Kebuli',
            description : 'Nasi kebuli merupakan sajian nasi khas Timur Tengah. memakai banyak rempah kering dan segar yang dimasak bersama dengan nasi hingga meresap',
            price : 95000,
            imgUrl : 'https://th.bing.com/th/id/OIP.3fhf89ZZgmj5eEfcRmkV2wHaFQ?w=266&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            createdAt : new Date(),
            updatedAt : new Date()
        }
    ])
    return (
        <>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
			<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
				<img src="https://th.bing.com/th/id/OIP.3fhf89ZZgmj5eEfcRmkV2wHaFQ?w=266&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"/>
				<div className="p-6 space-y-2 lg:col-span-5">
					<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Nasi Kebuli</h3>
					<span className="text-xs dark:text-gray-400">February 19, 2021</span>
					<p>Nasi kebuli sendiri terkadang memiliki nama yang bermacam-macam. Misalnya untuk di Madinah, Arab Saudi, menu yang satu ini dikenal dengan nama Mathbakh Mandhi. Nasi ini dimasak dengan 16 jenis bumbu yang dicampur ke dalam nasi putih atau nasi kuning khas. Ke 16  bumbu tersebut meliputi cengkeh, kapulaga, dan bunga japaron</p>
				</div>
			</a>
			<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((el) => {
                return <CardCuisine perData= {el} key={el.id}/>
            })}
			</div>
		</div>
    </>
    )
}

export default CardCollections