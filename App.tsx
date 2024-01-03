import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './navigation/DrawerNavigation';
import ArtworkDetail from './screens/DetailScreen';
import Provider from './hooks/context';
import SearchScreen from './screens/SearchScreen';
import { AppRoute } from './navigation/AppRoute';

const Stack = createStackNavigator();

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={AppRoute.DRAWER} component={DrawerNavigation} />
            <Stack.Screen name={AppRoute.ARTWORK_DETAIL} component={ArtworkDetail} />
            <Stack.Screen name={AppRoute.SEARCH} component={SearchScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}
