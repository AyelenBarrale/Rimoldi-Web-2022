import React from 'react'
import dynamic from 'next/dynamic'
import logo from '../../../public/assets/general/logo.webp'
import style from '../../../styles/components/generalComponents/navbar.module.scss'

const Link = dynamic(() => import('next/link'))
const Image = dynamic(() => import('next/image'))

const Navbar = () => {
    const menuItems = [
		{
			title: 'Works',
			path: '/works',
			className: 'nav_link',
		},
		{
			title: 'W.I.P.',
			path: '/wip',
			className: 'nav_link',
		},
		{
			title: 'About',
			path: '/about',
			className: 'nav_link',
		},
		{
			title: 'Contact',
			path: '/contact',
			className: 'nav_link',
		},
	]

    return (
        <>
            <section>
                    <nav className={style.navbar_nav}>
                    	<div className={style.logo}>
							<Link href="/" passHref>
								<a>
									<Image
										src={logo}
										alt='Santiago Rimoldi. Graphic Designer'
										priority
										width='200px'
										height='31,5px'
									/>
								</a>
							</Link>
						</div>
						<ul className={style.nav_menu}>
							{menuItems.map((item, i) => {
								return (
									<li key={i}>
										<Link href={item.path}>
											<a className={style[item.className]}>{item.title}</a>
										</Link>
									</li>
								)
							})}
						</ul>
                    </nav>
            </section>
        </>
    )
}

export default Navbar