let nextTodoId = 0;

/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';

/*
 * other constants
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 * Action creators are exactly that—functions that create actions. It's easy to conflate the terms “action” and “action creator”, so do your best to use the proper term.
 * 액션 크리에이터는 액션을 생성하는 함수입니다. '액션'과 '액션 크리에이터'라는 용어를 쉽게 결합 할 수 있으므로 적절한 용어를 사용하기 위해 최선을 다하십시오
 *
 * Actions는 응용 프로그램에서 store으로 데이터를 전송하는 정보 페이로드입니다. 그것들은 store에 대한 유일한 정보 소스입니다. store.dispatch ()를 사용하여 store로 보냅니다.
 */
export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})