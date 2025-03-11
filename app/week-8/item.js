export default function Item({name, category, quantity, onSelect}) {
    // Add a safety check to prevent the error
    const handleClick = () => {
        if (typeof onSelect === 'function') {
            onSelect(name);
        }
    };

    return (
        <div 
            className="rounded-lg bg-yellow-300 p-2 m-2 text-black cursor-pointer"
            onClick={handleClick} 
        >
            <h1>{name}</h1>
            <h3>{category}</h3>
            <h3>{quantity}</h3>
        </div>
    );
}