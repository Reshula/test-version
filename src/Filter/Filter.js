import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from '../redux/booksSlice';

const Filter = ({ category}) =>{
    const dispatch = useDispatch()
    
    
    const selectedCategory = useSelector(getSelectedCategory)
    return(

        <div >
           <p onClick={() => {dispatch(filterCategory(category))}}
            className={selectedCategory === category ? 'categoryButtonSelected' : 'categoryButton'}>{category}</p>
        </div>
    )
}
export default Filter;