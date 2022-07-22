import React from 'react';

function Users(props) {
    return (
            <ul>
                {
                    props.users.map((user) => {

                        return (
                            <li>{user}</li>
                        )
                    })
                }

            </ul>
        )
};

export default Users;