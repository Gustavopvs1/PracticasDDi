import React from 'react';
import { List } from 'react-native-paper';
import { map } from 'lodash';
import { accountMenu } from './Menu.data';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
const navigator = useNavigation();
  return (
    <List.Section>

      <List.Subheader>Menú</List.Subheader>
      {map(accountMenu, (menu) => (
        <List.Item
          key={menu.title}
          title={menu.title}
          description={menu.description}
          left={(props) => <List.Icon {...props} icon={menu.leftIcon} />}
          onPress={() => navigator.navigate(menu.screen)}
        />
      ))}

    </List.Section>
  );
};

