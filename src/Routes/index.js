/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PreLogin from '../Pages/PreLogin';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

import AdminHome from '../Pages/Admin/Home';

const ACTIVE_TAB_COLOR = '#75cfb8';
// const INACTIVE_TAB_COLOR = '#2d1b6b';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AdminTab = (props) => {
  return (
    <Drawer.Navigator
      drawerStyle={{backgroundColor: '#fff'}}
      drawerContent={(props2) => (
        <CustomDrawerContent logout={props.logout} {...props2} />
      )}
      initialRouteName="Jadwal">
      <Drawer.Screen name="Home">
        {(props2) => <AdminHome {...props2} data={props.data} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const Route = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState([]);
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (nip, password) => {
    setIsLoading(true);
    // const loginData = await login(nip, password);
    // if (loginData.error) {
    //   Alert.alert('Login Error', loginData.msg);
    // } else {
    //   setData(loginData.data);
    //   setIsLogin(true);
    //   setIsGuru(loginData.data.type === 'Guru' ? true : false);
    // }
    setRole('admin');
    setIsLogin(true);
    setIsLoading(false);
  };

  const handleLogOut = () => {
    setRole(null);
    setIsLogin(false);
    setData([]);
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {!isLogin ? (
            <>
              <Stack.Screen
                options={{headerShown: false}}
                component={PreLogin}
                name={'pre-login'}
              />
              <Stack.Screen
                options={{
                  headerBackTitleVisible: false,
                  headerTitle: 'Login',
                  headerTintColor: ACTIVE_TAB_COLOR,
                }}
                name={'login'}>
                {(props) => (
                  <Login {...props} loading={isLoading} login={handleLogin} />
                )}
              </Stack.Screen>
              <Stack.Screen
                options={{
                  headerBackTitleVisible: false,
                  headerTitle: 'Register',
                  headerTintColor: ACTIVE_TAB_COLOR,
                }}
                name={'Register'}>
                {(props) => <Register {...props} loading={isLoading} />}
              </Stack.Screen>
            </>
          ) : (
            role === 'admin' && (
              <>
                <Stack.Screen options={{headerShown: false}} name={'Jadwal'}>
                  {(props) => (
                    <AdminTab
                      {...props}
                      login={handleLogin}
                      data={data}
                      logout={handleLogOut}
                    />
                  )}
                </Stack.Screen>
              </>
            )
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Route;

function CustomDrawerContent(props) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <Text style={styles.menuText}>MENU</Text>
        <View style={styles.container}>
          <View>
            <DrawerItemList activeTintColor={ACTIVE_TAB_COLOR} {...props} />
          </View>
          <TouchableNativeFeedback
            onPress={() => props.logout()}
            background={TouchableNativeFeedback.Ripple('#adacac', false)}>
            <View style={styles.logout}>
              <Text style={styles.logoutText}>Logout</Text>
              <Icon name="exit-to-app" size={30} color="#fff" />
            </View>
          </TouchableNativeFeedback>
        </View>
      </DrawerContentScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('screen').height / 1.3,
    justifyContent: 'space-between',
  },
  menuText: {
    fontSize: 30,
    paddingHorizontal: 10,
    paddingTop: Dimensions.get('screen').height / 25,
    color: ACTIVE_TAB_COLOR,
    fontWeight: 'bold',
  },
  logout: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#75cfb8',
    width: Dimensions.get('screen').width / 1.5,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: Dimensions.get('screen').height / 60,
  },
  logoutText: {
    paddingHorizontal: 15,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
