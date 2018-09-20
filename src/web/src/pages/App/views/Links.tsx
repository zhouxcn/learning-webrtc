import * as React       from 'react';
import { Link }         from 'react-router-dom';
import { routes }       from '../../../routes';
import { Interfaces }   from '../../../utils';

const links: JSX.Element[] = Object.keys(routes).map((key: string) => {
    const route: Interfaces.ILink = routes[key];

    return (
        <li key={route.to}>
            <Link to={route.to}>{route.title}</Link>
        </li>
    );
});

export const Links = () => (
    <div className="routes">
        <ul>
            {links}
        </ul>
    </div>
);