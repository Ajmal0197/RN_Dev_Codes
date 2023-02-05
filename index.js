/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './srcReduxToolkit/App';
// import App from './srcDynamicTextInput';
// import App from './srcAppPerformance/reactMemo';
// import App from './srcAppPerformance/useCallback';
import App from './srcAppPerformance/useMemo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
