/**
 * Created by Administrator on 2018/7/3/003.
 */
import {createStore} from 'redux';
import reducers from '../reducers';

export default createStore(reducers,window.devToolsExtension ? window.devToolsExtension() : undefined);