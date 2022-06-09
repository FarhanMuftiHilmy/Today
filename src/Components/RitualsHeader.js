import React, { Component } from 'react'

export default class RitualsHeader extends Component {
    render() {
        let idLocale = require('moment/locale/id');
        Moment.updateLocale('id', idLocale);
        return (
            <div>
                <img src={process.env.PUBLIC_URL + '/notes.png'} alt="avatar" width="200px" />
                {/* <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/todo-list-1725496-1465657.png" alt="avatar"/> */}
                <h3><FavoriteIcon fontSize="large" color="error" /> <FavoriteIcon color="error" /> Mood Tracker <FavoriteIcon color="error" /> <FavoriteIcon fontSize="large" color="error" /> </h3>
                <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
            </div>
        )
    }
}
