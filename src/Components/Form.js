import styles from '../style.module.css';
import shortid from 'shortid';

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
    const handleChange = (event) => {
        setTodo(event.target.value)
        console.log(todoList)
    }

    const handleSubmit = (event) => {
        event.preventDefault();         //  Prevents the default action of form
      
        // The following line of code created an array which holds the old todoList and newly added values entered into the field
        setTodoList([...todoList, { name:todo, id: shortid.generate }])  //  These 3 dots are spread operator and spread the array element across
        setTodo("")     //  We setTodo empty so whenever one input is entered into the field, it is reset and automatically removed from the input field.
    }

    return (
        <div className={styles.todoform}>
            <h2 className={styles.subtitle}>Schedule Your Tasks Here</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={todo}
                    onChange={handleChange}
                    className={styles.todoinput}
                    placeholder="Write here..."></input>
                <div className={styles.container}>
                <button type="submit" className={styles.todobutton}>Add</button>

                </div>
            </form>
        </div>
    )
}


export default Form;