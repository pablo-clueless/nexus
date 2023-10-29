import {
	AirplaneInFlight,
	Cloud,
	Cpu,
	Database,
	Equalizer,
	Heartbeat,
	Money,
	Newspaper,
	SoccerBall,
	Television,
} from "@phosphor-icons/react"

export const categories = [
	{
		name: "All",
		value: "",
		icon: <Cloud />,
	},
	{
		name: "Weather",
		value: "weather",
		icon: <Cloud />,
	},
	{
		name: "News",
		value: "news",
		icon: <Newspaper />,
	},
	{
		name: "Sports",
		value: "sports",
		icon: <SoccerBall />,
	},
	{
		name: "Finance",
		value: "finance",
		icon: <Money />,
	},
	{
		name: "Entertainment",
		value: "entertainment",
		icon: <Television />,
	},
	{
		name: "Health",
		value: "health",
		icon: <Heartbeat />,
	},
	{
		name: "Travel",
		value: "travel",
		icon: <AirplaneInFlight />,
	},
	{
		name: "Technology",
		value: "technology",
		icon: <Cpu />,
	},
	{
		name: "Music",
		value: "music",
		icon: <Equalizer />,
	},
	{
		name: "Data",
		value: "data",
		icon: <Database />,
	},
]
