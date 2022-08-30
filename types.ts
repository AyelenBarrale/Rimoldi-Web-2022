export interface CustomHeadProps {
	title: string,
	description: string,
	robots?: boolean,
	rest?: {
		title: string,
		description: string
	}[] | null
}