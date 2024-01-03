import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from './navigation/DrawerNavigation';
import ArtworkDetail from './screens/DetailScreen';
import Provider from './hooks/context';
import SearchScreen from './screens/SearchScreen';
import { AppRoute } from './navigation/AppRoute';

const Stack = createNativeStackNavigator();

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name={AppRoute.DRAWER}
              component={DrawerNavigation}
              options={{
                animation: 'slide_from_left',
              }}
            />
            <Stack.Screen
              name={AppRoute.ARTWORK_DETAIL}
              options={{
                animation: 'slide_from_right',
              }}
              component={ArtworkDetail}
            />
            <Stack.Screen
              name={AppRoute.SEARCH}
              component={SearchScreen}
              options={{
                animation: 'slide_from_left',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}
