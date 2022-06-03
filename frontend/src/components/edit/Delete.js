import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const Delete = () => {
    const API_URL = "http://localhost:8080/user/";

    const handleRemoveUser = (id) => {
		setGetUser(getUser.filter((user) => user.id !== id));
	};

	return (
		<React.Fragment>
			<div className='user-list'>
				{!_.isEmpty(getUser) ? (
					getUser.map((user) => (
						<User key={user.id} {...user} handleRemoveUser={handleRemoveUser} /> ))
				): (
					<p className='message'>User deleted!</p>
				)				}
			</div>
		</React.Fragment>
	);
}