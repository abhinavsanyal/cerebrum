import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Logo Maker",
	desc: "Analyze your logo requirements and generate a logo for your business.",
	category: "Business",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "gray-500",
	toColor: "gray-500",

	to: "/ai/logomaker",
	api: "/ai/logomaker",
	outputType: "image",
	output: {
		title: "Logo Maker",
		desc: "Here is your logo",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Describe your logo",
		desc: "A sentence or paragraph you wish to describe how your logo should look like.",
		// n: 1,
		prompts: [{ 
				title: "Description",
				attr: "content",  
				value: "", 
				placeholder: "e.g. a cute blue baby bird logo in a white circle as the background", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "red ocean wave over the twitter logo, digital art",
			},
		],
		example: {
			output: "https://openai-labs-public-images-prod.azureedge.net/user-Upgegn1YVovvuTg1CWi1lcDD/generations/generation-993WcS5aAWOA2XfgO2NeFt3X/image.webp",
			// outputs: [
			// 	"The sun is very old, over 4.5 billion years",
			// 	"At 10,000 degrees, sun is also very hot",
			// 	"Gasses called coronal mass ejections erupt from the sun",
			// ],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj

