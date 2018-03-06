import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return(
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink to="/" exact={true} activeClassName="active">
                             <i className="md-icon">dashboard</i> <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/feed" activeClassName="active">
                            <i className="md-icon">perm_identity</i> <span>Feed</span>
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="/contacts" activeClassName="active">
                            <i className="md-icon">perm_identity</i> <span>Contacts</span>
                        </NavLink>
                    </li>



                    <li>
                        <NavLink to="/projects" activeClassName="active">
                            <i className="md-icon">folder_open</i> <span>Projects</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/members" activeClassName="active">
                            <i className="md-icon">people_outline</i> <span>Members</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/tasks" activeClassName="active">
                            <i className="md-icon">done_all</i> <span>Tasks</span>
                        </NavLink>
                    </li>
                </ul>


            </div>
        );
    }
}
