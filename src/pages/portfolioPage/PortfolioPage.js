import React from 'react';
import classes from './portfolioPage.module.css';
import Users from '../../components/users/Users';

function PortfolioPage() {
    const user = ["Dastan", "Aaikol", "Beka"]

    return (
        <div>
            <h1 className={classes.title}>portfolio page</h1>
            <Users users={user} />
        </div>
    )
};

export default PortfolioPage;