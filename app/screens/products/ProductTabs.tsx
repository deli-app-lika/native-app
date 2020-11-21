import React from 'react';
import ScrollableTabView, {
  ScrollableTabBar
} from 'react-native-scrollable-tab-view';
import Products from './Products';

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
      <Products
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

const ProductTabs = (props: any) => {
  console.log('PROPS', props);
  return <CategoryTabs />;
};

export default ProductTabs;
