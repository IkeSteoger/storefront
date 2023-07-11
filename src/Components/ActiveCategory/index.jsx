import { When } from 'react-if';
import { useSelector } from 'react-redux';

function ActiveCategory() {

    const { activeCategory } = useSelector((state) => state.categories);
    // console.log(activeCategory)


    return (
        <>
            <When condition={activeCategory}>
                <h1 key={activeCategory.name}>{activeCategory.name}</h1>
                <h4 data-testid="activeCategory-h4">Description on the Way</h4>
            </When>
        </>
    )
}

export default ActiveCategory;