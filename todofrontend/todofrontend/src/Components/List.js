import Button from '@mui/material/Button';
import './List.css';
import './Checkbox/Checkbox';
import Checkbox from './Checkbox/Checkbox';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      thematic: {
        main: '#00b6bc',
        light: '#00d4dc',
        dark: '#007a7e',
        contrastText: '#fff',
      },
    },
  });

const List = () =>{
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/todo/list')
        .then(res=>res.json())
        .then((result)=>{
            console.log(result);
            setItems(result);
        }
        )
    },[]);
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
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="thematic" >Add item</Button>
            </ThemeProvider>
        </div>
    );
}

export default List;