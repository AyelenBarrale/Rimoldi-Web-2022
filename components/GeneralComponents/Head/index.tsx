import Head from 'next/head'
import { useRouter } from 'next/router'
import { CustomHeadProps } from '../../../types'

const CustomHead: React.FC<CustomHeadProps> = ({ title, description, robots = true, rest }: CustomHeadProps) => {
	const router = useRouter()
	const mainTitle = `${title} | Rimoldi. Graphic Design`

	return (
		<Head>
			<title>{mainTitle}</title>
			<meta
				name="description"
				content={description}
			/>
			<meta
				name='robots'
				content={robots ? 'follow, index' : 'nofollow, noindex'}
			/>
			<link rel="canonical" href={`http://santiagorimoldi.com${router.asPath ?? null}`} />
			{rest && rest.map((tag) => {
				return (
					<meta key={tag.title}
						name={tag.title}
						content={tag.description}
					/>
				)
			})}
		</Head>
	)
}

export default CustomHead