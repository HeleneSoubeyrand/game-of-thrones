import React from 'react'

import './Character.css';

class Character extends React.Component {
	render() {
       const { fullName, title, imageUrl } = this.props.character

		return(
            <ul className="col-md-4 col-sm-6 col-12">
                <li className="card"> 
                    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
                    </div>
                    <div className="text mt-3">
                        <h2 className="text-center">{fullName}</h2>
                        <p className="text-center">{title}</p>
                    </div>
                </li>
            </ul>
		)
	}
}

export default Character