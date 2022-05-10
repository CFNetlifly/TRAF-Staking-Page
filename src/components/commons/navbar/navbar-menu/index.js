import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

const { item_button, active } = styles;

const navItems = [
    {
        id: 0,
        name: 'Staking',
        href: '/staking',
    },
    {
        id: 1,
        name: 'Dashboard',
        href: '/dashboard',
    },
];

const NavbarMenu = () => {
    const { pathname } = useRouter();

    return (
        <div className="is-flex is-align-items-center">
            <div className=" has-background-hgrao5 has-border-radius-20 p-1">
                <div className="columns">
                    {navItems.map(item => (
                        <div className="column">
                            <Link href={item.href} key={item.id} passHref>
                                <button
                                    key={item.id}
                                    className={`unstyled-button ${item_button} 
                        ${pathname === item.href ? active : ''}   has-border-radius-20 px-4 py-1`}
                                    type="button"
                                >
                                    <b>{item.name}</b>
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavbarMenu;
