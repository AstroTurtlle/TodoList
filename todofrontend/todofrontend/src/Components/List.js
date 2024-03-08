import { items } from './Items';
import { useState } from 'react';
import './List.css';

function List() {
    console.log(items)
    const [pula,setPula] = useState(0);
    return (
        <div className="List">
            <h1>List</h1>
            <div className="Items_List">
                {items && items.map(items =>
                                    <tr key={items.id}>
                                        <div className="item">
                                            <input type="checkbox" checked={pula} onClick={() => setPula(!pula)} />
                                            <td>{items.id}.  </td>
                                            <td> {items.description}</td>
                                        </div>
                                    </tr>
                                )}
                        </div>
        </div>
    );
}

export default List;