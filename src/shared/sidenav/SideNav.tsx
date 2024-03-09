import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { useNavigate } from 'react-router-dom';
import { navList } from './nav';
import { styles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideNav = () => {
    const navigate = useNavigate()

    return (
      <List sx={styles.list}>
        {navList.map((item: any) => (
          <ListItem sx={styles.listItem}>
            <ListItemAvatar onClick={() => navigate(item.redirect)}>
              <FontAwesomeIcon
                icon={item.icon}
                style={{
                  color: "black",
                  fontSize: "2rem",
                }}
              />
            </ListItemAvatar>
          </ListItem>
        ))}
      </List>
    );
};

export default SideNav;