import Styles from '../style.module.css';

const Todo = ({ todoItem, todoList, setTodoList }) => {
    const deleteTodo = () => {
        setTodoList(todoList.filter(item => item.id !== todoItem.id))
    }

    return (
        <div>
            <div className={Styles.todoitem}>
                <h3 className={Styles.todoname}>{ todoItem.name}</h3>
                <button onClick={ deleteTodo } className={Styles.deletebutton}>Done</button>
            </div>
        </div>
    )
}

export default Todo;