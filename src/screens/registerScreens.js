import { Navigation } from 'react-native-navigation';
import Messages from './messages';


export function registerScreens(store, provider) {
    Navigation.registerComponent('DormHero', () => Messages, store, provider);
}

