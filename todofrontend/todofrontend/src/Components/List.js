import { items } from './Items';
import './List.css';
import './Checkbox/Checkbox';
import Checkbox from './Checkbox/Checkbox';

const List = () =>{
    return (
        <div className="List">
            <h1>List</h1>
            <div className="Items_List">
                {items && items.map(items =>
                                    <tr key={items.id}>
                                        <div className="item">
                                            <Checkbox label={items.description} />
                                            <hr />
                                        </div>
                                    </tr>
                                )}
            </div>
        </div>
    );
}

export default List;