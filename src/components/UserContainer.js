import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fechtUsers } from '../redux';

function UserContainer({ userData, fechtUsers }) {
    useEffect(() => {
        fechtUsers()
    }, []);

    return userData.loading ? (
        <h2>Loading</h2>) : userData.error ? (
            <h2>{userData.error}</h2>
        ) : (
                <div>
                    <h2>User list</h2>
                    <div>
                        {userData && userData.users && userData.users.map((user, index) => <p key={index}>{user.name}</p>)}
                    </div>
                </div>
            );
}

const mapStateToProps = state => {
    return {
        userData: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fechtUsers: () => dispatch(fechtUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
