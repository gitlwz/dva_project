import { Map } from 'immutable';

const initState = Map({
    i18n: 'zh_CN'
})

export default {

    namespace: 'app',

    state: initState,

    subscriptions: {

    },

    effects: {

        * changeLang({
            payload: { value },
        }, { put }) {
            yield put({ type: 'updateLang', payload: { value } });
        },

    },

    reducers: {
        updateLang(state, { payload: { value } }) {
            return state.set('i18n', value);
        },
    },

};
