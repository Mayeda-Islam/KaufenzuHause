import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import GetAPI from '../../APIHooks/GetAPI';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const Sidenav = ({ state, setState }) => {

    const [categories, setCategories] = React.useState([])

    useEffect(() => {
        GetAPI('categories', setCategories)
    }, [])

    return (
        <div>
            <List>
                {
                    categories?.map((category, index) => {
                        <NavLink
                            to="liveClass"
                            className=''
                            onClick={() => setState({ left: false })}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <img src={category?.image} alt="category images" className='w-6 h-6' />
                                </ListItemIcon>
                                <ListItemText primary={category?.categoryTitle} />
                            </ListItemButton>
                        </NavLink>
                    })
                }


            </List>
        </div>
    )
}

export default Sidenav