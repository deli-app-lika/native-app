import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ScrollableTabView, {
  ScrollableTabBar
} from 'react-native-scrollable-tab-view';
import { BartenderParamList } from '../navigation/types/BartenderParamList';
import Categories from './categories/Categories';
import Cocktail from './cocktail/Cocktail';

interface BartenderProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CategoryTabs({ pressCategoryHandler }: any) {
  // TODO get categories from algolia
  const categories = [
    'rum',
    'tequila',
    'wine',
    'bourbon',
    'gin',
    'whiskey',
    'vodka',
    'liqueur'
  ];
  const categoriesToShow = categories.map((cat) => {
    return (
      <Categories
        category={cat}
        // @ts-ignore
        tabLabel={cat[0].toUpperCase() + cat.slice(1)}
        key={cat}
      />
      // </View>
    );
  });
  return (
    <ScrollableTabView
      style={{
        marginTop: 20
      }}
      initialPage={0}
      tabBarInactiveTextColor="green"
      tabBarUnderlineStyle={{}}
      renderTabBar={() => (
        <ScrollableTabBar
          style={{ borderWidth: 0, marginLeft: 20, marginRight: 20 }}
        />
      )}
    >
      {categoriesToShow}
    </ScrollableTabView>
  );
}

const BartenderStack = createStackNavigator<BartenderParamList>();

const Category = (props: any) => {
  console.log('PROPS', props);
  return <CategoryTabs />;
};

const Bartender: React.FC<BartenderProps> = () => {
  return (
    <BartenderStack.Navigator initialRouteName="Home">
      <BartenderStack.Screen name="Home" component={Category} />
      <BartenderStack.Screen name="Cocktail" component={Cocktail} />
    </BartenderStack.Navigator>
  );
};

export default Bartender;
