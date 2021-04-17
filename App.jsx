import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {

    const [state, newstate] = useState("");
    const [Items, setItems] = useState([]);

    const putItem = () => {
        newstate("");
        if (state != "") {
            setItems((oldItems) => {
                return [...oldItems, state];
            })
        }
        else {
            window.alert('Please add an Item');
        }
    }

    const getItem = (event) => {
        newstate(event.target.value);
    }

    const delItem = (id) => {

        setItems((oldItems) => {
            return oldItems.filter((arrElement, index) => {
                return index != id;
            })
        }
        )
    }



    return (
        <>
            <div>
                <div className="innerdiv">
                    <h1>ToDo List</h1>
                    <span className='maindiv'><input type='text' placeholder="Add an  item" name='task' onChange={getItem}
                        value={state}></input>
                        <span className='buttondiv'>
                            <button className='btn' onClick={putItem}><i class="fa fa-plus-circle"></i>
                            </button>
                        </span>
                    </span>
                    <hr />

                    <ul className='fa-ul'>
                        {Items.map((itemVal, index) => {
                            return <ToDoList
                                text={itemVal}
                                id={index}
                                key={index}
                                onSelect={delItem} />;
                        })}
                    </ul>
                </div>

            </div>
        </>
    );

}

export default App;