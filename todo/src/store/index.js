import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{      // state 데이터가 들어가는곳

    },
    mutations:{   //데이터를 실직적으러 변경하는곳은 mutations이다

    },
    actions: {   //함수 메소드가 들어가는곳 비동기적인 일을 처리함  actions이 mutations한테 데이터를 바꿔달라 요구하며

    }, 
    getters:{  //vue components 안에 coputed 데이터 표현을 더 직관적이고 간결하게 도와주는 속성이다. 

    }
});