export default {
    namespaced:true,
    state:{      // state 데이터가 들어가는곳
        todos:[
              { id: 1, text: 'Buy a car', checked:false},
              { id: 2, text: 'play game', checked:false},
        ],
    },
    mutations:{   //데이터를 실직적으러 변경하는곳은 mutations이다
        
        ADD_TODO(state,value){
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false,
              });
        },
        TOGGLE_TODO(state, {id,checked}){
            const index = state.todos.findIndex(todo => {
                return todo.id ===id
              });
              state.todos[index].checked =checked;
            },   
        DELETE_TODO(state,todoId){
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
              });
              state.todos.splice(index,1);
        }
    },
    actions: {   //함수 메소드가 들어가는곳 비동기적인 일을 처리함  actions이 mutations한테 데이터를 바꿔달라 요구하며

        addTodo({commit}, value){
            setTimeout(function(){
                commit('ADD_TODO',value);
            }, 500)
        },
        toggleTodo({commit}, payload) {
            setTimeout(function(){
                commit('TOGGLE_TODO',payload);
            }, 500)
        },
        deleteTodo({commit},todoId){
            setTimeout(function(){
                commit('DELETE_TODO',todoId);
            }, 500);
        }
    }, 
    getters:{  //vue components 안에 coputed 데이터 표현을 더 직관적이고 간결하게 도와주는 속성이다. 
        number0fcompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
}